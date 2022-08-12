<script>
	// Props
	export let linkData;
	export let collapsed;
	export let iconColor = 'bg-gray-200 hover:bg-gray-800';
	export let sidebarHover = 'hover:bg-gray-900 dark:hover:bg-gray-700';

	const { icon, title, link, count } = linkData;
</script>

<li>
	{#if collapsed}
		<a
			href={link}
			on:click
			class="flex items-center p-2 border-t pt-3 dark:border-gray-500 border-gray-300 font-normal"
		>
			<i class="fas fa-{icon} {iconColor}" />
		</a>
	{:else}
		<a
			href={link}
			on:click
			class="flex items-center p-2 px-3 rounded-md font-normal {sidebarHover}"
		>
			<i class="fas fa-{icon} {iconColor} " />
			<span class="flex-1 ml-3 whitespace-nowrap">{title}</span>
			{#if count}
				<span
					class="inline-flex justify-center items-center p-3 px-4 ml-3 w-3 h-3 text-sm font-medium text-blue-800 bg-blue-300 rounded-full dark:bg-yellow-600 dark:text-gray-900"
					>{count}</span
				>
			{/if}
		</a>
	{/if}
</li>
