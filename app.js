const request = require('request');

const forecast = require('./components/forecast');
const geocode = require('./components/geocode');


const country = process.argv[2]

geocode(country , (error, data)=>{
  console.log('Error : ' , error)
  console.log('data : ' , data)

  forecast(data.latitude , data.longtitude , (error , data)=>{
    console.log('Error : ' , error)
    console.log("Data : " , data)
    })
})






