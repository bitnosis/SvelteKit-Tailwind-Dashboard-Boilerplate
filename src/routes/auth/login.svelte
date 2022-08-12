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
	// Stores
	import { loginUser } from '$lib/store/userStore';
	import { supabase } from '$lib/utils/supabaseClient';

	// Components
	import LoginForm from '$lib/components/LoginForm.svelte';

	// Functions
	const login = async (email, password) => {
		const { user, error } = await supabase.auth.signIn({ email, password });
		loginUser(user);
		if (user) window.location.replace('/app');
	};
</script>

<LoginForm formTitle="Login to Your Account" buttonText="Sign In" handleForm={login}>
	<!-- Display the register link from here in footer when on login form-->
	<a href="/auth/signup" class="text-gray-600 dark:text-gray-400">
		<small>Create new account</small>
	</a>
</LoginForm>
