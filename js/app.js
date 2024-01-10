const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a nodemailer transporter using your email credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abdisamk@gmail.com',
            pass: 'mona@12#'
        }
    });

    // Setup email data
    const mailOptions = {
        from: 'test@gmail.com',
        to: 'abdisamk@gamil.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent: ' + info.response);
        res.send('Your message has been sent successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
