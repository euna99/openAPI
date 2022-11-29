import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function API(){
  const [coords, saveCoords] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
    
   function handleGeoSucc(position) {
    console.log(position);
    const latitude = position.coords.latitude;  // 경도  
    const longitude = position.coords.longitude;  // 위도
    const coordsObj = {
      latitude,
      longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handleGeoErr(err) {
    console.log("geo err! " + err);
  }

  function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  }

  function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length - 1];
        setTemp(temp);
        setWeather(weathers.main);
      })
  }

  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <div> </div>
    // <AppWrap>
    //   <div className="appContentWrap">
    //     <input
    //       placeholder="도시를 입력하세요"
    //       value={location}
    //       onChange={(e) => setLocation(e.target.value)}
    //       type="text"
    //       onKeyDown={searchWeather}
    //     />
    //     {Object.keys(result).length !== 0 && (
    //       <ResultWrap>
    //         <div className="city">{result.data.station}</div>
    //         <div className="temperature">
    //           {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
    //         </div>
    //       </ResultWrap>
    //     )}
    //   </div>
    // </AppWrap>
  );
}

export default API;

// const AppWrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   .appContentWrap {
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     position: absolute;
//     padding: 20px;
//   }
//   input {
//     padding: 16px;
//     border: 2px black solid;
//     border-radius: 16px;
//   }
// `;

// const ResultWrap = styled.div`
//   margin-top: 60px;
//   border: 1px black solid;
//   padding: 10px;
//   border-radius: 8px;
//   .city {
//     font-size: 24px;
//   }
//   .temperature {
//     font-size: 60px;
//     margin-top: 8px;
//   }

// `;