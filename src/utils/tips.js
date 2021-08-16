const colors = {
	warning: ""
};
const style = {
	position: "absolute",
	left: "50%",
	top: 0,
	padding: "5px 15px",
	transform: "translateX(-50%) translateY(0)",
	background: "#fff",
	"border-radius": "3px",
	"box-shadow": "0 0 10px 10px rgba(0, 0, 0, .2)"
};

export function tips(type, text, time) {
	type = type || "warning";
	time = time || 3000;
	const el = document.createElement("div");
	el.innerText = text;
	Object.keys(style).forEach((k) => {
		el.style[k] = style[k];
	});
	const box = document.querySelector(".github-extension-box");
	box.appendChild(el);
	setTimeout(() => {
		box.removeChild(el);
	}, time);
}
