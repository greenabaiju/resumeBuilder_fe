import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeGenerate from "./pages/ResumeGenerate";
import ResumeDetails from "./pages/ResumeDetails";
import Allresumes from "./pages/Allresumes";
import Alldownloads from "./pages/Alldownloads";
import Singleresume from "./pages/Singleresume";
import PNF from "./pages/PNF";
import { Slide, ToastContainer } from "react-toastify";
import EditResume from "./components/EditResume";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeGenerate />} />
        <Route path="/resume-details" element={<ResumeDetails />} />
        <Route path="/all-resumes" element={<Allresumes />} />
        <Route path="/all-downloads" element={<Alldownloads />} />
        <Route path="/resumes/:id" element={<Singleresume />} />
        <Route path="/*" element={<PNF />} />
        <Route path="/editresume" element={<EditResume />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}

export default App;
