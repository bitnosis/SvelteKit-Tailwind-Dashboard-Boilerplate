<!-- SSR side checks for session -->
<script context="module">
	export async function load({ session }) {
		if (session.user != null) {
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
	const signUp = async (email, password) => {
		const { user, error } = await supabase.auth.signUp({ email, password });
		loginUser(user);
		if (user) window.location.replace('/app');
	};
</script>

<LoginForm formTitle="Create a New Account" buttonText="Register" handleForm={signUp}>
	<!-- Display the register link from here in footer when on login form-->
	<a href="/auth/login" class="text-gray-600 dark:text-gray-400">
		<small>Already Have an Account? Login</small>
	</a>
</LoginForm>
