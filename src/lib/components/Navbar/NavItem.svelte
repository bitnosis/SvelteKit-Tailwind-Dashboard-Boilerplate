<script>
	// Stores
	import { logoutUser } from '$lib/store/userStore';
	// Props
	export let linkData = { icon: 'key', title: 'Logout' };
	export let isLogout = false;
	const { icon, title, link, count } = linkData;

	const logout = () => {
		logoutUser();
		window.location.replace('/');
	};
</script>

{#if isLogout}
	<span
		class="cursor-pointer text-gray-600 dark:text-gray-200 block hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-orange-400 px-4 py-2 text-sm"
		role="menuitem"
		tabindex="-1"
		on:click={logout}
		id="menu-item-0"><i class="fas fa-{icon} mr-2" /> {title}</span
	>
{:else}
	<a
		href={link}
		class="text-gray-600 dark:text-gray-200 block hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-orange-400 px-4 py-2 text-sm"
		role="menuitem"
		tabindex="-1"
		id="menu-item-0"><i class="fas fa-{icon} mr-2" /> {title}</a
	>
{/if}
