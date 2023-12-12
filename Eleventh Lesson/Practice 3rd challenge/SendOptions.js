//Script for sending options.

export function sendSms() {
    return new Promise((resolve) => {
        setTimeout(() => resolve ('SMS sent'), 5000);
    }) 
}

export function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => resolve ('Email sent'), 1000);
    })
}

export function sendWhatsapp() {
    return new Promise((resolve) => {
        setTimeout(() => resolve ('Whatsapp sent'), 500);
    })
}