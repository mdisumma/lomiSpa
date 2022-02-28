import Navigation from "../components/navigation/navigation";
import LogOut from "../components/navigation/logOut";
import AboutLogo from "../components/about/aboutLogo";
import BookingData from "../components/bookingData/bookingData";
import Footer from "../components/footer/footer";

function AdminPage() {
	return (
		<>
			<Navigation log={<LogOut />} />
			<AboutLogo />
			<BookingData />
			<Footer />
		</>
	);
}

export default AdminPage;
