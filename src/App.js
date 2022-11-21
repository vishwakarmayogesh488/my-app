import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//  import About from './components/About';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('type');

  const showAlert = (message, type)=>{
    
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(type)
}, 2000);
  }
  const togglemode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enable", "success")
      document.title = 'TextUtils - Dark Mode'
    }
     else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enable", "success")
      document.title = 'TextUtils - light Mode'
      
    }
  }
  return (
    <>
     {/* <Router> */}
 <Navbar title = "TextUtils" mode={mode} togglemode={togglemode} />
 <Alert alert={alert}/> 
 <div className="container my-3">
 
       {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}></Route> */}
          
        
          
          {/* <Route path="/textutils" element= */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}  />  
          {/* </Route>
        </Routes>
  */}
        </div>
 {/* </Router> */}
    </>
    
  );
}

export default App;
