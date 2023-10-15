import React from 'react';
import {
    Link,
    useLocation 
  } from 'react-router-dom';
function Header() {
    //현재 location 가져오기
    const locationNow = useLocation();
    //특정 페이지에서 안나오도록 처리
    if (locationNow.pathname === "/HeaderHideScreen") return null; 
    return (
      
      <div>
        <Link to="/FirstScreen">FirstScreen</Link>
        <br></br>
        <Link to="/HeaderHideScreen">HeaderHideScreen</Link>
        <br></br>
        <Link to="/TextData">TextData</Link>
        <br></br>
        <Link to="/FileData">FileData</Link>
      </div>

    );
  }
export default Header;  