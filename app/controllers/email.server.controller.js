const sgMail = require('@sendgrid/mail')
const config = require("../../config/config");

// sending an email to the customer regarding creating new password
exports.sendCreatePasswordEmail = (res, user, token) => {
    sgMail.setApiKey(config.sendgridApiKey);

    // change from local host to deployed template when deploying
    const msg = {
        to: user.email,
        from: 'vacctrax@outlook.com',
        subject: 'Test Password Creation',
        dynamicTemplateData: {
            token: token,
            firstName: user.firstName
        },
        templateId: config.sendgridTemplateId
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
