import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import LoginForm from "./Pages/LoginForm";
import NotFound from "./Pages/NotFound";
import Trial from "./Pages/Trial";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/login'
					element={<LoginForm />}
				/>
				<Route
					path='/trial'
					element={<Trial />}
				/>
				<Route
					path='/*'
					element={<NotFound />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
