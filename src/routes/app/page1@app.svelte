<!-- SSR data loading -->
<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/demofetch');

		const result = await response.json();
		return {
			props: { result }
		};
	}
</script>

<!-- Browser render -->
<script>
	// Components
	import DemoPage from '$lib/Pages/DemoPage.svelte';
	// Props
	export let result;
</script>

<DemoPage
	number={1}
	{result}
	body={'This page takes the same amount of time as Page 2, but waits for the server to load the entire page AND data first, before showing anything.  This is to show of SvelteKit SSR and prefetching'}
/>
