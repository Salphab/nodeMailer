const express = require('express');
const App = express();
const cor = require('cors');
const nodemailer = require('nodemailer');
const port = 5000;

App.use(cor())
App.use(express.json())
App.use(express.urlencoded({ extended: true }));


App.post('/api/message', (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ibrahimbadmus0295@gmail.com',
          pass: 'wcnpyztehehuubib'
        }
      });
      
      const mailOptions = {
        from: req.body.email,
        to: 'wazey442@gmail.com',
        subject: req.body.subject,
        text: req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(400).send(error);
        } else {
          res.status(200).send('Email sent: ' + info.response);
        }
      }); 
})

App.listen(port, ()=>{
    console.log(`you are connected to port ${port}`);
})
