<script>
	// Stores
	import { user, setTheme } from '$lib/store/userStore.js';
	import { pages } from '$lib/store/navigationLinks.js';
	import { layout, appInfo, toggleComponent } from '$lib/store/appLayout';

	// Components
	import NavItem from './NavItem.svelte';
	import DarkModeToggle from '../DarkModeToggle.svelte';
	import NavbarMenu from './NavbarMenu.svelte';

	// Variables
	let headerColors = 'bg-gray-200 dark:bg-gray-900 dark:text-gray-100 text-gray-600';
</script>

<nav class="flex items-center p-4  text-semibold px-2 mb-6 sm:px-4 py-1.5 {headerColors}">
	<div class="w-full flex flex-wrap {$layout.headerState.height} justify-between items-center">
		<div class="inline flex mt-[-8px]">
			{#if $layout.hasSidebar}
				<button on:click={() => toggleComponent('sidebarCollapse')} class="mr-4">
					<i class="fa fa-bars" /></button
				>
			{/if}
			<a href="/app" class="inline flex items-center">
				<span class=" text-xl font-bold whitespace-nowrap ">{appInfo.name}</span>
			</a>
		</div>

		<div class="inline flex mt-0.5">
			{#if $layout.headerState.showDarkMode}
				<div><DarkModeToggle /></div>
			{/if}
			<NavbarMenu {pages} />
		</div>
	</div>
</nav>
