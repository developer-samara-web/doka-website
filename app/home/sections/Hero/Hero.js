import Link from "next/link";
import Icon from "@/shared/ui/Icon/Icon";
import "@/app/home/sections/Hero/Hero.css";

export default function HomeHero() {
	return (
		<section className="hero" style={{ backgroundImage: `url('/hero.webp')`}}>
			<div className="hero-container">
				<div className="hero-title">Create your own interior with DOKA Furniture</div>
				<div className="hero-description">A large selection of upholstered furniture from the manufacturer at affordable prices</div>
				<Link href="/" className="hero-button">
					<Icon name="EyeIcon" className="hero-button-icon" />
					<span className="hero-button-text">Shop Now</span>
				</Link>
			</div>
		</section>
	);
}