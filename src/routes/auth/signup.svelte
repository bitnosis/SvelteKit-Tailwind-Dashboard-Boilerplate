<script context="module">
	export async function load({ session }) {
		if (session) {
			return {
				status: 302,
				redirect: '/app'
			};
		}
		return {};
	}
</script>

<script>
	import { supabase } from '$lib/api/supabaseClient';
	import { theme } from '$lib/store/appLayout';
	import { onMount } from 'svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import { success, error } from '$lib/utils/toastTheme';

	let loading = false;
	let email = 'analogpermutations@gmail.com';
	let password = 'testtest';

	onMount(async () => {
		document.body.className = $theme.colors.loginBackground;
	});

	const loginUser = async (e) => {
		try {
			let response = await fetch('/signup', {
				method: 'POST',
				body: new FormData(e.target)
			});
			if (response.ok) {
				success('Signup successful');
				window.location.href = window.location.origin + '/app';
			} else {
				error('Failed');
			}
		} catch (error) {
			//console.log(error);
			//error(error.message);
		}
	};

	let boxColor;
	// Default to gray if no theme colors set
	if ($theme.colors.theme == '') {
		boxColor = 'bg-gray-900 text-white';
	} else {
		boxColor = $theme.colors.theme;
	}
</script>

<div class="container mt-20 mx-auto h-full">
	<div class="flex content-center items-center justify-center h-full">
		<div class="w-full lg:w-5/12 px-2">
			<div
				class={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 ' +
					boxColor}
			>
				<div class="rounded-t mb-0 px-4 py-6">
					<div class="text-center mb-3">
						<h6 class="text-gray-200 text-sm font-bold">Sign Up</h6>
					</div>
					<hr class="mt-6 border-b-1 border-gray-300" />
				</div>
				<div class="flex-auto px-10 lg:px-20 py-10  pt-0">
					<form on:submit|preventDefault={loginUser}>
						<div class="relative w-full mb-3">
							<label class="block uppercase text-gray-200 text-xs font-bold mb-2" for="grid-email">
								Email
							</label>
							<input
								bind:value={email}
								id="grid-email"
								type="email"
								name="email"
								class="border-0 px-3 py-3 placeholder-gray-700 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Email"
							/>
						</div>

						<div class="relative w-full mb-3">
							<label
								class="block uppercase text-gray-200 text-xs font-bold mb-2"
								for="grid-password"
							>
								Password
							</label>
							<input
								id="grid-password"
								type="password"
								name="password"
								class="border-0 px-3 py-3 placeholder-gray-700 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Password"
								bind:value={password}
							/>
						</div>
						<div class="mt-6">
							<label class="inline-flex items-center cursor-pointer">
								<input
									id="customCheckLogin"
									type="checkbox"
									class="form-checkbox border-0 rounded text-white ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>
								<span class="ml-2 text-sm font-semibold text-white "> Remember me </span>
							</label>
						</div>

						<div class="text-center mt-6">
							<button
								class="mt-4 bg-white text-black active:bg-gray-600 active:text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
								type="submit"
							>
								REGISTER
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="flex flex-wrap mt-6 relative">
				<div class="w-1/2">
					<a href="/auth/forgotpassword" class="text-gray-600">
						<small>Forgot password?</small>
					</a>
				</div>
				<div class="w-1/2 text-right">
					<a href="/auth/login" class="text-gray-600">
						<small>Already Have an Account? Login</small>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
