const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const cors = require('cors')
const fs = require('fs')

const app = express();

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//Use CORS
app.use(cors())


//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello')
});


app.post('/sendMail', async function(req, res) {
    try {
        form = req.body
        const clientJsonStr = fs.readFileSync('./client_secret.json', 'utf-8');
        const clientJson = JSON.parse(clientJsonStr);
        let clientID = clientJson.web.client_id;
        let clientSecret = clientJson.web.client_secret;
        let redirectURI = clientJson.web.redirect_uris;
        let refreshToken = clientJson.web.refresh_token;
    
        let oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI)
        oAuth2Client.setCredentials({refresh_token: refreshToken})

        let accessToken = await oAuth2Client.getAccessToken();
    
        let transporter = nodemailer.createTransport({
            host: "tecmasa.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'tecmasainfo@gmail.com', // generated ethereal user
              clientId: clientID,
              clientSecret: clientSecret,
              refreshToken: refreshToken,
              accessToken: accessToken
            }
        });

        let name = form.name;
        let lastName = form.lastName;
        let email = form.email;
        let phone = form.phone;
        let message = form.message

        console.log(form)
    
        var mailOptions = {
        from: '"Tecmasa Website" <tecmasainfo@tecmasa.com>',
        to: "mariano.alvarez.personal@gmail.com",
        subject: "Email de website",
        text: "Nombre: " + name + "\n" +
              "Apellido: " + lastName + "\n" +
              "Email: " + email + "\n" +
              "Telefono: " + phone + "\n" +
              "Mensaje: " + message
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Messege sent: %s", info.messageId);
            console.log('Preview URL: %', nodemailer.getTestMessageUrl(info));
        })
    } catch (error) {
        console.log(error)
    }
});

app.listen(5000, () => console.log('Server started....'));