import "./gallery.css";

const imgList = [
	{ href: "images/ls-1.jpg" },
	{ href: "images/ls-3.jpg" },
	{ href: "images/ls-4.jpg" },
	{ href: "images/ls-5.jpg" },
	{ href: "images/ls-6.jpg" },
	{ href: "images/ls-7.jpg" },
	{ href: "images/ls-8.jpg" },
	{ href: "images/ls-9.jpg" },
	{ href: "images/ls-10.jpg" },
	{ href: "images/ls-11.jpg" },
];

function Gallery() {
	return (
		<div id="gallery">
			<h2>Gallery</h2>
			<div id="container">
				<button id="buttonRight">
					<i className="fas fa-arrow-alt-circle-right"></i>
				</button>
				<button id="buttonLeft">
					<i className="fas fa-arrow-alt-circle-left"></i>
				</button>
				<div id="slide">
					{imgList.map((link) => (
						<img src={link.href} alt="" className="" loading="lazy" />
					))}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
