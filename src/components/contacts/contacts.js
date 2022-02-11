import "./contacts.css";

function Contacts() {
	return (
		<section id="contacts">
			<h2>Contacts</h2>
			<address>
				<ul id="address">
					<li>Phone: +63 32 238 8313</li>
					<li>
						Address: AddressM.L. Quezon National Highway, Lapu-Lapu City, 6015
						Cebu, Philippines
					</li>
					<li>
						mail: <a>lomispa_ph@yahoo.com</a>
					</li>
				</ul>
			</address>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.285853742749!2d123.96299031479684!3d10.318992892632904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999d0133f4817%3A0x48d9dc1add55721a!5sLomi%20Spa!5e0!3m2!1sen!5suk!4v1619908081713!5m2!1sen!5suk"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</section>
	);
}

export default Contacts;
