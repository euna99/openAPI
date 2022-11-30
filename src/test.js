import axios from 'axios';
import { useEffect, useState } from 'react';

function Test(){
    const [result, setResult] = useState({});
    const API_KEY="RnKRYrieWKSXFg3fIq%2Fd%2BErYYCscM%2F1MAaDkN7iOvXc7r3vVny3HEe2ahsjoeGxTzUI3Cf71lPWfquc0GPykBg%3D%3D";
    const url=`https://apis.data.go.kr/6460000/jnKolas/getSearchBookNewList?serviceKey=${API_KEY}&searchWord=%EC%84%9C%EC%9C%A0%EB%9F%BD&pageSize=10&startPage=0&`
    const searchBook = async () => {
        try {
          const data= await axios({
            method: 'get',
            url: url,
          })
          setResult(data);
          console.log("책"+data);
        } 
        catch(err) {
          alert(err);
        }
    }

    useEffect(()=>{
      searchBook();
    },[])

    return (
        <div></div>
      );
      }
      export default Test;