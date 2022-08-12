<script>
	// Stores
	import { layout } from '$lib/store/appLayout';
	import { logoutUser } from '$lib/store/userStore';
	// Props
	export let iconColor = '';
	export let sidebarHover = '';
	// Functions
	const logout = () => {
		logoutUser();
		window.location.replace('/');
	};
</script>

{#if $layout.sidebarState.collapsed}
	<button
		on:click={logout}
		class="cursor-pointer flex items-center p-2 border-t pt-4 border-gray-400  text-base font-normal "
	>
		<i class="fas fa-key {iconColor}" />
	</button>
{:else}
	<span
		on:click={logout}
		class="cursor-pointer flex items-center p-2 px-3 rounded-md font-normal {sidebarHover}"
	>
		<i class="fas fa-key {iconColor}" />
		<span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
	</span>
{/if}
