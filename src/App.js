import "./App.css";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Services from "./components/services/services";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

// fetch("http://localhost:4000/services")
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 	});

function App() {
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

export default App;
