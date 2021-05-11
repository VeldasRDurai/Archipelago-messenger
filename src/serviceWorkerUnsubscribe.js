// const deleteSubscription = async (subscription) => {
//     try {
//         const response = await fetch("https://archipelago-messenger.herokuapp.comunsubscribe", {
//             credentials: 'include',
//             method: 'POST', 
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify({ subscription })
//         });
//         if ( response.status !== 200 && response.status !== 304 ){
//             console.log('HTTP error ' + response.status, null);
//         } else {
//             console.log("User subscribed to server");
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

const serviceWorkerUnsubscribe = async () => {
    
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');
        navigator.serviceWorker.getRegistrations()
        .then( function(registrations) {
            for(let registration of registrations) {
                console.log('registration : ', registration );
                registration.unregister();
                // deleteSubscription(registration);
            }
        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });
    } else {
        console.warn('Push messaging is not supported');
    }
    
}
export default serviceWorkerUnsubscribe;