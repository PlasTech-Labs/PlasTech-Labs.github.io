var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plastechlabs@gmail.com',
    pass: 'PlasTech2020'
  }
});

var mailOptions = {
  from: 'plastechlabs@gmail.com',
  to: 'plastechlabs@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Plastico</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});