<script>
	import '../style.css';
	// Svelte
	import { fly } from 'svelte/transition';
	// Stores
	import { layout, appInfo } from '$lib/store/appLayout.js';
	// Components
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
</script>

<svelte:head>
	<title>{appInfo.name}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<main>
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

	<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</main>

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: 4rem;
		--toastContainerBottom: 4rem;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
