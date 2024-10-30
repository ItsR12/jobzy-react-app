import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IndexPage from "./pages/index";
import IndexLoggedIn from "./pages/index-loggedin";
import LoginCandidate from "./pages/login-candidate";
import SignUp from "./pages/signup";
import UserDashboard from "./pages/userdashboard";
import UserSetting from "./pages/usersetting";
import JobList from "./pages/joblist";
import NewJob from "./pages/newjob";
import Stats from "./components/stats";
import AppStatus from "./pages/appstatus";
import ExperienceSlider from "./pages/experienceslider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/index-loggedin" element={<IndexLoggedIn />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/newjob" element={<NewJob />} />
        <Route path="/login-candidate" element={<LoginCandidate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/usersetting" element={<UserSetting />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/appstatus" element={<AppStatus />} />
        <Route path="/experienceslider" element={<ExperienceSlider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
