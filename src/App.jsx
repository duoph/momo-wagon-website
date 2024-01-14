import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Team from "./pages/Team";
import Company from "./pages/Company";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
