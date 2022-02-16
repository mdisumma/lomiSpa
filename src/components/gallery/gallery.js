import "./gallery.css";

const imgList = [
	{ id: 1, href: "images/ls-1.jpg" },
	{ id: 2, href: "images/ls-3.jpg" },
	{ id: 3, href: "images/ls-4.jpg" },
	{ id: 4, href: "images/ls-5.jpg" },
	{ id: 5, href: "images/ls-6.jpg" },
	{ id: 6, href: "images/ls-7.jpg" },
	{ id: 7, href: "images/ls-8.jpg" },
	{ id: 8, href: "images/ls-9.jpg" },
	{ id: 9, href: "images/ls-10.jpg" },
	{ id: 10, href: "images/ls-11.jpg" },
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
						<img
							src={link.href}
							key={link.id}
							alt=""
							className=""
							loading="lazy"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
