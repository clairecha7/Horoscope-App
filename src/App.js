import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Main />
    </div>
  );
}

export default App;
