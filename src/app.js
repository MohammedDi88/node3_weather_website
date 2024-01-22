const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../src/utils/geocode');
const forecast = require('../src/utils/forecast');

const app = express();

//definizione configuraziobe per Express.js
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// handelBars vista e locazione
app.set('views', viewPath);
app.set('view engine', 'hbs'); //controllo templates per dinamicizzare i lo stile delle pagine web
hbs.registerPartials(partialsPath);

//setup static directory to server
app.use(express.static(publicDirectoryPath)); //from a static file solo nome index.htlm

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'MoMo MasMmus',
  });
});

const weatherData = {
  location: 'Avola, Syracuse, Italy',
  forecstData:
    'Partly cloudy. it is currently 17 degress out. It feels like 17 degress out',
    sender : "MoMus",
  //  error: "An error has occured"
};

app.get('/help', (req, res) => {
  res.render('help', {
    randomInfo: 'Here some information',
    title: 'Help Page',
    name: 'MasMus Company',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    name: 'MoMo AND MasMus',
  });
});

app.get('/weather', (req, res) => {
  const location = req.query.location;
  if (!location) {
    return res.send({
      error: 'you  must provide a location',
    });
  }

  //let { forecstData }= weatherData;

  res.send(weatherData
  
  // {
  //             location: location,
  //             title: 'Weather Page',
  //             forecstData: forecstData,
  //             name: 'MoMo and Mas in collaboration with external API',
  //           }
            );

  
  // geocode(location, (error, {latitude ,longitude, location}) => {
    
  //   if (error) {
  //     return  res.send({
  //       error: error,
  //     });
  //   } else {
  //     forecast(latitude, longitude, (error, forecstData) => {
  //       if (error) {
  //                   return  res.send({
  //           error: error,
  //         }); ;
  //       } else {
  //         res.render('weather', {
  //           location: location,
  //           title: 'Weather Page',
  //           forecstData: forecstData,
  //           name: 'MoMo and Mas in collaboration with external API',
  //         });
  //       }
  //     });
  //   }
  // });




});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'you  must provide a search term',
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    message: 'Article not Found',
    name: 'MoMo and MusMus',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    message: 'Page not Found',
    name: 'MoMo and MusMus',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
