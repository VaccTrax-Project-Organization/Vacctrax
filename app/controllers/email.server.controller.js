const sgMail = require('@sendgrid/mail')
const config = require("../../config/config");

// sending an email to the customer regarding creating new password
exports.sendCreatePasswordEmail = (res, user, token) => {
    if (!process.env.SENDGRID_API_KEY) throw "SENDGRID_API_KEY not set";
    if (!process.env.CREATE_PASSWORD_TEMPLATE_ID) throw "CREATE_PASSWORD_TEMPLATE_ID not set";
    console.log(process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // change from local host to deployed template when deploying
    const msg = {
        to: user.email,
        from: 'vacctrax@outlook.com',
        subject: 'Test Password Creation',
        dynamicTemplateData: {
            token: token,
            firstName: user.firstName
        },
        templateId: process.env.CREATE_PASSWORD_TEMPLATE_ID
    }

    /** using sendgrid send method to send the email*/
    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
            res.status(200).send({message: "Patient account created and email sent",
                email: user.email}).end();
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error).end();
        });
}
