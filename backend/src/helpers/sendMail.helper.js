import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'botmailertest@gmail.com',
        pass: 'Botmailer123',
    },
});

const sendMail = (
    recieveAddress,
    recieverName,
    subject,
    message,
    newPassword
) => {
    let mailOptions = {
        from: 'botmailertest@gmail.com',
        to: recieveAddress,
        subject: subject,
        html:
            '<p>Dear ' +
            recieverName +
            ',</p>' +
            '<p>' +
            message +
            '.</p>' +
            '<p>Here is your new password: </p>' +
            '<b>' +
            newPassword +
            '</b>' +
            '<p>If you did not make this request, please ignore this email.</p>',
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ');
            console.log(info);
        }
    });
};

export default sendMail;
