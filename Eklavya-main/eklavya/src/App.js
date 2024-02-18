import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import TutorForm from "./Components/Home/RegisterTutor";
import TeachPage from "./Components/Home/TeachPage";
import StudentHome from "./Components/Student/StudentHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHome from "./Components/Admin/adminhome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/tutor-form" element={<TutorForm/>} />
          <Route path="/teach" element={<TeachPage/>} />
          <Route path="/Student" element={<StudentHome />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;