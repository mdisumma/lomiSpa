import Navigation from "../components/navigation/navigation";
import LogIn from "../components/navigation/logIn";
import PageNav from "../components/navigation/pageNav";
import About from "../components/about/about";
import Gallery from "../components/gallery/gallery";
import Services from "../components/services/services";
import BookOnline from "../components/services/bookOnline";
import Contacts from "../components/contacts/contacts";
import Footer from "../components/footer/footer";

function HomePage() {
	return (
		<>
			<Navigation log={<LogIn />} nav={<PageNav />} />
			<About />
			<Gallery />
			<Services bookOnline={<BookOnline />} />
			<Contacts />
			<Footer />
		</>
	);
}

export default HomePage;
