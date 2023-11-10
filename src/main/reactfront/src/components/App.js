import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import UserPicture from "../pages/UserPicture";
import FileData from '../Screens/FileData'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="/login/main" element={<Main />} />
        <Route path="/login/main/picture" element={<UserPicture />} />
        <Route path="FileData"  element={<FileData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
