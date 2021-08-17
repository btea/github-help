<template>
	<div class="box">
		<div class="repositories">
			<input type="text" class="add-res" v-model="text" />
			<button class="add-btn" @click="addLink">添加</button>
		</div>
		<div class="users">
			<input type="text" class="add-user" v-model="user" />
			<button class="add-btn" @click="startRequest">查询</button>
		</div>
		<div class="res-list"></div>
	</div>
</template>
<script setup>
import api from "./api";
import { tips } from "./utils/tips";
import { validateLink } from "./utils/vali";
import { ref, getCurrentInstance } from "vue";
let text = ref("");
let user = ref("");
const ins = getCurrentInstance();
const addLink = () => {
	if (!text.value) {
		tips("", "请输入要添加的仓库");
		return;
	}
	if (!validateLink(text.value)) {
		tips("", "请输入正确的仓库地址");
		return;
	}
};
const startRequest = () => {
	api.history(user.value).then((res) => {
		console.log(res);
	});
};
</script>
<style lang="less" scoped>
.repositories,
.users {
	margin-bottom: 15px;
}
.add-res,
.add-user {
	height: 35px;
	border-radius: 5px;
	border: 1px solid aqua;
	padding: 0 10px;
	margin-right: 15px;
	&:focus {
		outline: none;
	}
}
.add-btn {
	padding: 5px 10px;
	background: #6cf;
	border-radius: 5px;
	border: none;
	color: #fff;
}
</style>
