var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mailer = require('../helpers/mailer');
var Register   = require('../models/register');

router.post('/', function(req, res, next) {
  // create a sample user
  var newRegister = new Register({
    name: req.body.name,
    lastname1: req.body.lastname1,
    lastname2: req.body.lastname2,
    birthdate: req.body.birthdate,
    role: req.body.role,
    email: req.body.email,
    accepted: false
  });

  // guardamos el nuevo usuario registrado, pendiente de aprobación
  newRegister.save(function(err) {

    if (err) {
      console.log('There was an error saving new Register:' + newRegister);
      console.log(err);
      mailer.sendError('There was an error saving new Register:' + newRegister + '    '+ err);
      return;
    };

    //Email de información al usuario
    var mailOptions = {
      from: mailer.iscoutEmail, // sender address
      to: req.body.email, // list of receivers
      subject: 'Registro Recibido', // Subject line
      html: '<p> Genial! <br/> Estamos procesando los datos que nos has enviado:<br/><br/><br/> Nombre: '+ req.body.name+' <br/> Apellidos: '+req.body.lastname1+' '+ req.body.lastname2 + '<br/> Fecha de nacimiento: '+req.body.birthdate+'<br/> Papel en el grupo: '+req.body.role+'<br/> Email: '+req.body.email+'<br/><br/><br/> En cuanto comprobemos tus datos te enviaremos un email para que puedas acceder a la web.<br/><br/> Buena caza.' // You can choose to send an HTML body instead
    };

    mailer.sendMail(mailOptions);

    //Email para que se apruebe el registro
    var mailOptions = {
      from: mailer.iscoutEmail, // sender address
      to: mailer.webTeamEmail, // list of receivers
      subject: 'Registro '+req.body.name +' '+ req.body.lastname1+ ' pendiente de confirmación', // Subject line
      html: '<p> Datos recibidos: <br/><br/><br/> Nombre: '+ req.body.name+' <br/> Apellidos: '+req.body.lastname1+' '+ req.body.lastname2 + '<br/> Fecha de nacimiento: '+req.body.birthdate+'<br/> Papel en el grupo: '+req.body.role+'<br/> Email: '+req.body.email+'<br/><br/><br/>' // You can choose to send an HTML body instead
    };

    mailer.sendMail(mailOptions);


    console.log('Register saved successfully');
    // res.json({ success: true });
  });







});

//Envía la página de registro
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.render('register', { title: 'Express' });
});

module.exports = router;
