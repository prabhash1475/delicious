import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./lead/MainNavbar/Navbar";
import Footer from "./lead/footer/Footer";

import Admin from "./lead/admin/Admin";
// import AllRoutes from "./lead/Routes/AllRoutes";

import AllRoutes from "./Routes/Route";

function App() {
  return (
    <div>
      <Navbar />

      {/*    Durgesh BRO CODE  */}
      <AllRoutes />
      {/*    Durgesh BRO CODE  */}
      <Footer />
    </div>
  );
}

export default App;
