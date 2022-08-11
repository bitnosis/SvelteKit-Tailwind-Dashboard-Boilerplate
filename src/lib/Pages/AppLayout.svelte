<script>
	// Svelte
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	// Stores
	import { theme, layout, appName } from '$lib/store/appLayout.js';
	// Components
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// Props
	export let user = null;
</script>

<svelte:head>
	<title>{appName}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="flex overflow-x-hidden h-screen">
	{#if $layout.sidebarState.shown}
		<div transition:fly={{ x: -100 }}>
			<Sidebar />
		</div>
	{/if}

	<div class="flex-1">
		<Navbar />
		<main class="p-4">
			<slot />
		</main>
	</div>
</div>
