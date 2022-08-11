<script>
	import { onMount } from 'svelte';
	import Buckets from '$lib/Pages/Buckets.svelte';
	// import { auth } from '$lib/utils/atuh.js';
	export let user;

	onMount(async () => {
		if (!user && window.location.pathname !== '/login') {
			window.location.href = window.location.origin + '/login';
		}
	});
</script>

<svelte:head>
	<title>Buckets</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
asdasdsadsadasdsadasd lkjasdalskdjslkd
