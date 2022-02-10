import "./navigation.css";

function Navigation() {
	return (
		<nav>
			<div className="nav-user">
				<a href="#top">
					<img src="/lomi-spa-mono.svg" alt="" loading="lazy"></img>
				</a>
				<div className="userButtons">
					<button>booking</button>
					<button>login</button>
				</div>
			</div>

			<ul className="nav-page">
				<li className="link">
					<a href="#gallery">Gallery</a>
				</li>
				<li className="link">
					<a href="#services">Services</a>
				</li>
				<li className="link">
					<a href="#contacts">Contacts</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
