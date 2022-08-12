<!-- Browser Render -->
<script>
	// Svelte
	import { onMount } from 'svelte';
	// Props
	export let number;
	export let result;
	export let body;

	onMount(() => {
		if (number !== 1) {
			result = fetchData();
		}
	});

	// Only demo page 2 uses this
	async function fetchData() {
		const response = await fetch('/api/demofetch');
		return await response.json();
	}
</script>

<div class="p-20 text-gray-400 dark:text-white">
	<h1 class="text-center text-6xl ">Page {number} here</h1>
	<p class="ml-20 mt-20">
		{body}<br /><br /><br />

		{#if number == 2}
			<!-- Page 2 example of load first, fetch later -->
			{#await result}
				<p class="text-4xl text-gray-200">Loading....</p>
			{:then result}
				<p class="text-2xl text-orange-500">
					Data Loaded :
					<b>{JSON.stringify(result)}</b>
				</p>
			{/await}
		{:else}
			<!-- Page 1 example of fetch all first, then display -->
			<p class="text-2xl text-orange-500">
				Data Loaded :
				<b>{JSON.stringify(result)}</b>
			</p>
		{/if}
	</p>
</div>
