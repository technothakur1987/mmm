import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
{/*import AboutUS from './components/AboutUS';*/}


{/*import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';*/}

{/*for setting up router==https://bobbyhadz.com/blog/react-export-switch-imported-as-switch-not-found*/}




function App() {
 const [mode, setMode] = useState(`light`)//whether dark mode is enabled or not
 const [color, setColor] = useState(`dark`)
 const [bodycolor, setBodycolor] = useState(`light`)
 const [alerttxt, setAlerttxt] = useState(`Success, Welcome to the my app`)
 
 
 //const [bodyText, setBodycolor] = useState(`dark`)

 function toggleMode(){
  console.log("toggleMode is clicked")
  if(mode===`light`){
    setMode(`dark`)
    setColor(`light`)
    setBodycolor(`dark`)
    document.body.style.backgroundColor = "#212529"
    document.getElementById("myalert").style.display = "block";
    setAlerttxt(`Success Dark Mode Enabled`)
    document.title = `My App-Dark Mode Enabled`
    }else{
    setMode(`light`)
    setColor(`dark`)
    setBodycolor(`light`)
    document.body.style.backgroundColor = "light"
    document.getElementById("myalert").style.display = "block";
    setAlerttxt(`Success Light Mode Enabled`)
    document.title = `My App-Light Mode Enabled`
    
  }
 }
 function hideAlert(){
  console.log("hiding the alert")
  setAlerttxt(null)
  document.getElementById("myalert").style.display = "none";
 }
 
  return (
  <>
  {/*<Router>*/}
  
 <Navbar title="MyFirstApp" title2 = "Home" title3 = "About" mode={mode} color={color}  toggleMode={toggleMode} ></Navbar>
 <Alert alerttxt={alerttxt} hideAlert={hideAlert}  ></Alert>
 <div className="container my-3">
 {/*<Routes>*/}
 {/*<Route  exact path="/about" element={<AboutUS headingg="about us"></AboutUS>} />*/}
 {/*<Route  exact path="/" element={<TextForm heading="Enter the text here to analyse" btnh="Convert to upperCase" alerttxt={alerttxt}  color={color}  mode={mode}  bodycolor={bodycolor} btnhh="Convert to lowerCase"></TextForm>} />*/}
 <TextForm heading="Enter the text here to analyse" btnh="Convert to upperCase" alerttxt={alerttxt}  color={color}  mode={mode}  bodycolor={bodycolor} btnhh="Convert to lowerCase"></TextForm>       
          
          
  {/*</Routes>*/}
        </div>
        {/*</Router>*/}
        
 
         
 

 
 
  </>
    
  );
}

export default App;
