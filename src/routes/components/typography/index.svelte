<script lang="ts">
	import Typography from '$lib/components/Typography.svelte';

	import type { TypographyType } from '$lib/store/Types';

	const typographyTypes: Map<TypographyType, string> = new Map([
		['title', 'Main title - Sections'],
		['subtitle', 'Subtitle - Slice sections'],
		['heading', 'Heading - Head of section'],
		['subheading', 'Subheading - Blocks of paragraph'],
		['paragraph', 'Paragraph - Text of section or block']
	]);
</script>

<h1>Typography</h1>
<div class="components-buttons">
	{#each [...typographyTypes] as [type, name]}
		<Typography {type}>{name}</Typography>
	{/each}
</div>

<style>
	[class^='components-'] {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		margin: 1rem 0;
	}
</style>
