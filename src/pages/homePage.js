import Navigation from "../components/navigation/navigation";
import About from "../components/about/about";
import Gallery from "../components/gallery/gallery";
import Services from "../components/services/services";
import Contacts from "../components/contacts/contacts";
import Footer from "../components/footer/footer";

function HomePage() {
	return (
		<>
			<Navigation />
			<About />
			<Gallery />
			<Services />
			<Contacts />
			<Footer />
		</>
	);
}

export default HomePage;
