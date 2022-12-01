import axios from 'axios';
import { useEffect, useState } from 'react';

function Covid(){
    const [data, setData] = useState({});
    const API_KEY="RnKRYrieWKSXFg3fIq%2Fd%2BErYYCscM%2F1MAaDkN7iOvXc7r3vVny3HEe2ahsjoeGxTzUI3Cf71lPWfquc0GPykBg%3D%3D";

    const url=`https://apis.data.go.kr/1352000/ODMS_COVID_05/callCovid05Api?serviceKey=${API_KEY}&pageNo=1&numOfRows=500&apiType=json`
    const CovidCall = async () => {
        try {
          const response= await axios(url,{
            method: 'get',
            url: url,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/xml; charset=utf-8',
            },
            withCredentials: true,
            credentials: 'same-origin',
          });
          setResult(response.data);
          console.log("Covid"+response.data);
        } 
        catch(err) {
          alert(err);
        }
    };

    useEffect(()=>{
      searchBook();
    },[])

    return (
        <div></div>
      );
      }
      export default Covid;