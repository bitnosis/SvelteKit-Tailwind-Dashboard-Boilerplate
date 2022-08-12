<script>
	// Stores
	import { user, setTheme } from '$lib/store/userStore';
	// Variables
	let isDark;
	// Reactive listener
	$: {
		$user.theme == 'dark' ? (isDark = true) : (isDark = false);
	}
	// Functions
	function toggleTheme() {
		if ($user.theme == 'dark') {
			setTheme('light');
			isDark = false;
		} else {
			setTheme('dark');
			isDark = true;
		}
	}
</script>

<label for="default-toggle" class="mt-1 mr-4 inline-flex relative items-center cursor-pointer">
	<input
		type="checkbox"
		on:click={toggleTheme}
		checked={isDark}
		value=""
		id="default-toggle"
		class="sr-only peer"
	/>
	<div
		class="w-10 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-white-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"
	/>
	<span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">
		{#if $user.theme == 'dark'}
			<i class="fas fa-moon" />
		{:else}
			<i class="fas fa-sun" />
		{/if}
	</span>
</label>
