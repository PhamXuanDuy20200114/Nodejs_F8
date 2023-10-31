const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

//template engine and static file
app.use(express.static(path.join('./src', '/public')))

app.set('views', path.join('./src', '/resources/view'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('home')
})

app.listen(port, () => { console.log(`App listening at http://localhost:${port}`) })