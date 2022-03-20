<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Scheme } from '$lib/store/Types';

	const buttonSchemes: Scheme[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

	const buttonTypes: string[] = ['link', 'round'];
</script>

<div class="show-components">
	<h1>Buttons</h1>
	<div class="components-buttons">
		{#each buttonSchemes as scheme}
			<Button {scheme}>{scheme}</Button>
		{/each}
		{#each buttonTypes as type}
			<Button {type} href={'#'}>📧</Button>
		{/each}
		<Button scheme={'primary'} icon={'🔎'}>Rechercher</Button>
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
		width: 50%;
	}
</style>
