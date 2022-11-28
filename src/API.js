  import axios from 'axios';
  import { useEffect, useState } from 'react';
  import styled from 'styled-components';

  function API(){
  const [result, setResult] = useState({});
  const [titleInfo, settitleInfo] = useState('');
  const url=`https://apis.data.go.kr/6460000/jnKolas/getSearchBookNewList?serviceKey=${process.env.REACT_APP_API_KEY}&searchWord=%EC%84%9C%EC%9C%A0%EB%9F%BD&pageSize=10&startPage=0&q=${titleInfo}`
  
  const searchBook = async () => {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        })
        setResult(data);
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
}

useEffect(()=>{
  searchBook();
},[])


return (
  <AppWrap>
    <div className="appContentWrap">
      <input
        placeholder="제목을 입력하세요"
        value={titleInfo}
        onChange={(e) => settitleInfo(e.target.value)}
        type="text"
        onKeyDown={searchBook}
      />
      {Object.keys(result).length !== 0 && (
        <ResultWrap>
          <div className="city">{result.data.titleInfo}</div>
        </ResultWrap>
      )}
    </div>
  </AppWrap>
);
}

export default API;

const AppWrap = styled.div`
width: 100vw;
height: 100vh;
.appContentWrap {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
}
input {
  padding: 16px;
  border: 2px black solid;
  border-radius: 16px;
}
`;

const ResultWrap = styled.div`
margin-top: 60px;
border: 1px black solid;
padding: 10px;
border-radius: 8px;
.city {
  font-size: 24px;
}

`;
