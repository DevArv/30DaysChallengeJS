//This script import the functions of SendOptions.js.
//This excecute the functions in order.

import { sendSms, sendEmail, sendWhatsapp } from "./SendOptions.js";

async function getComunicationOptions() {

    const COMUNICATION_ARRAY = [];

    try {
        COMUNICATION_ARRAY.push(await sendSms());
        COMUNICATION_ARRAY.push(await sendEmail());
        COMUNICATION_ARRAY.push(await sendWhatsapp());
    } catch (error) {
        console.log('Error: ' + error.message);
    }
    return COMUNICATION_ARRAY;
}

getComunicationOptions()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error.message)
})