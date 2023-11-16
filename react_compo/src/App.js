import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QR from "./Pages/QR";
import StudentAttendance from "./Pages/StudentAttendance";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/qr" element={<QR />} />
          <Route exact path="/studentattendance" element={<StudentAttendance />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
