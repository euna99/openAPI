import axios from 'axios';
import './App.css';
import {useState, useEffect } from 'react';

const URL = "/B551182/";
function API() {
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
  
        const response = await axios.get(URL, {
          params: {
            serviceKey: process.env.REACT_APP_API_KEY,
            numOfRows: 1,
            pageNo: 10
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
  
    if(loading) return <div>Loading...</div>;
    if(error)   return <div>Error...</div>;
    if(!data)   return null;
  
    return (
      <div className="App">
        <p>병원명 : { data.response.body.items.item.yadmNm }</p>
        <p>주소 : { data.response.body.items.item.addr }</p>
        <p>전화번호 : { data.response.body.items.item.telno }</p>
        <p>RAT(신속항원검사) 가능 여부 : { data.response.body.items.item.ratPsblYn }</p>
        <p>PCR 가능 여부 : { data.response.body.items.item.pcrPsblYn }</p>
      </div>
    );
  }
 
export default API;