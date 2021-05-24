<template>
	<div class="auth">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Auth',
};
</script>

<style lang="scss" scoped>
.auth {
	@apply flex;
	@apply pb-10;
	@apply flex-col;
	@apply w-full;
	@apply items-center;
	@apply justify-center;
	height: 100vh;
}
</style>
