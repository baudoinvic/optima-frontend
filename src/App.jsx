import About from "./views/site/About";
import Home from "./views/site/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/site/Signup";
import Login from "./views/site/Login";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
