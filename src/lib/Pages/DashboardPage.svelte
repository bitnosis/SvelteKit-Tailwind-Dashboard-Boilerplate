<!-- Browser Render -->
<script>
	// Stores
	import { user } from '$lib/store/userStore';
	import { toggleComponent } from '$lib/store/appLayout';
</script>

<div class="w-full p-10">
	<h1 class="text-center text-4xl mt-20 mb-20 text-gray-400 dark:text-white">
		Dashboard Page Here
	</h1>

	<p>
		User Info :
		{JSON.stringify($user)}
	</p>

	<div class="w-full flex cols justify-between gap-4 mt-10">
		<div>
			<button
				on:click={() => toggleComponent('header')}
				class="rounded-md mb-2 bg-gray-200 p-4 py-1 "
				>Header Toggle
			</button> <br />
			<button
				on:click={() => toggleComponent('headerHeight')}
				class="rounded-md bg-gray-200 p-4 py-1 ">Header Height</button
			>
		</div>

		<div>
			<button
				on:click={() => toggleComponent('sidebar')}
				class="rounded-md bg-gray-200 mb-2 p-4 py-1 "
				>Sidebar Toggle
			</button> <br />
			<button
				on:click={() => toggleComponent('sidebarCollapse')}
				class="rounded-md bg-gray-200 p-4 py-1 "
				>Sidebar Collapse
			</button>
		</div>

		<div>
			<button
				on:click={() => toggleComponent('darkModeSwitch')}
				class="rounded-md bg-gray-200 p-4 py-1 ">Show Dark Mode Switch</button
			>
		</div>
	</div>
</div>
