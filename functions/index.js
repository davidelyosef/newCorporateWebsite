const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const firebaseAdmin = require('firebase-admin');
firebaseAdmin.initializeApp();

const db = firebaseAdmin.firestore();

exports.newContact = functions.https.onCall(async (data, context) => {

    try {
        await db.collection("messages").add(data);
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "contact.form.8888@gmail.com",
                pass: "Contact123"
            }
        });
        const mailOptions = {
            from: "contact.form.8888@gmail.com",
            to: "davidyf96@gmail.com",
            subject: `${data.subject}`,
            text: `Full name: ${data.fullName}, \nEmail: ${data.email}, \nMessage: ${data.message}`
        };
        const info = await transport.sendMail(mailOptions);
        console.log(info.response);

        return 'success num. 2';
    }
    catch (err) {
        console.log('error' + err.message);
    }

});