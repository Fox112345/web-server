const path = require('path')
const express = require ('express');

console.log(path.join(__dirname, '../public' ))

const app = express()
const publicDirPath = path.join(__dirname, '../public' );

app.use(express.static(publicDirPath))


app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'snowing',
        location: 'Vld'
    })
})

app.listen(3000, () => {
    console.log('Server started');
})
