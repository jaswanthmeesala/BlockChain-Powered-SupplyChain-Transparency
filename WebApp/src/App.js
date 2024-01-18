import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Donate from './components/Donate';
import Track from './components/Track';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/track" element={<Track />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
