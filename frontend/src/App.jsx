import React from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import SignUp from './components/auth/signup';
import SignIn from './components/auth/Signin';


function App(){
  return (
  <>
  {/* <Navbar/> */}
  <Routes>
  <Route path='/' element={<SignIn/>}  />
  <Route path='/SignUp' element={<SignUp />}/>

  </Routes>
  {/* <Footer/> */}
  </>
  )
}

export default App;
