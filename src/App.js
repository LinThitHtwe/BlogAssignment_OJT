import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavbarComponent />
      <Home />
    </>
  );
}

export default App;
