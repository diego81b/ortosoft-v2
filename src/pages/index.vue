<template>
	<MainPage>
		<div class="flex flex-col space-y-4">
			<div>
				Vegetables
			</div>
			<!-- <div>Total count: {{ totalCount }}</div> -->
			<input
					v-model="filter.searchString"
					placeholder="Please input"
					type="text"
					class="rounded-md focus:outline-none border-transparent focus:border-transparent placeholder-gray-500 bg-gray-700 ring-4 ring-gray-700 focus:ring-gray-500 focus:ring-4 h-8"
			>
			<div>
				<div
						class="flex flex-col space-y-4 justify-center tablet:flex-row tablet:space-x-4 tablet:space-y-0 tablet:items-center"
				>
					<div
							v-for="result in list"
							:key="result.slug"
							class="flex flex-col flex-1 tablet:h-full min-h-32 rounded-md shadow-sm p-1 ring-4 ring-green-400 bg-green-100 text-gray-700"
					>
						<div class="flex items-baseline">
							<img
									class="rounded-md bg-green-500 h-20 w-20 p-1 m-1 self-center"
									:src="result.imageData || ''"
							>
							<div class="text-lg bold uppercase w-2/5">
								{{ result.name }}
							</div>
							<span class="text-sm italic"> ({{ result.latinName }})</span>
						</div>
						<div class="flex-auto">
							{{ result.description }}
						</div>
					</div>
				</div>
			</div>
			<div class="text-red-600">
				{{ error }}
			</div>
			<button
					class="rounded-md focus:outline-none border-transparent focus:border-transparent bg-yellow-500 ring-4 ring-yellow-500 focus:ring-yellow-300 focus:ring-4 h-8"
					@click="search"
			>
				Click here!
				<!-- <i-heroicons-solid-refresh class="inline-block text-center align-middle"/> -->
        <span class="iconify inline-block text-center align-middle" data-icon="heroicons-solid:refresh"></span>
			</button>
		</div>
	</MainPage>
</template>

<script>
/* eslint-disable no-unused-vars */
import {
	defineComponent,
	useContext,
	onMounted,
	ref,
	reactive,
	watch,
	toRefs,
} from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import gql from 'graphql-tag';
// import HeroIcon from '~/components/HeroIcon.vue';

export default defineComponent({
	name: 'Home',
	setup: (props, context) => {
		const filter = reactive({
			searchString: '',
			orderBy: ['name'],
		});

		const { result, loading, error, refetch } = useQuery(gql`
				query fetchVegetables {
					vegetable {
						id
						latinName
						name
						description
					}
				}
			`);

		onMounted(() => {
			search();
		});

		watch(filter, () => search());

		const search = () => {
			refetch();
		};

		const list = useResult(result);

		return {
			filter,
			loading,
			list,
			search,
			error,
		};
	},
});
</script>

<style scoped>
  
</style>
