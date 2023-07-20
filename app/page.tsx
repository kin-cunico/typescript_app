import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<Navbar />
			<Hero />
			<Footer />
		</main>
	);
}
