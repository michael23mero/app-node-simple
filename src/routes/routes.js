const rutas = require('express').Router()
const speakeasy = require('speakeasy')
const QRCode = require('qrcode')
const nodeMailer = require('nodemailer')

rutas.get('/', (req, res) =>{
    res.render('index', { title : 'Inicio'})
})

rutas.get('/login', (req, res) =>{
    res.render('login', { title : 'Login'})
})

rutas.post('/login', (req, res) => {
    const { ...data }  = req.body
    console.log(data)
    res.redirect('/')
})

rutas.get('/login2', (req, res) => {
    const secret = speakeasy.generateSecret()
    QRCode.toDataURL(secret.otpauth_url, (err, dataUrl) => {
        if(err || !dataUrl){
            return reject(err)
        }
        res.render('login2', {title: 'login2', secret: secret.base32, qrCode: dataUrl}) 
    })
})

rutas.post('/login2', (req, res) => {
    console.log(req.body)
    const { token, secret } = req.body;
    const validation = speakeasy.totp.verify({
        secret, encoding: 'base32', token
    })
    res.json(validation)
})

rutas.post('/sendMail', async (req, res) => {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'maicol23mero@gmail.com',
            pass: 'xujwoxagyopqpurr'
        }
    }

    const message = {
        from: 'maicol23mero@gmail.com',
        to: req.body.para,
        subject: 'Test mail message',
        text: req.body.message
    }

    const transport = nodeMailer.createTransport(config)
    await transport.sendMail(message)

    res.redirect('/')
})

module.exports = rutas