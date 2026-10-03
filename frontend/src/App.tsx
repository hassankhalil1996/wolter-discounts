import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import DiscountsPage from "./pages/DiscountsPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";

import { registerHit } from "./services/hitService";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    registerHit().catch((error) => {
      console.error("Failed to register hit:", error);
    });
  }, []);

  return (
    <>
      <Navbar onNavigate={setPage} />

      <div className="app">
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "discounts" && <DiscountsPage />}
        {page === "about" && <AboutPage />}
        {page === "admin" && <AdminPage />}
      </div>
    </>
  );
}

export default App;