<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	// I put the options for toasts here so you can see how to customize if you want
	/*const options = {
		duration: 4000,
		initial: 1,
		next: 0,
		pausable: false, // pause progress bar tween on mouse hover
		dismissable: true, // allow dismiss with close button
		reversed: false, // insert new toast to bottom of stack
		intro: { x: 256 }, // toast intro fly animation settings
		theme: {}, // css var overrides
		classes: [] // user-defined classes
	};*/
	import '../style.css';
</script>

<div class="theme-container ">
	<main>
		<slot />
		<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
	</main>
</div>

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: 4rem;
		--toastContainerBottom: 4rem;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
