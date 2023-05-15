const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');


app.get('/', (req, res) => {
    res.render('home',
    {
        titulo: 'Home',
        nombre: 'Diego López'
    })
})

app.get('/productos', (req, res) => {
    res.render('productos',
    {
        titulo: 'Listado Productos',
        nombre: 'Diego López',
        rol1:'Admin'
    })
})

app.listen(puerto, ()=> {
    console.log(`Escuchando por el puerto ${puerto}`)
})