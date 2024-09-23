

// // 1st
// import React, { useState } from 'react'
// import "./App.css"
// import weather from "../src/images/weather.png"
// // import cloud from "../src/images/cloud.png"
// // import rain from "../src/images/rain.png"
// const App = () => {
//   const [city, setCity] = useState("")
//   const [data, setData] = useState()

//   const fetchWeather = async () => {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`)
//       const jsonres = await response.json();
//       setData(jsonres)
//       console.log(jsonres);

//     } 
//     const handleCityChange = (e) => {
//       setCity(e.target.value)
//     }

//   const handleClick = () => {
//     // if (city == ""){
//     //   alert("city not found")
//     // }
//     fetchWeather()
//     setCity("")
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="container">
//           <div className="input">
//             <input type="text" placeholder='search' onChange={handleCityChange} value={city} />
//             <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
//           </div>
//           <div>

//             {data && data.weather ? 
//               <>
//                 <div className="weather">
//                   <div className="images">
//                   <img src={weather} alt="weather_img" />
//                     {/* <img src={data.weather[0].main == "clouds" ? cloud : ""}/>
//                     <img src={data.weather[0].main == "Rain" ? rain : ""} />
//                     <img src={data.weather[0].main == "Weather" ? weather : ""} /> */}

//                   </div>
//                   <h2>{data.name}</h2>
//                   <h1>{Math.trunc(data.main.temp)}°C</h1>
//                 </div>

//                 <div className="temp">
//                   <div className="tem_box">
//                     <i className="fa-solid fa-temperature-three-quarters"></i>
//                     <p>humidity
//                       {data.main.humidity
//                       }</p>

//                   </div>
//                   <div className="tem_box">
//                     <i className="fa-solid fa-cloud"></i>
//                     <p>{data.weather[0].description}</p>
//                   </div>
//                 </div>
//               </>: <h5 className='notFound'>City not found </h5>

//             }

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App











import React, { useState } from 'react'
import "./App.css"
import clear from '../src/images/clear sky.png';  // Correct path for clear sky image
import cloud from '../src/images/cloud.png';     // Correct cloud image
import rain from '../src/images/rain.png';       // Correct rain image
import sun from '../src/images/sun remove.png';       // Correct rain image

import weather from '../src/images/weather.png';

const App = () => {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)

  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`)
    const jsonres = await response.json();
    setData(jsonres)
    console.log(jsonres);
  }

  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleClick = () => {
    fetchWeather()
    setCity("")
  }


  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear': // Matches "Clear" weather condition for sun
        return clear; 
      case 'Clouds': // Matches cloudy weather condition
        return cloud;
      case 'Rain':   // Matches rainy weather condition
        return rain;
        case 'Sun':   // Matches rainy weather condition
        return sun;
      default:
        return weather; // Default image for other weather conditions
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="input">
            <input type="text" placeholder='search' onChange={handleCityChange} value={city} />
            <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
          </div>
          <div>
            {
              data && data.weather ? (
                <>
                  <div className="weather">
                    <div className="images">
                      <img src={getWeatherImage(data.weather[0].main)} alt="weather_img" />
                    </div>
                    <h2>{data.name}</h2>
                    <h1>{Math.trunc(data.main.temp)}°C</h1>
                  </div>

                  <div className="temp">
                    <div className="tem_box">
                      <i className="fa-solid fa-temperature-three-quarters"></i>
                      {/* <img className='img_icon' src={humidity} alt="img" /> */}
                      <div className='flex'>
                        <p className='bold'>{data.main.humidity}</p>
                        <p>humidity</p>
                      </div>
                    </div>
                    <div className="tem_box">
                      <i className="fa-solid fa-cloud"></i>
                      <div className="flex">
                        <p>{data.weather[0].description}</p>
                        <p>{data.weather[0].main}</p>

                      </div>

                    </div>
                  </div>
                </>
              ) : <h3 className='notFound'>enter your city name</h3>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App







