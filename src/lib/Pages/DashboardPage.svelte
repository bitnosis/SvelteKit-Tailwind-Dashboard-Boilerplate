<!-- Browser Render -->
<script>
	// Stores
	import { user } from '$lib/store/userStore';
	import { toggleComponent } from '$lib/store/appLayout';
	import { success, warning, error } from '$lib/utils/toastTheme';
	// Components
	import SvelteLogo from '$lib/components/svgs/SvelteLogo.svelte';
</script>

<div class="w-full p-20">
	<div class="text-center" style="width:600px;margin:auto;margin-top:-80px;margin-bottom:-350px;">
		<div class="ml-20">
			<SvelteLogo />
		</div>
	</div>

	<p class="text-gray-400">
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

	<div class="w-full flex cols justify-between gap-4 mt-10">
		<div>
			<button
				on:click={() => success('This is a success toast!')}
				class="rounded-md mb-2 bg-gray-200 p-4 py-1 "
				>Success Toast
			</button> <br />
		</div>

		<div>
			<button
				on:click={() => warning('This is a warning Toast!')}
				class="rounded-md bg-gray-200 mb-2 p-4 py-1 "
				>Warning Toast
			</button> <br />
		</div>

		<div>
			<button
				on:click={() => error('This is an error toast!')}
				class="rounded-md bg-gray-200 p-4 py-1 ">Error Toast</button
			>
		</div>

		<p class="text-gray-400">Styling for the toasts can be styled in $lib/utils/toastTheme.js</p>
	</div>
</div>
