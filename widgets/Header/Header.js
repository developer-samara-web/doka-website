import Logo from "@/widgets/Header/Logo";
import Navigation from "@/widgets/Header/Navigation";
import "@/widgets/Header/Header.css";

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