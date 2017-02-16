var nodemailer = require('nodemailer');
var config = require('../config');

//configura la cuenta de gmail
var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: config.iscoutEmail, // Your email id
          pass: config.emailpasword // Your password
      }
});

//hace accesibles el correo propio de la web y el correo de los webmaster
module.exports.iscoutEmail = config.iscoutEmail;
module.exports.webTeamEmail = config.webTeamEmail;


//función que permite mandar un email en nombre de la página web, suministrando un objeto mailOptions
var sendMail = function (mailOptions){
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
module.exports.sendMail = sendMail;

//Función que envía lo que recibe como parámetro como email a los webmaster
module.exports.sendError = function (texto){
  var mailOptions = {
    from: config.iscoutEmail, // sender address
    to: config.webTeamEmail, // list of receivers
    subject: 'Error en la web ',
    text: texto
  };

  sendMail(mailOptions);
};
