<script>
	// Stores
	import { user } from '$lib/store/mainStore.js';
	import { supabase } from '$lib/api/supabaseClient';

	// Components
	import AppLayout from '$lib/Pages/AppLayout.svelte';
	import '../style.css';

	user.set(supabase.auth.user());

	// Check for if auth state has changed, and logout if no user
	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			// Set cookies or do other things here
		} else {
			window.location.href = window.location.origin;
		}
	});
</script>

<main>
	{#if $user}
		<AppLayout user={$user} />
	{:else}
		<slot />
	{/if}
</main>
