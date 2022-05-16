<script lang="ts">
	import Switch from '$lib/components/Switch.svelte';

	let checked: boolean = false;
</script>

<div class="show-components">
	<div class="components-switch">
		<h1>Switches</h1>
		<div class="switches">
			<Switch scheme={'primary'} style={'inward'} bind:checked>Toggle Inward: {checked}</Switch>
			<Switch scheme={'secondary'} style={'outward'}>Toggle Outward</Switch>
			<Switch scheme={'primary'} direction={'vertical'}>Toggle Vertical</Switch>
		</div>
	</div>
</div>

<style>
	.show-components {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
	}

	[class^='components-'] {
		width: auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}

	.switches {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: space-between;
		gap: 0.5rem;
	}
</style>
