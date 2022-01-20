import "./App.css";
import About from "./component/About/About";
import Main from "./component/Home/Main";
import Skills from "./component/Skill/Skills";

function App() {
  return (
    <div className="app">
      <Main />
      <About />
      <Skills />
    </div>
  );
}

export default App;
