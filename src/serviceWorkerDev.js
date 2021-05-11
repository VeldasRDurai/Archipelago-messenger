// Url Encription
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Send request to database for add new subscriber
const saveSubscription = async (subscription) => {
    try {
        const response = await fetch("https://archipelago-messenger-backend.herokuapp.com/subscribe", {
            credentials: 'include',
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(subscription),
        });
        if ( response.status !== 200 && response.status !== 304 ){
            console.log('HTTP error ' + response.status, null);
        } else {
            console.log("User subscribed to server");
        }
    } catch (e) {
        console.log(e);
    }
}
const serviceWorkerDev = async () => {

    let isSubscribed = false;
    let swRegistration = null;
    let applicationKey = "BGQ6dlZEvivjgLxK9YzD7UY5HYNhi74u5lCTN6ENfBcrI4Ws7nkKJUBJpIhyH8t2TJkPK3e6rPa6uVFHcsrOUFE";
    
    
    
    // Installing service worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');
        
        const swUrl =  `${process.env.PUBLIC_URL}/sw.js`;
        navigator.serviceWorker.register(swUrl)
            .then(function (swReg) {
                console.log('service worker registered');
    
                swRegistration = swReg;
    
                swRegistration.pushManager.getSubscription()
                .then(function (subscription) {
                    isSubscribed = !(subscription === null);

                    if (isSubscribed) {
                        console.log('User is subscribed');
                    } else {
                        swRegistration.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: urlB64ToUint8Array(applicationKey)
                            })
                            .then(function (subscription) {
                                console.log(subscription);
                                console.log('User is subscribed');

                                saveSubscription(subscription);
                                console.log( subscription );

                                isSubscribed = true;
                            })
                            .catch(function (err) {
                                console.log('Failed to subscribe user: ', err);
                            })
                    }
                })
            })
            .catch(function (error) {
                console.error('Service Worker Error', error);
            });
    } else {
        console.warn('Push messaging is not supported');
    }
    
}
export default serviceWorkerDev;