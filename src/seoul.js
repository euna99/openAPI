import axios from 'axios';
import { useEffect, useState } from 'react';

function Seoul(){
    const [data, setData] = useState(null);
    
    const url=`http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_SEOUL}/json/SearchParkInfoService/1/1000/`
    const SeoulCall = async () => {
        try {
          const response= await axios(
          {
            method: 'get',
            type:'json',
            url: url
          }
          );
          setData(response.data.SearchParkInfoService.row);
          console.log("fff");
          console.log(response.data.SearchParkInfoService.row);
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

    const result=data?.filter(el=>el.P_PARK.length>10)

    // const dataList=data?.map((v)=>(<div key={v.P_IDX}>{v.P_PARK}</div>));
    // const ssData=data.SearchParkInfoService.row;
    // console.log("sss");
    // console.log(ssData);
    //  {/* {data.SearchParkInfoService.row[0].P_PARK} */} 
    //       {/* useEffect(()=>{
    //           렌더링 과정 공부하기 
    //       }) */}
    //리스트를 새로 생성해서 인덱스값 넣어주고 

    return (
        <div className="div_container">
          {result?.map(v=>(<div key={v.P_IDX}>{v.P_PARK} {v.P_IDX}</div>))}

        </div>
      );
      }
      export default Seoul;