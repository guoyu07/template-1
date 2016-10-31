<template>
	<div class="precss">
		<h1>Powered By Vuejs 2</h1>
		<img src="../assets/img/logo.png" alt="">
	</div>
</template>

<script>
import api from '../api';	

export default {
	mounted() {
		api('/device/outdoor/1', 'get', {
		}).then((res) => {
			console.log(res)
		});
	}
}
</script>

<style lang="css" scoped>
.precss {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #41b883;
	img {
		width: 1rem;
	}
}
</style>