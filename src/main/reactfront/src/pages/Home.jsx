import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
width: 1440px;
height: 1024px;
margin: 0 auto;

background: #FFFFFF;
border: 1px solid #000000;

`;

const StyledButtonL = styled.button`
position: absolute;
left: 20.76%;
right: 23.4%;
top: 56.45%;
bottom: 30.76%;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 90.7199px;
line-height: 127px;
background: #C5DBFC;
border-radius: 50px;

`;

const StyledButtonS = styled.button`
position: absolute;
left: 20.76%;
right: 23.4%;
top: 79.49%;
bottom: 7.71%;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 90.7199px;
line-height: 127px;


background: #FBCCCC;
border-radius: 50px;

`;

const Styledlogo = styled.img`
position: absolute;
width: 864px;
height: 484px;
left: 270px;
top: 51px;

`;


function Home() {
  const navigate = useNavigate();
  const logo = "/img/logo.png";

  return (
    <Wrapper>
     <Styledlogo img src={logo} alt=" "/>
      <StyledButtonL title="로그인" onClick={()=>{navigate("login");}}>Login1</StyledButtonL>
      <StyledButtonS title="회원가입" onClick={()=>{navigate("FileData");}}>Signup</StyledButtonS>
    </Wrapper>
  )
}
export default Home;

