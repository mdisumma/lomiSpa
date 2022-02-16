import "./gallery.css";

const imgList = [
	{ id: 1, href: "images/ls-1.jpg", className: "active" },
	{ id: 2, href: "images/ls-3.jpg", className: "" },
	{ id: 3, href: "images/ls-4.jpg", className: "" },
	{ id: 4, href: "images/ls-5.jpg", className: "" },
	{ id: 5, href: "images/ls-6.jpg", className: "" },
	{ id: 6, href: "images/ls-7.jpg", className: "" },
	{ id: 7, href: "images/ls-8.jpg", className: "" },
	{ id: 8, href: "images/ls-9.jpg", className: "" },
	{ id: 9, href: "images/ls-10.jpg", className: "" },
	{ id: 10, href: "images/ls-11.jpg", className: "" },
];

function Gallery() {
	return (
		<div id="gallery">
			<h2>Gallery</h2>
			<div id="container">
				<div id="slide">
					{imgList.map((link) => (
						<img
							src={link.href}
							key={link.id}
							alt=""
							className={link.className}
							loading="lazy"
						/>
					))}
				</div>
				<button
					onClick={() => {
						const selected = document.querySelector(".active");
						// console.log(selected);
						if (selected.nextElementSibling) {
							selected.nextElementSibling.className = "active";
							selected.className = "";
						}
					}}
					id="buttonRight"
				>
					<i className="fas fa-arrow-alt-circle-right"></i>
				</button>
				<button
					onClick={() => {
						const selected = document.querySelector(".active");
						// console.log(selected);
						if (selected.previousElementSibling) {
							selected.previousElementSibling.className = "active";
							selected.className = "";
						}
					}}
					id="buttonLeft"
				>
					<i className="fas fa-arrow-alt-circle-left"></i>
				</button>
			</div>
		</div>
	);
}

export default Gallery;
