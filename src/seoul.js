import axios from 'axios';
import { useEffect, useState } from 'react';

function Seoul(){
    const [data, setData] = useState(null);
    const ssData=useState([]);

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
          setData(response.data.SearchParkInfoService);
          // console.log("fff");
          // console.log(response.data.SearchParkInfoService.row[2]);
          
          // ssData=data;
          // console.log("sss");
          // console.log(ssData);

          //row[] (X) // row .P_PARK 
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

    // const ssData=data.SearchParkInfoService.row;
    // console.log("sss");
    // console.log(ssData);
      //  {/* {data.SearchParkInfoService.row[0].P_PARK} */} 
      //       {/* useEffect(()=>{
      //           렌더링 과정 공부하기 
      //       }) */}
    return (
        <div>
          <ul>
            <li>
            {data!==null&&data.row[2].P_PARK}
            </li>
            <li>
            {data!==null&&data.row[1].P_PARK}
            </li>
            <li>
            {data!==null&&data.row[0].P_PARK}
            </li>
            <li>
            {data!==null&&data.row[3].P_PARK}
            </li>
            <li>
            {data!==null&&data.row[4].P_PARK}
            </li>
          </ul>
            {/* <ul>
            {data!==null&&ssData.map(() => (
            <li key={ssData.P_IDX}> 
            <div>
              {ssData.P_PARK}
            </div>
            </li>
            ))};
            </ul> */}
        </div>
      );
      }
      export default Seoul;