const express = require('express');
const history = require('./history');
const geography = require('./geography');
const scienceQuestions = require('./scienceQuestions');
const app = express();
const port = 8080;
const cors = require('cors');
const nodemailer = require("nodemailer");
const dbConnect = require('./utils/dbConnect');
const { Contact } = require('./Models/Contact');

app.use(cors());
app.use(express.json());

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "himanshu32428@gmail.com",
      pass: "zydnaaiyahbewpvr",
    },
  });

app.get('/history', (req, res) => {
    res.send(history);
});
app.get('/geography', (req, res) => {
    res.send(geography);
});
app.get('/scienceQuestions', (req, res) => {
    res.send(scienceQuestions);
});
app.get('/', (req, res) => {
    res.send('Welcome to the Trivia API!');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message and will get back to you shortly.</p>
        <h3>Your Query:</h3>
        <p>${message}</p>
        <br/>
        <p>Best Regards,</p>
        <p>DevArcade Team</p>
      `,
    };
  
    transporter.sendMail(mailOptions, async(error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        try {
          await Contact.create({name, email, message})
        } catch (error) {
          console.log("Error in Contact Query :-> ", error);
        }
        res.status(200).send('Email sent');
      }
    });

  });

app.use("*", (req, res) => {
    res.send("Error 404: Page not found");
});

dbConnect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
