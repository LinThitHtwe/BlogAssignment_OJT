import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainBlog from "./components/MainBlog";

function App() {
  return (
    <>
      <NavbarComponent />
      <MainBlog />
    </>
  );
}

export default App;
