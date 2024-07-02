import "./App.css";

import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import Job from "./Job/Job";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/job" element={<Job></Job>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
