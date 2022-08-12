<script>
	// Props
	export let buttonText = 'Sign In';
	export let formTitle = 'Sign In';
	export let handleForm;
	// Variables
	let boxColor = 'bg-gray-500 dark:bg-gray-900 text-white';
	let buttonColor = 'bg-yellow-600 text-white active:bg-gray-600 active:text-white dark:text-black';
	let email = 'analogpermutations@gmail.com';
	let password = 'testtest';
</script>

<div class="container pt-36 mx-auto h-full">
	<div class="flex content-center items-center justify-center h-full">
		<div class="w-full lg:w-1/2 p-5">
			<div
				class="relative flex flex-col min-w-0 break-words w-full mb-3 shadow-md rounded-xl border-0 {boxColor}"
			>
				<div class="rounded-t pt-6 p-3">
					<div class="text-center mb-3">
						<h6 class="text-gray-200 text-sm font-bold">{formTitle}</h6>
					</div>
					<hr class="mt-6 border-b-1 border-gray-400 dark:border-gray-600" />
				</div>
				<div class="flex-auto px-10 pt-5 pb-10">
					<form on:submit|preventDefault={() => handleForm(email, password)}>
						<div class="relative w-full mb-6">
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
						<!--
						<div class="mt-6">
							<label class="inline-flex items-center cursor-pointer">
								<input
									id="customCheckLogin"
									type="checkbox"
									class="form-checkbox border-0 rounded text-white ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>
								<span class="ml-2 text-sm font-semibold text-white "> Remember me </span>
							</label>
						</div>-->
						<div class="text-center mt-6">
							<button
								class="mt-4 {buttonColor} text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
								type="submit"
							>
								{buttonText}
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="flex flex-wrap">
				<!--
				<div class="w-1/2">
					<a href="/auth/forgotpassword" class="text-gray-600 dark:text-gray-400">
						<small>Forgot password?</small>
					</a>
				</div>-->
				<div class="w-full">
					<!-- Link to somewhere else goes here -->
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
