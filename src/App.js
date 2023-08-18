import { ToastContainer } from 'react-toastify';
import MainRouter from './Router/MainRouter';
import './globals.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    
  }, [])
  
  return (<>
    <ToastContainer />
    <Router>
      <MainRouter />
    </Router>
  </>
  );
}

export default App;
