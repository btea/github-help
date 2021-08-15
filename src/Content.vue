<template>
	<div class="box">
		<input type="text" class="add-res" v-model="text" />
		<button class="add-btn" @click="startRequest">添加</button>
		<div class="res-list"></div>
	</div>
</template>
<script setup>
import api from "./api";
import { ref } from "vue";
let text = ref("");
const startRequest = () => {
	api.testApi().then((res) => {
		console.log(res);
	});
};
</script>
<style lang="less" scoped>
.add-res {
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
