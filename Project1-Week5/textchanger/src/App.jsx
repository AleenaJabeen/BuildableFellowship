import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,  {useState} from 'react'


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
if (mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='black';
  document.body.style.color='white';
}else{
  setMode('light');
  document.body.style.backgroundColor='white';
  document.body.style.color='black';
}
  };
  return (
   <>
  { /*Props for navbar and they are read only we can not change them in jsx of main navbar section*/}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-4">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
   </div>
  
  </>
  );
}

export default App;
