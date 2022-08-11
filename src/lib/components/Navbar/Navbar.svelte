<script>
	// Stores
	import { layout, theme, pages, toggleSidebar } from '$lib/store/appLayout';
	import { user } from '$lib/store/mainStore.js';
	// Components
	import NavbarItem from './NavbarItem.svelte';
	export let title = 'Here is your navbar title';

	let headerClass =
		'flex items-center p-4 text-semibold shadow-lg px-2 mb-6 sm:px-4 py-2.5 ' +
		$theme.colors.header;
</script>

<nav class={headerClass}>
	<div class="w-full flex flex-wrap justify-between items-center">
		<div class="inline flex">
			{#if $layout.hasSidebar}
				<button on:click={toggleSidebar} class="p-1 mr-4"> <i class="fa fa-bars" /></button>
			{/if}
			<a href="/" class="inline flex items-center">
				<span class=" text-xl font-bold whitespace-nowrap ">{title}</span>
			</a>
		</div>

		<div id="navbar-default" class="w-full md:block md:w-auto">
			<ul
				class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0"
			>
				{#if pages}
					{#each pages as link (link.link)}
						{#if $user && link.auth}
							<NavbarItem {...link} />
						{:else if !link.auth && !link.hideIfAuth}
							<NavbarItem {...link} />
						{/if}
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</nav>
