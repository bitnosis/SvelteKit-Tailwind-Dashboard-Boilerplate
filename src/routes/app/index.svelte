<script context="module">
	export async function load({ session }) {
		if (!session) {
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

<script>
	import AppLayout from '$lib/Pages/AppLayout.svelte';
</script>

<svelte:head>
	<title>Fullscript AB Testing Platform</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<form action="/logout" method="get">
	<button class="p-8 bg-gray-400">LOGOUT</button>
</form>

<AppLayout />
