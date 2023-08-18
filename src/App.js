import { ToastContainer } from 'react-toastify';
import MainRouter from './Router/MainRouter';
import './globals.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (<>
          <ToastContainer />

      <Router>
        <MainRouter />
      </Router>
    </>
  );
}

export default App;
