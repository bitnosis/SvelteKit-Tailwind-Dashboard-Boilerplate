<script>
	// Svelte
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	// Stores
	import { theme, layout, appInfo } from '$lib/store/appLayout.js';
	// Components
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';

	// Props
	export let user = null;
</script>

<svelte:head>
	<title>{appInfo.name}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="flex overflow-x-hidden h-screen">
	{#if $layout.hasSidebar}
		{#if $layout.sidebarState.shown}
			<div transition:fly={{ x: -100 }}>
				<Sidebar />
			</div>
		{/if}
	{/if}

	<div class="flex-1">
		{#if $layout.hasHeader}
			<Navbar />
		{/if}
		<main class="p-4">
			<slot />
		</main>
	</div>
</div>
