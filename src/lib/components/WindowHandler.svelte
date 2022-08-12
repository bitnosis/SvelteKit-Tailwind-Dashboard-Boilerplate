<script>
	// Stores
	import { layout, toggleComponent, onKeyDown } from '$lib/store/appLayout.js';
	// Variables
	let innerWidth = window.innerWidth;
	// Reactive useEffect
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

<svelte:window on:keydown={onKeyDown} bind:innerWidth />
