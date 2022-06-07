import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/homepage";
import Cmspage from "./components/cmspage";
import Eventpage from "./components/eventpage";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cms" element={<Cmspage />} />
            <Route path="/event" element={<Eventpage />} />
          </Routes>
        </Router>
    </div>
  );
}
export default App;
