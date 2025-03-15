import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import RestaurantList from "./components/RestaurantList";

function App() {
    return (
        <Router>
            <div>
                <h1>Food Delivery App</h1>
                <Routes>
                    <Route path="/" element={<RestaurantList />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
