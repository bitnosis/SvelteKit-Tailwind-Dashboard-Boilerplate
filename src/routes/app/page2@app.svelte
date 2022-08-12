<script>
	// Components
	import DemoPage from '$lib/Pages/DemoPage.svelte';
	// Props
	export let result;
</script>

<DemoPage
	number={2}
	{result}
	body={'This page shows an instantly loaded page, but with a long server load fetching some API data. It just shows a loading state until that data is returned.'}
/>
