const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static)

app.get('/', (req,res)=> {
    res.send('hello!')

})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/send-email', (req, res) => {
//   const { firstLast, eAddress, referrer, comments } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'rolosdoughnuts@gmail.com',
//       pass: 'frfm ywjg wnfa sear'
//     }
//   });

//   const mailOptions = {
//     from: eAddress,  // Use the form's email field as the sender
//     to: 'rolos-doughnuts@gmail.com',  // Your email where you receive the message
//     subject: `New Contact Form Submission from ${firstLast}`,
//     text: `First and Last Name: ${firstLast} \n
//             Email Address: ${eAddress} \n
//             Referrer: ${referrer} \n
//             Comments: ${comments}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('Error occurred, try again');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Message sent successfully!');
//     }
//   });
// });


// app.listen(port,'0.0.0.0', () => {
//   console.log(`Server started on port ${port}`);
// });

