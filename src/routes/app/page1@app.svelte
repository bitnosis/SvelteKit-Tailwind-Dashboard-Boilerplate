<!-- SSR side checks for session -->
<script context="module">
	export async function load({ session }) {
		if (!session.user || session.user == null) {
			return {
				status: 302,
				redirect: '/auth/login'
			};
		}
		return {
			props: { session }
		};
	}
</script>

<!-- Browser Render -->
<script>
	// Svelte
	import { onMount } from 'svelte';
	// Stores
	import { updateUser } from '$lib/store/userStore';
	// Components
	import DemoPage from '$lib/Pages/DemoPage.svelte';
	// Props
	export let session;
	// Functions
	onMount(() => {
		if (session) {
			updateUser(session);
		}
	});
</script>

<DemoPage number={1} {session} />
