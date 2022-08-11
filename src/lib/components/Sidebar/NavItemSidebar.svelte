<script>
	import { theme } from '$lib/store/appLayout';
	// Props
	export let linkData;
	export let collapsed;
	const { icon, title, link, count } = linkData;
	export let iconColor = 'bg-gray-200';
</script>

<li>
	{#if collapsed}
		<a
			href={link}
			on:click
			class="flex items-center p-2 border-t pt-4 border-gray-400  text-base font-normal hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			<div class="border">
				<i class="fas text-2xl fa-{icon} {iconColor}" />
			</div>
		</a>
	{:else}
		<a
			href={link}
			on:click
			class="flex items-center p-2 px-3 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			<i class="fas fa-{icon} {iconColor}" />
			<span class="flex-1 ml-3 whitespace-nowrap">{title}</span>
			{#if count}
				<span
					class="inline-flex justify-center items-center p-3 px-4 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
					>{count}</span
				>
			{/if}
		</a>
	{/if}
</li>
