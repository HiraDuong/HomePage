const express = require ('express')
const morgan = require ('morgan')
const exphbs = require('express-handlebars');
const path = require('path')
const app  = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
// http logger
app.use(morgan('combined'))

// template 
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,"resources/views"))
console.log(path.join(__dirname,"resources/views"))


app.get('/',(req,res)=>res.render('home'))

app.listen(port,()=> console.log(`Server đang lắng nghe tại http://localhost:${port}`))