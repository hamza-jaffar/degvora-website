import { Route, Router, Routes } from "react-router-dom";
import Home from "@/pages/home";
import ContactUsPage from "./pages/contact-us";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
};

export default App;
