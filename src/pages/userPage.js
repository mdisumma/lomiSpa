import Navigation from "../components/navigation/navigation";
import LogOut from "../components/navigation/logOut";
import AboutLogo from "../components/about/aboutLogo";
import BookingForm from "../components/booking/booking";
import Services from "../components/services/services";
import Contacts from "../components/contacts/contacts";
import Footer from "../components/footer/footer";

function UserPage() {
	return (
		<>
			<Navigation log={<LogOut />} />
			<AboutLogo />
			<BookingForm />
			<Services />

			<Contacts />
			<Footer />
		</>
	);
}

export default UserPage;
