<template>
	<div class="precss">
		<h1>Powered By Vuejs 2</h1>
		<cell-swipe
  title="标题文字"
  :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]" v-for="n in 10" style="width: 200px;text-align:center;"></cell-swipe>
	</div>
</template>

<script>
import { CellSwipe } from 'mint-ui';
import 'mint-ui/lib/cell-swipe/style.css';
export default {
	components: {
		CellSwipe,
	},
};

</script>

<style lang="css" scoped>
.precss {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #41b883;
}
</style>