import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./lead/MainNavbar/Navbar";
import Footer from "./lead/footer/Footer";
import Admin from "./lead/admin/Admin";
import AllRoutes from "./lead/Routes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home />
      <Footer /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
