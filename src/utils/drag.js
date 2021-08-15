let isCanMove = false;
let x = 0;
let y = 0;
let clientX, clientY;
export default function addDrag(el) {
	moveToRight(el);
	el.addEventListener("mousedown", (e) => {
		isCanMove = true;
		clientX = e.clientX;
		clientY = e.clientY;
	});
	document.addEventListener("mousemove", (e) => {
		if (!isCanMove) {
			return;
		}
		const _x = e.clientX - clientX;
		const _y = e.clientY - clientY;
		el.style.transform = `translate(${x + _x}px, ${y + _y}px)`;
	});
	document.addEventListener("mouseup", () => {
		isCanMove = false;
		const transform = el.style.transform;
		const reg = /translate\((\d+)px, (\d+)px\)/;
		if (transform.match(reg)) {
			let a = parseInt(RegExp.$1);
			let b = parseInt(RegExp.$2);
			if (a !== a) {
				a = 0;
			}
			if (b !== b) {
				b = 0;
			}
			x = a;
			y = b;
		}
	});
}

function moveToRight(el) {
	const style = window.getComputedStyle(el);
	// 滚动条的宽度
	x = window.innerWidth - parseInt(style.width) - 40;
	el.style.transform = `translate(${x}px, 0px)`;
}
