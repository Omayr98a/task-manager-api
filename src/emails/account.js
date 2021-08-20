const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_Key)

// sgMail.send({
//     to: 'umair98a@gmail.com',
//     from: 'umair98a@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// })
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'umair98a@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'umair98a@gmail.com',
        subject: 'Good Bye!',
        text: `Good buy, ${name}. please give us feedback how we can improve our services.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}