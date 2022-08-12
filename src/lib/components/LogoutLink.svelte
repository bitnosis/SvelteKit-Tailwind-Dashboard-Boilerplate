<script>
	import { layout } from '$lib/store/appLayout';
	import { logoutUser } from '$lib/store/userStore';
	export let iconColor;
	export let sidebarHover;

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
		<i class="fas fa-key text-2xl  {iconColor}" />
	</button>
{:else}
	<button
		on:click={logout}
		class="cursor-pointer rounded-md flex items-center p-2 px-3 font-normal {sidebarHover}"
	>
		<i class="fas fa-key mr-3  {iconColor}" /> Logout</button
	>
{/if}
