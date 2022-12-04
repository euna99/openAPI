import axios from 'axios';
import { useEffect, useState } from 'react';

function Seoul(){
    const [data, setData] = useState(null);

    const url=`http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_SEOUL}/json/SearchParkInfoService/1/5`
    const SeoulCall = async () => {
        try {
          const response= await axios(
          {
            method: 'get',
            type:'json',
            url: url
          }
          );
          setData(response.data)
          // console.log(response.data.SearchParkInfoService.row[0].P_PARK)
          // console.log("---responsetype: "+typeof(response)); // 객체 //object
          // console.log("---responsedatatype:"+typeof(response.data)); //string // 값이 나오고 
        } 
        catch(err) {
          alert(err);
        }
    };

    useEffect(()=>{
      SeoulCall();
    },[])


  

    
    return (
        <div>
            {data!==null&&data.SearchParkInfoService.row[0].P_PARK}
            {/* {data.SearchParkInfoService.row[0].P_PARK} */} 
            {/* useEffect(()=>{
                렌더링 과정 공부하기 
            }) */}
        </div>
      );
      }
      export default Seoul;