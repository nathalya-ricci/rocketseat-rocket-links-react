import "./App.css";
import { useState, useEffect } from "react";
import { Avatar } from "./components/Avatar/Avatar";
import { Header } from "./components/Header/Header";
import ButtonLink from "./components/Buttons/Buttons";
import { ButtonSwitcher } from "./components/Buttons/Buttons";
import { Footer } from "./components/Footer/Footer";

function App() {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(window.localStorage.getItem("darkMode")) || false
	);

	useEffect(() => {
		window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="App" id={darkMode ? "dark-mode" : "light-mode"}>
			<Avatar />
			<Header
				name="Nathálya Ricci"
				career="Frontend Developer"
				techs="HTML | CSS | JAVASCRIPT"
			/>
			<div className="buttons-wrapper">
				<ButtonLink
					socialLink={"https://discord.com/users/506557042530451482"}
					socialIcon="./images/discord.svg"
					socialName="Discord"
				/>
				<ButtonLink
					socialLink={"https://github.com/nathalya-ricci"}
					socialIcon="./images/github.svg"
					socialName="Github"
				/>
				<ButtonLink
					socialLink={"https://linkedin.com/in/nathalya-ricci"}
					socialIcon="./images/linkedin.svg"
					socialName="Linkedin"
				/>
			</div>
			<div className="ButtonSwitcher" onClick={toggleDarkMode}>
				<ButtonSwitcher text="Mudar tema" />
			</div>
			<div className="Footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
