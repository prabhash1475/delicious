import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./lead/MainNavbar/Navbar";
import Footer from "./lead/footer/Footer";
import Admin from "./lead/admin/Admin";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
