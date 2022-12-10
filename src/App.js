import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null); //object
 
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <Alert alert={alert}/>
    <div className='container my-4'>
    <Router>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading='Enter the text to analyze'/>
          </Route>
    </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
