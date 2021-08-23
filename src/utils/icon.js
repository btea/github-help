/**
 * goto top
 */
const styles = {
	position: "fixed",
	right: "50px",
	bottom: "50px",
	height: "50px",
	width: "50px",
	cursor: "pointer",
	border: "1px solid #6cf",
	display: "none",
	"border-radius": "50%"
};
const arrow_style = {
	position: "absolute",
	left: "11px",
	top: "0",
	width: 0,
	height: 0,
	border: "14px solid",
	"border-color": "transparent transparent #6cf transparent"
};

function backTop() {
	document.documentElement.scrollIntoView();
}

let isShow = false;
let el;
function scrollHeight() {
	const h = document.documentElement.scrollTop;
	if (h > 100) {
		el.style.display = "block";
	} else {
		el.style.display = "none";
	}
}

export default function toTopIcon() {
	el = document.createElement("div");
	el.classList = "github-back-top";
	Object.assign(el.style, styles);
	const arrow = document.createElement("div");
	arrow.classList = "github-back-top-arrow";
	Object.assign(arrow.style, arrow_style);
	el.appendChild(arrow);
	el.addEventListener("click", backTop);
	document.body.appendChild(el);
	document.addEventListener("scroll", scrollHeight);
}
