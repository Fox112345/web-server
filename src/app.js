const path = require('path')
const express = require ('express');
const hbs = require('hbs');
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

console.log(path.join(__dirname, '../public' ))

const app = express()

// Paths for Express
const publicDirPath = path.join(__dirname, '../public' );
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Whether App',
        name: 'Me'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'Me'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'Me'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
             error: "Invalid address"
         })
     };
     
     console.log(req.query.address);

     geocode(req.query.address, (error, point = {})=>{
        if(error){
           return res.send({error})
        }
        forecast(point, (error, data)=>{
            if (error){
               return res.send({error})
            }
            res.send({
                data,
                point
            })
            console.log(point.location);
            console.log(data);
        })
    })
 
})


app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server started');
})