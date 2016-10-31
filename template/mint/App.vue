<template>
	<div>
		<router-view></router-view>
	</div>
</template>


<style lang="css">
@import "./assets/css/reset.css";
html {
	font-size: 100px;
}	
body {
	font-size: 16px;
	background-color: #f8f8f8;
}
html, body {
	width: 100%;
	height: 100%;
}
.app-container {
	height: 100%;
}
.page-scroll {
	overflow: scroll;
	height: 100%;
	-webkit-overflow-scrolling: touch;
	overflow-x: hidden;
}
</style>