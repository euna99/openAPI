// import axios from "axios";
// import { useEffect,useState } from "react";

// function Test(){
//     const API_KEY="RnKRYrieWKSXFg3fIq%2Fd%2BErYYCscM%2F1MAaDkN7iOvXc7r3vVny3HEe2ahsjoeGxTzUI3Cf71lPWfquc0GPykBg%3D%3D&";
//     const [result, setResult] = useState({});
//     const url="https://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?serviceKey=${API_KEY}pageNo=1&numOfRows=10&spclAdmTyCd=A0"

//     const testget= async ()=>{
//         try {
//             const response = await axios({
//               method: 'get',
//               url: url,
//             })
//             setResult(response.data);
//             console.log("test"+response.data
            
            
            
//             );
//           } 
//           catch(err) {
//             alert(err);
//           }
//     }

//     useEffect(()=>{
//         testget();
//         },[])
// }


// export default Test;