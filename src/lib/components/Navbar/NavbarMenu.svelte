<script>
	// Svelte
	import { slide } from 'svelte/transition';
	// Stores
	import { user } from '$lib/store/userStore.js';
	import { layout, toggleComponent } from '$lib/store/appLayout';
	// Components
	import NavItem from './NavItem.svelte';
	// Props
	export let pages;
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
			id="menu-button"
			on:click={() => toggleComponent('dropdownMenu')}
		>
			<i class="fas fa-circle-chevron-down" /></button
		>
	</div>

	{#if $layout.headerState.dropdownMenuOpen}
		<div
			class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:slide
		>
			<div class="py-1" role="none">
				<NavItem linkData={{ link: '/app', title: 'Dashboard', icon: 'house' }} />
				{#if pages}
					{#each pages as link (link.link)}
						{#if $user && link.auth}
							<NavItem linkData={link} />
						{:else if !link.auth && !link.hideIfAuth}
							<NavItem linkData={link} />
						{/if}
					{/each}
				{/if}
				<NavItem isLogout />
			</div>
		</div>
	{/if}
</div>
