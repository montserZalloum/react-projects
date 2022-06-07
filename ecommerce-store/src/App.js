import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";
import Homepage from "./components/homepage";
import GamePage from "./components/productpage";
// import Cmspage from "./components/cmspage";
import GamesPage from "./components/Productspage";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/games" element={<GamesPage />} />
          {/* <Route path="/cms" element={<Cmspage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
