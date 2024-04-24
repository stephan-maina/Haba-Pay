import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginIn from "./Pages/LoginIn";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Home1 from "./Pages/home1";
import Analytics from "./Pages/Analytics";
import Manage from "./Pages/Manage";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";
import Delete from "./Pages/Delete";
import Transaction from "./Pages/Transaction";
import Finish from "./Pages/Finish";
import Processing from "./Pages/Processing";
import Deposit from "./Pages/Deposit";
import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { SearchResultList } from "./Components/SearchResultList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/LoginIn" element={<LoginIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Finish" element={<Finish />} />
        <Route path="/Processing" element={<Processing />} />
        <Route path="/Deposit" element={<Deposit />} />
      </Routes>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
      </div>
    </div>
  );
}

export default App;
