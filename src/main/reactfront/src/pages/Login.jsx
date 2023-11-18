import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  margin: 0 auto;

  background: #FFFFFF;
`;

const Styledsubmitbutton = styled.button`
  position: absolute;
  width: 337px;
  height: 81px;
  left: 200px;
  top: 980px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 58.0607px;
  line-height: 81px;


  background: #C5DBFC;
  border-radius: 20px;

`;


const Logintext = styled.div`
position: absolute;
width: 661.5px;
height: 75.6px;
left: 550px;
top: 296px;

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 63.504px;
line-height: 89px;

`;

const Logo = styled.img`
position: absolute;
width: 659.2px;
height: 281.6px;
left: 348px;
top: 27px;

`;

const TextE = styled.div`
position: absolute;
width: 712.5px;
height: 46px;
left: 200px;
top: 436px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40.504px;
line-height: 89px;

`;

const TextP = styled.div`
position: absolute;
width: 712px;
height: 46px;
left: 200px;
top: 670px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40.896px;
line-height: 70px;
`;

const EmailForm = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 990px;
  height: 80px;
  left: 210px;
  top: 532px;
  font-size:46.896px;

  background: #FFFDFD;
  border: 1px solid #000000;
`;

const PsForm = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 990px;
  height: 80px;
  left: 210px;
  top: 765px;
  font-size:46.896px;

  background: #FFFDFD;
  border: 1px solid #000000;

`;

const EmailError = styled.div`
  position: absolute;
  width: 500px;
  height: 51px;
  left: 231px;
  top: 606px;

  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 31.752px;
  line-height: 44px;

  color: #EA0909;
`;

const PsError = styled.div`
  position: absolute;
  width: 1000px;
  height: 51px;
  left: 215px;
  top: 845px;

  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 31.752px;
  line-height: 44px;
  color: #EA0909;
`;



  function Login() {
  const logo = "/img/logo.png"
  const navigate = useNavigate();


  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid,setPwValid] = useState(false);
  //const [notAllow, setNotAllow] = useState(true);

  //이메일
  const handleEmail = (e) => {
    setEmail(e.target.value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)) {
      setEmailValid(true);
    }
    else {
      setEmailValid(false);
    }
  }


  //axios를 이용해 버튼 클릭시 데이터 전송
  const handleConfirmButton = () => {
    const url = "http://localhost:8000/Users";
    const payload = {
      email,
      password
    }
    axios.post(url,payload, {
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(res => {
      console.log(res.data);
      alert("Login Success");

      //
      axios.defaults.headers.common['Authorization'] = res.data;
      //로컬스토리지에 받은 토큰 저장 
      window.localStorage.setItem("token",res.data.slice(7));
    })
    .catch(err => {
      console.log(err);
    })
  };
  
  /*useEffect (() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[emailValid,pwValid]); */

  //비밀번호
  const handlePassword = (e) => {
    setPassword(e.target.value);

    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if(regex.test(password)) {
      setPwValid(true);
    }
    else {
      setPwValid(false);
    }
  }

  //제출 버튼 클릭시 메인 페이지로 이동
  const gotoMain = () => {
    navigate("main");
  };
  

  return (
    <Wrapper>
      <div >
      <Logintext>LOGIN</Logintext>
      <Logo img src={logo} alt=''/>

      <div>
        <TextE>EMAIL</TextE>
        <div>
          <EmailForm
            type='text'
            className='input'
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}/>
        </div>

      <EmailError>
        {
          !emailValid && email.length<0 && (
            <div>Please enter a valid e-mail </div>
          )}
      </EmailError>

      <TextP>PASSWORD</TextP>
        <div>
          <PsForm
          type='password'
          className='input' 
          value={password}
          onChange={handlePassword}/>
        </div>
        <PsError>
          {
            !pwValid && password.length >0 && (
              <div> Please enter at least 8 characters including English and numbers. </div>
            )}
       </PsError>
      </div>

      <div>
        <Styledsubmitbutton onClick={gotoMain} >
          SUBMIT
        </Styledsubmitbutton>
      </div>
    </div>  
    </Wrapper>
    
  )
}

export default Login