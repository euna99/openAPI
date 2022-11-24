import axios from 'axios';
import {useEffect,useState} from'react';
function API() {

const URL="https://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList"
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const fetchData = async () => {
  try {
    setError(null);
    setData(null);
    setLoading(true);

    const response=axios.get(URL,{
      params:{
        ServiceKey:process.env.REACT_APP_API_KEY,
        pageN0:1,
        numOfRows:10,
        dataType:"XML",
        dataCd:"ASOS",
        dateCd:"DAY",
        startDt:20100101,
        endDt:20100601,
        stnIds:108
      }
    });

    setData(response.data);
  } catch(e) {
    setError(e);
  }
  setLoading(false);
};

useEffect(() => {
  fetchData();
}, []);

console.log (data)
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;

  return(
    <div>
      {data.response.avgTa}
    </div>
  );
  }
export default API;
=======
import { useState} from 'react';
import styled from 'styled-components';

function API() 
{
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "RnKRYrieWKSXFg3fIq%2Fd%2BErYYCscM%2F1MAaDkN7iOvXc7r3vVny3HEe2ahsjoeGxTzUI3Cf71lPWfquc0GPykBg%3D%3D"; // 각자 개인의 API KEY를 발급받아 사용해주세요. 
  const url = `/AsosDalyInfoService/getWthrDataList?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        })
        setResult(data);
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
    }
  }
  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요!"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {result.data.avgTa}
            </div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default API;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }

`;

