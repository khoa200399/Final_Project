import { Routes, Route } from "react-router-dom";
import { renderAuth, renderHome } from "utils/route";
import homeRoute from "routes/homeRoute";
import authRoute from "routes/authRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/">{renderHome(homeRoute)}</Route>
      <Route path="/auth">{renderAuth(authRoute)}</Route>
    </Routes>
  );
}

export default App;
