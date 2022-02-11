import "./about.css";

function About() {
	return (
		<section id="about">
			<div className="lomiLogo">
				<img src="./logo.svg" alt="company logo" loading="lazy" />
				<h1>Lomi spa</h1>
			</div>

			<div className="lomiMessage">
				<p>
					Relax, recharge and pamper yourself in Lomi Spa with our traditional
					Filipino Hilot combined with the Lomilomi technique from Hawaii.{" "}
				</p>
			</div>
		</section>
	);
}

export default About;
