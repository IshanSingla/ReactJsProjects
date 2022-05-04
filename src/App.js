import Api from './components/api';
import Navbar from './components/Navbar';
import Home from './components/home';
import {
  BrowserRouter as Router,

  Route,Routes
} from "react-router-dom";
 
function App() {
  return (
    <>
      <Router>

    <Routes>
          <Route exact path="/api" element={<Api/>}/>
          <Route exact path="/" element={<Home/>} />
    </Routes>
  
    </Router>
    </> 
  );
}

export default App;
