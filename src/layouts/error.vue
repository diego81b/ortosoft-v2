<template>
	<div>
		{{ error }}
		<h1 v-if="error.statusCode === 404">
			{{ pageNotFound }}
		</h1>
		<h1 v-else>
			{{ otherError }}
		</h1>
	</div>
</template>

<script>
export default {
	layout: 'Error',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred',
		};
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title,
		};
	},
};
</script>

<style scoped>
h1 {
	font-size: 20px;
}
</style>
