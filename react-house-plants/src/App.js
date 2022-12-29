import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
