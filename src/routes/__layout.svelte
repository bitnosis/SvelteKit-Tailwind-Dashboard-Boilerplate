<!-- SSR side checks for session -->
<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/app'
			};
		}
		return {};
	}
</script>

<!-- Browser Render -->
<script>
	import '../style.css';
	// Svelte
	import { onMount } from 'svelte';
	// Stores
	import { supabase } from '$lib/api/supabaseClient';
	import { logoutUser, setTheme } from '$lib/store/userStore';
	// Components
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

	onMount(async () => {
		setTheme();
	});

	const logout = async (e) => {
		const { error } = await supabase.auth.signOut();
		logoutUser();
	};
</script>

<div>
	<main>
		<div class="float-right pr-16 py-5">
			<DarkModeToggle />
		</div>
		<slot />
	</main>
</div>
