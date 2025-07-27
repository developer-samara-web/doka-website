import "@/app/home/_components/Header/Header.css";

import Logo from "@/components/commons/Logo/Logo";
import Navigation from "@/components/sections/Navigation/Navigation";

export default function Header() {
	return (
		<header className="header">
			<div className="header-container">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}