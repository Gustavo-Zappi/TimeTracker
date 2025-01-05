import { Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import DashboardPage from "./pages/dashboard";
import routes from "tempo-routes";

function App() {
  return (
    <>
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

export default App;
