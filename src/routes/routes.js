const rutas = require('express').Router()

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

module.exports = rutas