import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AdminPage from "./pages/adminPage";
import UserPage from "./pages/userPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/user" element={<UserPage />} />
			</Routes>
		</div>
	);
}

export default App;
