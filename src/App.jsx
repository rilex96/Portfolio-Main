import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SuccessMessage from "./components/SuccessMessage";
import "./mobile.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import Welcome from "./pages/Welcome";
import BackGround from "./components/BackGround";

function App() {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (window.location.hash === "#success") {
			setSuccess(true);
			const timeoutId = setTimeout(() => {
				setSuccess(false);
			}, 5000);

			return () => clearTimeout(timeoutId);
		}
	}, []);

	useEffect(() => {
		const cleanURL = "/";
		window.history.replaceState(null, "", cleanURL);
	});
	return (
		<>
			{success && <SuccessMessage />}
			<div className="main-bg">
				<BackGround />
				<Navbar />
				<div id="home">
					<Welcome />
				</div>
				<div id="about">
					<About />
				</div>
				<div id="mywork">
					<MyWork />
				</div>
				<div id="contact">
					<Contact />
				</div>
			</div>
		</>
	);
}

export default App;
