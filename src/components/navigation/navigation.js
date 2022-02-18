import "./navigation.css";

function Navigation(props) {
	return (
		<nav>
			<div className="nav-user">
				<a href="#top">
					<img src="/lomi-spa-mono.svg" alt="company logo" loading="lazy"></img>
				</a>
				{props.log}
			</div>

			{props.nav}
		</nav>
	);
}

export default Navigation;
