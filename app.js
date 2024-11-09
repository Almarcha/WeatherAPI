require('dotenv').config({path: './private.env'});
const express = require('express');
const cors = require('cors');
const { requestWeather } = require('./data/data.js');

const app = express();
app.use(cors())
app.use(express.json());
const port = 4001;

app.get('/',(request,response) => {
    response.json({
        ok: true,
        routes: [
            '/api/weather',
        ]
    });
});

app.get('/api/weather', async (req,res) => {
    const { city, datetime } = req.query;
    const data = await requestWeather(city, datetime);
    res.json({ data });
});

app.listen(port, () =>{
    console.log(`Servidor funcionando en el puerto ${port}`)
});