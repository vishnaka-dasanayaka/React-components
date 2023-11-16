import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPageOne from "./components/LoginPageOne";
import IOSCal from "./components/IOSCal";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/loginpageone" element={<LoginPageOne />} />
          <Route path="/ioscalculator" element={<IOSCal />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
