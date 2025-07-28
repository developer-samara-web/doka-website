import Link from "next/link";
import Bars from "@/shared/ui/Bars/Bars";
import "@/widgets/Header/Navigation.css";

export default function Navigation() {
	return (
		<nav className="navigation">
			<div className="navigation-inner">
				<Link className="navigation-link" href="/">Home</Link>
				<Link className="navigation-link" href="/catalog">Catalog</Link>
				<Link className="navigation-link" href="/fabrics">Fabrics</Link>
				<Link className="navigation-link" href="/gallery">Gallery</Link>
				<Link className="navigation-link" href="/contacts">Contacts</Link>
			</div>
			<Bars />
		</nav>
	);
}