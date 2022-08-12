<script>
	// Stores
	import { user } from '$lib/store/userStore.js';
	import { layout, appInfo, closeSidebarCTA } from '$lib/store/appLayout';
	import { pages } from '$lib/store/navigationLinks.js';

	// Components
	import LogoutLink from '../LogoutLink.svelte';
	import NavItemSidebar from './NavItemSidebar.svelte';

	// Variables
	let sideBarColors = 'shadow-lg text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-900';
	let sideBarIconColor = 'dark:text-gray-500 text-gray-400 dark:hover:text-white';
	let sideBarHover = 'hover:bg-gray-700 hover:text-white';
</script>

<aside class={$layout.sidebarState.collapsed ? 'w-20' : 'w-64'} aria-label="Sidebar">
	<div class="overflow-y-auto no-scrollbar h-screen py-5 px-4 {sideBarColors}">
		<a href={appInfo.website} class="flex items-center pl-2.5 mb-6">
			<img src={appInfo.logo} class="mr-3 h-6 sm:h-8" alt="App logo" />
			{#if !$layout.sidebarState.collapsed}
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-black"
					>{appInfo.brand}</span
				>
			{/if}
		</a>

		<ul class="space-y-4">
			{#if pages}
				{#each pages as link (link.link)}
					{#if $user && link.auth}
						<NavItemSidebar
							collapsed={$layout.sidebarState.collapsed}
							iconColor={sideBarIconColor}
							sidebarHover={sideBarHover}
							linkData={link}
						/>
					{:else if !link.auth && !link.hideIfAuth}
						<NavItemSidebar
							collapsed={$layout.sidebarState.collapsed}
							iconColor={sideBarIconColor}
							sidebarHover={sideBarHover}
							linkData={link}
						/>
					{/if}
				{/each}
			{/if}

			<LogoutLink iconColor={sideBarIconColor} sidebarHover={sideBarHover} />
		</ul>
		{#if $layout.sidebarState.cta && !$layout.sidebarState.collapsed}
			<div
				id="dropdown-cta"
				class="p-4 mt-8 bg-blue-200 shadow-sm rounded-lg dark:bg-blue-900"
				role="alert"
			>
				<div class="flex items-center mb-3">
					<span
						class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900"
						>{$layout.sidebarState.cta_data.label}</span
					>
					<button
						type="button"
						class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
						data-collapse-toggle="dropdown-cta"
						aria-label="Close"
						on:click={closeSidebarCTA}
					>
						<span class="sr-only">Close</span>
						<svg
							aria-hidden="true"
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
					{$layout.sidebarState.cta_data.body}
				</p>
				<a
					class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					href={$layout.sidebarState.cta_data.link}>{$layout.sidebarState.cta_data.linkText}</a
				>
			</div>
		{/if}
	</div>
</aside>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
