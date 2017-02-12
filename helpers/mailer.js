var nodemailer = require('nodemailer');
var config = require('../config');


 var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: config.iscoutEmail, // Your email id
          pass: config.emailpasword // Your password
      }
});


module.exports.iscoutEmail = config.iscoutEmail;
module.exports.webTeamEmail = config.webTeamEmail;



module.exports.sendMail = function (mailOptions){
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        // res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        // res.json({yo: info.response});
    };
  });
};
