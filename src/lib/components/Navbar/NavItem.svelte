<script>
	// Props
	// Props
	export let linkData;
	const { icon, title, link, count } = linkData;
</script>

<li>
	<a href={link} on:click>
		<div class="nav-item">
			<i class="fas fa-{icon}" />
			<span class="label">{title}</span>
		</div>
	</a>
</li>
