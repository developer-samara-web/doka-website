import "@/components/layout/UserLayout/UserLayout.css";

import Header from "@/app/home/_components/Header/Header";
import Footer from "@/app/home/_components/Footer/Footer";

export default function UserLayout({children}) {
	return (
		<main className="user-layout">
			<Header />
			{children}
			<Footer />
		</main>
	);
}