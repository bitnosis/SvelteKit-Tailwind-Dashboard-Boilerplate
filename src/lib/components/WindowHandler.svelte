<!-- This was to be used as a resize and keydown handler, maybe someone lese can figure it out? -->
<script>
	// Stores
	import { layout, toggleComponent, onKeyDown } from '$lib/store/appLayout.js';
	// Variables
	let innerWidth = window.innerWidth;
	// Reactive listener
	$: {
		if (
			innerWidth <= 800 &&
			innerWidth >= 750 &&
			!$layout.sidebarState.collapsed &&
			$layout.sidebarState.autoCollapse
		) {
			toggleComponent('sidebarCollapse');
		}

		if (
			innerWidth >= 950 &&
			innerWidth <= 1020 &&
			$layout.sidebarState.collapsed &&
			$layout.sidebarState.autoCollapse
		) {
			toggleComponent('sidebarCollapse');
		}
	}
</script>

<!-- I couldnt implement this in SvelteKit, since SSR has no access to the window object -->

<svelte:window on:keydown={onKeyDown} bind:innerWidth />
