<template>
	<div class="box">
		<h1>hello world</h1>
		<input type="text" v-model="text" />
		<button @click="startRequest">测试</button>
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
