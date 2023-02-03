import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;
