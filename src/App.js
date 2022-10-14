import { Routes, Route } from "react-router-dom";
import { renderHome } from "utils/route";
import homeRoute from "./routes/homeRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/">{renderHome(homeRoute)}</Route>
    </Routes>
  );
}

export default App;
