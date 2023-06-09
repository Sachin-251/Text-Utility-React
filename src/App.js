import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#28282B';
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#FFF';
    }
  }

  return (
    <>
     <Router>
      <Navbar title="My First React App" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Text Converter" showAlert={showAlert}/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
