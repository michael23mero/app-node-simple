const express = require('express')
const path = require('path')

class Servidor{
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        require('./config/dbc').dbc()

        this.middlewares()
        this.routes()
        this.views()
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}))
    }

    views(){
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'ejs')
    }
    routes(){
        this.app.use(require('./routes/routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor a su servicio en el puerto ${this.port}`)
        })
    }
}

module.exports = Servidor