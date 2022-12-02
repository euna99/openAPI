import axios from 'axios';
import { useEffect, useState } from 'react';

function Covid(){
    const [data, setData] = useState(null);
    const url=`/apis/1352000/ODMS_COVID_05/callCovid05Api?serviceKey=${process.env.REACT_APP_OPEN}&pageNo=1&numOfRows=500&apiType=json&create_dt=2022-01-08`
    
    const CovidCall = async () => {
        try {
          const response= await axios(
          {
            method: 'get',
            type:"json",
            url: url
          },
          );
          setData(response.data)
          console.log("---COVID----"+response.data)
          // console.log("---responsetype: "+typeof(response)); // 객체 //object
          // console.log("---responsedatatype:"+typeof(response.data)); //string // 값이 나오고 
        } 
        catch(err) {
          alert(err);
        }
    };

    useEffect(()=>{
      CovidCall();
    },[ ])

    
    return (
        <div>
          {data.body}
        </div>
      );
      }
      export default Covid;