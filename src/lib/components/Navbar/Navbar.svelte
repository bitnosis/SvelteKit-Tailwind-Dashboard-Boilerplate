<script>
	// Stores
	import {
		layout,
		theme,
		pages,
		appInfo,
		toggleDarkMode,
		toggleComponent
	} from '$lib/store/appLayout';
	import { user } from '$lib/store/mainStore.js';
	// Components
	import NavItem from './NavItem.svelte';
</script>

<nav class="flex items-center p-4 text-semibold px-2 mb-6 sm:px-4 py-2.5 {$theme.colors.header}">
	<div class="w-full flex flex-wrap justify-between items-center">
		<div class="inline flex">
			{#if $layout.hasSidebar}
				<button on:click={() => toggleComponent('sidebarCollapse')} class="p-1 mr-4">
					<i class="fa fa-bars" /></button
				>
			{/if}

			<a href="/" class="inline flex items-center">
				<span class=" text-xl font-bold whitespace-nowrap ">{appInfo.name}</span>
			</a>
		</div>

		<div id="navbar-default" class="w-full md:block md:w-auto">
			<ul
				class="flex flex-col p-3 mt-5 rounded-lg border border-gray-100 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0"
			>
				{#if $theme.dark}
					<button
						class="bg-gray-50 text-black rounded-md px-3 py-2"
						style="margin-top:-7px;"
						on:click={toggleDarkMode}
					>
						<i class="fas fa-sun" />
					</button>
				{:else}
					<button
						class="bg-gray-500 text-gray-50 rounded-md px-3 py-2"
						style="margin-top:-7px;"
						on:click={toggleDarkMode}
					>
						<i class="fas fa-moon" />
					</button>
				{/if}

				{#if pages}
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
