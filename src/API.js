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