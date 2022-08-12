<!-- Browser Render -->
<script>
	// Stores
	import { user } from '$lib/store/userStore';
	// Props
	export let number;
</script>

<div class="p-20 text-gray-400 dark:text-white">
	<h1 class="text-center text-4xl ">Page {number} here</h1>
	<p class="ml-20 mt-20">
		User Data : <br />
		{JSON.stringify($user)}
	</p>
</div>
