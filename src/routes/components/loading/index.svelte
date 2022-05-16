<script lang="ts">
	import type { Shade } from '$lib/store/Types';
	import Loading from '$lib/components/Loading.svelte';

	const loadingTypes: Map<Shade, string> = new Map<Shade, string>([
		['bar', 'Barre'],
		['dot', 'Point'],
		['round', 'Rond'],
		['squid', 'Etalé'],
		['circle', 'Cercles'],
		['spread', 'Eparpillé']
	]);
</script>

<div class="show-components">
	<div class="components-loading">
		<h1>Loading</h1>
		<div class="loadings">
			{#each [...loadingTypes] as shade}
				<div class="loading">
					<h3>{shade[1]}</h3>
					<Loading shade={shade[0]} />
				</div>
			{/each}
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

	.components-loading {
		width: 100%;
	}

	.loadings {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
