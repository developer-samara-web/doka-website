import "@/layouts/UserLayout/UserLayout.css";

import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

export default function UserLayout({children}) {
	return (
		<main className="user-layout">
			<Header />
			{children}
			<Footer />
		</main>
	);
}