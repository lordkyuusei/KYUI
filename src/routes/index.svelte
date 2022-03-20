<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Scheme } from '$lib/store/Types';

	const buttonSchemes: Scheme[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

	const buttonTypes: string[] = ['link', 'round'];
</script>

<div class="show-components">
	<div class="components-buttons">
		{#each buttonSchemes as scheme}
			<Button {scheme}>{scheme}</Button>
		{/each}
		{#each buttonTypes as type}
			<Button {type} href={'#'}>📧</Button>
		{/each}
	</div>
</div>

<style>
	.components-buttons {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}
</style>
