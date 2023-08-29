import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TWILIO_ACCOUNT_SID = '<TWILIO_ACCOUNT_SID>';
const TWILIO_AUTH_TOKEN = '<TWILIO_AUTH_TOKEN>';
const TWILIO_SMS_NUMBER = '<TWILIO_SMS_NUMBER>';

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'maglianodev',
        pass: 'eqwfaexmfzxtifuh'
    }
});

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.post('/email', (req, res) => {
    let result = transport.sendMail({
        from: 'maglianodev@gmail.com',
        to: 'diogo.magliano@gmail.com',
        subject: 'Teste de envio de email',
        html: `
        <div>
        <h1>Teste de envio de email</h1>
        <img src="cid:coder" />
        </div>`,
        attachments: [
            {
                filename: 'coderhouse.png',
                path: './image/coderhouse.png',
                cid: 'coder'
            }
        ]
    });

    res.send('Email enviado com sucesso!');
});

app.post('/sms', (req, res) => {
    let {
        name,
        ordernumber,
        phonenumber
    } = req.body;
    let result = twilioClient.messages.create({
        body: `Olá ${name}, seu pedido ${ordernumber} foi recebido com sucesso! `,
        from: TWILIO_SMS_NUMBER,
        to: phonenumber
    });
    console.log(`SMS enviado para ${phonenumber}`);
    return res.send(`SMS enviado para ${phonenumber} : ${name}  - Order ${ordernumber}`);
});

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});