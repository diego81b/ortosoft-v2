<template>
	<div class="main-container">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Default',
};
</script>

<style lang="scss" scoped>
.main-container {
	@apply font-mono;
	@apply bg-gray-600;
	@apply text-white;
	height: 100vh;
	width: 100%;
}
</style>
