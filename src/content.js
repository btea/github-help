import { createApp } from "vue";
import Content from "./Content.vue";
import mark from "./utils/mark";
import addDrag from "./utils/drag";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.value) {
		console.log(request);
		// console.log(sender);
		// 发送的信息似乎可以直接发送对象
		sendResponse("content-script已经接收到你的消息");
		if (request.cmd === "reload-page") {
			// 先把操作存起来,此时插件会刷新
			// localStorage.setItem('refresh', true);
			// 不需要保存起来，延时刷新即可
			setTimeout(() => {
				window.location.reload();
			}, 3000);
		}
	}
});

mark();
const box = document.createElement("div");
box.className = "github-extension-box";
const style = {
	position: "fixed",
	top: "0",
	width: "300px",
	padding: "10px",
	background: "#fff",
	"border-radius": "5px",
	"box-shadow": "0 0 5px 5px rgba(0, 0, 0, .3)",
	"z-index": 99999
};
Object.keys(style).forEach((sty) => {
	box.style[sty] = style[sty];
});
const app = createApp(Content);
app.mount(box);
document.body.appendChild(box);
addDrag(box);
