import Navigation from "../components/navigation/navigation";
import LogOut from "../components/navigation/logOut";
import AboutLogo from "../components/about/aboutLogo";
import Footer from "../components/footer/footer";
import Search from "../components/search/search.js"

function AdminPage() {
	return (
		<>
			<Navigation log={<LogOut />} />
			<AboutLogo />
			<Search />
			<Footer />
		</>
	);
}

export default AdminPage;
