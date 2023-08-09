import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Dashboard from "./components/Dashboard";
import MyPendingTask from "./components/MyPendingTask";
import Repository from "./components/repository/Repository";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/mypendingtask" element={<MyPendingTask />}></Route>
        <Route path="/repository" element={<Repository />}></Route>
      </Routes>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
