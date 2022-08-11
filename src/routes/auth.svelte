<script>
	import { supabase } from '$lib/api/supabaseClient';
	console.log(supabase);

	let loading = false;
	let email;

	const loginUser = async () => {
		try {
			console.log(email);
			await supabase.auth.signIn({ email });
			alert('Check your email for valid link');
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};
</script>

<div class="container mx-auto px-4 h-full">
	<div class="flex content-center items-center justify-center h-full">
		<div class="w-full lg:w-4/12 px-4">
			<div
				class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-800 text-white border-0"
			>
				<div class="rounded-t mb-0 px-6 py-6">
					<div class="text-center mb-3">
						<h6 class="text-blueGray-200 text-sm font-bold">Sign In</h6>
					</div>
					<hr class="mt-6 border-b-1 border-blueGray-300" />
				</div>
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<form>
						<div class="relative w-full mb-3">
							<label class="block uppercase text-white  text-xs font-bold mb-2" for="grid-email">
								Email
							</label>
							<input
								bind:value={email}
								id="grid-email"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-700 text-white  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Email"
							/>
						</div>

						<div class="relative w-full mb-3">
							<label class="block uppercase text-white  text-xs font-bold mb-2" for="grid-password">
								Password
							</label>
							<input
								id="grid-password"
								type="password"
								class="border-0 px-3 py-3 placeholder-blueGray-700 text-white  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Password"
							/>
						</div>
						<div>
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
								class="mt-4 bg-white text-black active:bg-blueGray-600 active:text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
								type="button"
								on:click={loginUser}
							>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="flex flex-wrap mt-6 relative">
				<div class="w-1/2">
					<a href="#pablo" on:click={(e) => e.preventDefault()} class="text-blueGray-200">
						<small>Forgot password?</small>
					</a>
				</div>
				<div class="w-1/2 text-right">
					<a href="/auth/register" class="text-blueGray-200">
						<small>Create new account</small>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
