const swDev = async () => {
    try{
        const swUrl =  `${process.env.PUBLIC_URL}/sw.js`;
        const response = await navigator.serviceWorker.register(swUrl);
        console.log("response",response);
        
    } catch (e) {
        console.log(e);
    }
}

export default swDev;