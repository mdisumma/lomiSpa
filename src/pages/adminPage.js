import Navigation from "../components/navigation/navigation";
import LogOut from "../components/navigation/logOut";
import AboutLogo from "../components/about/aboutLogo";
import Footer from "../components/footer/footer";

function AdminPage() {
	return (
		<>
			<Navigation log={<LogOut />} />
			<AboutLogo />
			<Footer />
		</>
	);
}

export default AdminPage;
