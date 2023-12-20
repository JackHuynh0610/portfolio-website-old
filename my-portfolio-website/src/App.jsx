import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;
