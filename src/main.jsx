import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import Header from "./components/Header.jsx";
import App from "./App.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Header />
        <main className="container">
          <div className="flex items-start justify-center min-h-screen">
            <div className="mt-20">
              <Routes>
                <Route path="/" element={<App />} />
              </Routes>
            </div>
          </div>
        </main>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
