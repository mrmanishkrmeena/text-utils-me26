 
// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './componants/Alert';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import React, {useState} from 'react';
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(38 38 88)'
      showAlert("  Dark mode has been enabled","success")
    }
    else{
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("  light mode has been enabled","success")
      }
  }
  return (
    <> 
     <HashRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

    <Alert alert = {alert}/>  
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
 </HashRouter>
    </>
  );
}

export default App;
