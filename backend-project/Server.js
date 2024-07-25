const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amalnisha7705@gmail.com',  // replace with your email
            pass: 'tscm vmzs otdm xjbh'  // replace with your email password or use environment variables
        }
    });

    const mailOptions = {
        from: email,
        to: 'amalnisha7705@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
