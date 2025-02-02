import React, { useState } from 'react'

function Weather() {
  const [city,setCity]=useState("maharastra");
  const [submitCity,setSubmitCity]=useState("");
  const [temperature,setTemperature]=useState<string>("");
  const [cloudStatus,setCloudStatus]=useState<string>("");
  const API_key='1efd2fbf1203b5ac0b07dc2ca4b59206';
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${submitCity}&appid=${API_key}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => 
      {const weatherData=data;
      //  console.log(weatherData);
       const temp =weatherData.main.temp;
      //  console.log(temp);
      setTemperature(temp);
       const weatherDescription = weatherData.weather[0].description;
       console.log(weatherDescription);
       const iconCode = weatherData.weather[0].icon;
    const idUrl ="https://openweathermap.org/img/wn/"+iconCode+"@2x.png"; 
    setCloudStatus(idUrl);
     console.log(idUrl)})
  .catch(error => console.log(error));
  return (
    <div className='weather-container'>
      <h2 className='weather-heading'>Check Weather of Your City</h2>
      <div>
          <div className='input_weather'>
            <label className="city_label"htmlFor="city" >Enter your city name</label>
            <input id='city' type='text' placeholder='Enter a city name' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <input type="button" value="submit" className='btn weather_btn' onClick={(e)=>{e.preventDefault(); setSubmitCity(city)}} />
          </div>
          <div>
            <div className='cloud_status'><img src={cloudStatus} alt="cloud_status" /></div>
            <div className='temperature'>{temperature}</div>
          </div>
        </div>
    </div>
  )
}

export default Weather
