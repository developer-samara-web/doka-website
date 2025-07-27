import "@/components/sections/Navigation/Navigation.css";

import Bars from "@/components/commons/Bars/Bars";
import Link from "next/link";

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