<script>
	// Props
	export let icon;
	export let title;
	export let link = '';
</script>

<li>
	<a href={link} on:click>
		<div class="nav-item">
			<i class="fas fa-{icon}" />
			<span class="label">{title}</span>
		</div>
	</a>
</li>
