<template>
	<div class="main-layout">
		<header v-if="hasHeader">
			<slot name="header" />
		</header>
		<main ref="main">
			<slot />
		</main>
	</div>
</template>

<script>
export default {
	name: 'Standard',
	components: {},
	props: {
		customStyle: {
			type: Object,
			default: null,
		},
		hasHeader: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {};
	},
	mounted() {
		this.$refs.main.addEventListener('scroll', this.onScroll);
		const Notify = window?.Notification;
		if (!Notify) {
			alert('This browser does not support desktop Notify');
		}
		// Otherwise, we need to ask the user for permission
		else {
			Notify.requestPermission().then(function (permission) {
			// If the user accepts, let's create a Notify
				console.log('permission');
			});
		}
	},
	beforeDestroy() {
		if (this.$refs.main) {
			this.$refs.main.removeEventListener('scroll', this.onScroll);
		}
	},
	methods: {
		/**
		 * @desc On scroll callback
		 */
		onScroll(element) {
			this.plainHeader = element.target.scrollTop > 10;
		},
	},
};
</script>

<style lang="scss" scoped>
.main-layout {
	@apply flex;
  @apply flex-col;
  @apply h-screen;
  @apply w-full;
  @apply overflow-hidden;

	header {
		@apply fixed;
    @apply h-16;
    @apply w-full;
	}

	main {
		@apply p-4;
    @apply mt-16;
    @apply h-screen;
    @apply overflow-y-auto;
	}
}
</style>
