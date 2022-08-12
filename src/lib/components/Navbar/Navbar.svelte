<script>
	// Stores
	import { user, setTheme } from '$lib/store/userStore.js';
	import { pages } from '$lib/store/navigationLinks.js';
	import { layout, appInfo, toggleComponent } from '$lib/store/appLayout';

	// Components
	import NavItem from './NavItem.svelte';
	import DarkModeToggle from '../DarkModeToggle.svelte';

	// Variables
	let headerColors = 'bg-gray-200 dark:bg-gray-900 dark:text-gray-100 text-gray-600';
</script>

<nav class="flex items-center p-4 text-semibold px-2 mb-6 sm:px-4 py-2.5 {headerColors}">
	<div class="w-full flex flex-wrap justify-between items-center">
		<div class="inline flex">
			{#if $layout.hasSidebar}
				<button on:click={() => toggleComponent('sidebarCollapse')} class="p-1 mr-4">
					<i class="fa fa-bars" /></button
				>
			{/if}

			<a href="/app" class="inline flex items-center">
				<span class=" text-xl font-bold whitespace-nowrap ">{appInfo.name}</span>
			</a>
		</div>

		<div id="navbar-default" class="w-full md:block md:w-auto">
			<ul
				class="flex flex-col p-3 mt-5 rounded-lg border border-gray-100 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0"
			>
				{#if $layout.headerState.showDarkMode}
					<DarkModeToggle />
				{/if}

				{#if pages && $layout.headerState.showMenuItems}
					{#each pages as link (link.link)}
						{#if $user && link.auth}
							<NavItem linkData={link} />
						{:else if !link.auth && !link.hideIfAuth}
							<NavItem linkData={link} />
						{/if}
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</nav>
