import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from "react";


function App() {
     const [mode, setMode] = useState('light');
     const toggleMode = () =>{
       if(mode==='light'){
         setMode('dark')
         document.body.style.backgroundColor = "#0a0b1e";
       }
       else{
         setMode('light')
                  document.body.style.backgroundColor = 'white';

       }

     }
  
  return (
    <>
      
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      
      />
      <div className="container my-3">
        <TextForm heading="Enter your text to Analyze" mode={mode}></TextForm>
      </div>
    </>
  );
}

export default App;
