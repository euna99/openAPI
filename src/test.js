import axios from 'axios';
import { useEffect, useState } from 'react';

function Covid(){
    const [data, setData] = useState(null);
    const API_KEY="RnKRYrieWKSXFg3fIq%2Fd%2BErYYCscM%2F1MAaDkN7iOvXc7r3vVny3HEe2ahsjoeGxTzUI3Cf71lPWfquc0GPykBg%3D%3D";
    const url=`/apis/1352000/ODMS_COVID_05/callCovid05Api?serviceKey=${API_KEY}&pageNo=1&numOfRows=500&apiType=json&create_dt=2022-01-08`
    
    const CovidCall = async () => {
        try {
          const response= await axios({
            method: 'get',
            url: url,
          });
          setData(response.data)
          console.log(response.data)
          // setData(response.data);
          // console.log("Covid"+response.data);
          // console.log("---responsetype: "+typeof(response)); // 객체 //object
          // console.log("---responsedatatype"+typeof(response.data)); //string // 이친구는 값이 나오고 
        } 
        catch(err) {
          alert(err);
        }
    };

    useEffect(()=>{
      CovidCall();
    },[])

    // console.log(response.body)

    return (
        <div>
          {/* {response.body.items.item.confCase} */}
        </div>
      );
      }
      export default Covid;