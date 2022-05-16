<script lang="ts">
	import type { TypographyType } from '$lib/store/Types';

	import Paragraph from './Typography/paragraph/index.svelte';
	import Subtitle from './Typography/subtitle/index.svelte';
	import Title from './Typography/title/index.svelte';
	import Heading from './Typography/heading/index.svelte';
	import Subheading from './Typography/subheading/index.svelte';

	export let type: TypographyType = 'paragraph';

	const mapTypeToComponent = {
		title: Title,
		subtitle: Subtitle,
		heading: Heading,
		subheading: Subheading,
		paragraph: Paragraph
	};
</script>

<svelte:component this={mapTypeToComponent[type]}><slot /></svelte:component>
