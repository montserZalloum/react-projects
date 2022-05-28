import './index.css';
import Home from './components/pages/home';
import Feature from './components/pages/Feature';
import Register from './components/pages/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature/:name" element={<Feature />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
