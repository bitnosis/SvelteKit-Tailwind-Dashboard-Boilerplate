<script>
	// Props
	// Props
	export let linkData;
	const { icon, title, link, count } = linkData;
</script>

<a
	href={link}
	class="text-gray-600 block hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-orange-400 px-4 py-2 text-sm"
	role="menuitem"
	tabindex="-1"
	id="menu-item-0"><i class="fas fa-{icon} mr-2" /> {title}</a
>
