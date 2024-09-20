

// ...............   THAPA TECHNICAL
// import React, { useEffect, useState } from 'react'
// import "./App.css"
// import img from "./images/weather.png"

// const App = () => {
//   const [city, setCity] = useState(null)
//   const [search, setSearch] = useState("")
//   const searchkeyWords = (e) => {
//     setSearch(e.target.value)
//   }
//   useEffect(() => {
//     const fetchapi = async () => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=112c8ce65e0fb907e0450a805f832294`
//       const response = await fetch(url)
//       const responseJson = await response.json()
//       console.log(responseJson)
//       setCity(responseJson.main)

//     }
//     fetchapi()
//   },[search])
//   return (
//     <>
//       <div className="main">
//         <div className="container">
//           <div className="input">
//             <input type="text" placeholder='search' onChange={searchkeyWords} value={search} />
//             {/* <i className="fa-solid fa-magnifying-glass"></i> */}
//           </div>
//           <div>
//           {!city ? ( <p className='notFound'>city not found</p> ):
//           <>
//           <div className="weather">
//               <div className="images">
//                 <img src={img} alt=""  />
//               </div>
//               <h2>{search}</h2>
//             </div>
//             <div className="temp">
//               <div className="tem_box">
//                 <i class="fa-solid fa-temperature-three-quarters"></i>
//                 <p>Temorature {city.temp}</p>
//               </div>
//               <div className="tem_box">
//                 <i className="fa-solid fa-cloud"></i>
//                 <p>Humidity {city.humidity}</p>

//               </div>
//             </div>
//           </> 
//           }
//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// // class two
// import React, { useState } from 'react'
// import "./App.css"
// import img from "./images/weather.png"
// // import axios from "axios"

// const App = () => {
//   const [search, setSearch] = useState("")
//   const [city, setCity] = useState(null)
//   const searchkeyWords = (e) => {
//     setSearch(e.target.value)
//   }

//   const fetchWeather = async () => {
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${"112c8ce65e0fb907e0450a805f832294"}`)
//       setCity(response)
//       console.log(response)
//     } catch (error) {
//       console.log("error featcging weather.............", error)
//     }
//   }
//   const handleClick = () => {
//     fetchWeather()
//   }
//   return (
//     <>
//       <div className="main">
//         <div className="container">
//           <div className="input">
//             <input type="text" placeholder='search' onChange={searchkeyWords} value={search} />
//             <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
//           </div>
//           <div>


//             {
//               city && 
//               <>
//                 <div className="weather">
//                   <div className="images">
//                     <img src={img} alt="" />
//                   </div>
//                   <h2>{city.data.temp}</h2>
//                   <h2>{city}</h2>

//                 </div>
//                 <div className="temp">
//                   <div className="tem_box">
//                     <i className="fa-solid fa-temperature-three-quarters"></i>
//                     <p>{city.data.humidity}</p>
//                   </div>
//                   <div className="tem_box">
//                     <i className="fa-solid fa-cloud"></i>
//                     <p>temprature</p>

//                   </div>
//                 </div>
//               </>



//             }

//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default App





// import React, { useState } from 'react'
// import "./App.css"
// import img from "./images/weather.png"

// const App = () => {
//   const [search, setSearch] = useState("")
//   const [data, setData] = useState()
//   // const [error, setError] = useState()
//   // const API_KEY = "112c8ce65e0fb907e0450a805f832294";
//     // const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

//   const searchkeyWords = (e) => {
//     setSearch(e.target.value)
//   }
//   const fetchApi = async () => {
//     const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_SECRET_KEY}`);
//     console.log(get)
//     const jsonData = await get.json()
//     // console.log(jsonData)
//     setData(jsonData.main)
//   }

//   const handleClick = () => {
//     fetchApi()
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="container">
//           <div className="input">
//             <input type="text" placeholder='search' onChange={searchkeyWords} value={search} />
//             <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
//           </div>
//           <div>
//             <div className="weather">
//               <div className="images">
//                 <img src={img} alt="" />
//               </div>
//               <h2>{search}</h2>
//               <h2>{data}</h2>
//             </div>
//             {
//               !data?<p className='notFound'>city not found</p>:

//                 <div className="temp">
//                   <div className="tem_box">
//                     <i className="fa-solid fa-temperature-three-quarters"></i>
//                     <p>{data.name}</p>
//                   </div>
//                   <div className="tem_box">
//                     <i className="fa-solid fa-cloud"></i>
//                     <p>{data.temp}</p>
//                     <p>{ data.weather.main.temp}</p>
//                   </div>
//                 </div>
//                    }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App



// YOUSHITA DIDI

// import React, { useState } from 'react'
// import "./App.css"
// import img from "./images/weather.png"
// import axios from 'axios'
// const App = () => {
//   const [city, setCity] = useState("")
//   const [weather, setWeather] = useState("")
//   const handleCityChange = (e) => {
//     setCity(e.target.value)
//   }
//   const fetchWeather = async () => {
   
//     try {
  
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`)
//       setWeather(response)
//       // console.log(response)


//     } catch (error) {
//       console.log(error, "error aya hai bhai");
//     }
//   }
//   const handleClick = () => {
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

//             {!weather ? <h2 className='notFound'>city not found</h2> :
//               <>
//                 <div className="weather">
//                   <div className="images">
//                     <img src={img} alt="weather_img" />
//                   </div>
//                   <h2>{weather.data.name}</h2>
//                   <h1>{weather.data.main.temp} <span>&deg;c</span></h1>
//                 </div>

//                 <div className="temp">
//                   <div className="tem_box">
//                     <i className="fa-solid fa-temperature-three-quarters"></i>
//                     <p>humidity
//                       {weather.data.main.humidity
//                       }</p>

//                   </div>
//                   <div className="tem_box">
//                     <i className="fa-solid fa-cloud"></i>
//                     <p>{weather.data.weather[0].description}</p>
//                   </div>
//                 </div>
//               </>
//             }

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App



// NEW YOUTUBER
import React, { useState } from 'react'
import "./App.css"
import weather from "../src/images/weather.png"
// import cloud from "../src/images/cloud.png"
// import rain from "../src/images/rain.png"
const App = () => {
  const [city, setCity] = useState("")
  const [data, setData] = useState()
 
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
    // if (city == ""){
    //   alert("city not found")
    // }
    fetchWeather()
    setCity("")
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="input">
            <input type="text" placeholder='search' onChange={handleCityChange} value={city} />
            <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
          </div>
          <div>

            {data && data.weather ? 
              <>
                <div className="weather">
                  <div className="images">
                  <img src={weather} alt="weather_img" />
                    {/* <img src={data.weather[0].main == "clouds" ? cloud : ""}/>
                    <img src={data.weather[0].main == "Rain" ? rain : ""} />
                    <img src={data.weather[0].main == "Weather" ? weather : ""} /> */}

                  </div>
                  <h2>{data.name}</h2>
                  <h1>{Math.trunc(data.main.temp)}°C</h1>
                </div>

                <div className="temp">
                  <div className="tem_box">
                    <i className="fa-solid fa-temperature-three-quarters"></i>
                    <p>humidity
                      {data.main.humidity
                      }</p>

                  </div>
                  <div className="tem_box">
                    <i className="fa-solid fa-cloud"></i>
                    <p>{data.weather[0].description}</p>
                  </div>
                </div>
              </>: <h5 className='notFound'>City not found </h5>
              
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default App



