import "./header.css";

function Header() {
	return (
		<header>
			<nav>
				<a href="#top">
					<img src="/lomi-spa-mono.svg" alt="" loading="lazy"></img>
				</a>
				<button class="buttonToggle">
					<i class="fas fa-bars"></i>
				</button>
				<ul class="toggle">
					<li class="link">
						<a href="#gallery">Gallery</a>
					</li>
					<li class="link">
						<a href="#services">Services</a>
					</li>
					<li class="link">
						<a href="#contacts">Contacts</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
