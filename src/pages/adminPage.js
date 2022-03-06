import Navigation from "../components/navigation/navigation";
import LogOut from "../components/navigation/logOut";
import AboutLogo from "../components/about/aboutLogo";
import BookingData from "../components/adminData/bookingData/bookingData";
import UserData from "../components/adminData/userData/userData";
import ServiceData from "../components/adminData/serviceData/serviceData";
import Footer from "../components/footer/footer";

function AdminPage() {
	return (
		<>
			<Navigation log={<LogOut />} />
			<AboutLogo />
			<BookingData />
			<UserData />
			<ServiceData />
			<Footer />
		</>
	);
}

export default AdminPage;
