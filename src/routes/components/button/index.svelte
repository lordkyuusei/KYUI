<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Scheme, Shape } from '$lib/store/Types';

	const buttonSchemes: Map<Scheme, string> = new Map<Scheme, string>([
		['primary', 'Envoyer'],
		['secondary', 'Envoyer'],
		['success', 'Valider'],
		['danger', 'Supprimer'],
		['warning', 'Envoyer (pas sûr)'],
		['info', "Plus d'infos"]
	]);

	const buttonTypes: Map<Shape, string> = new Map<Shape, string>([
		['link', 'Lien'],
		['squircle', 'Arrondi'],
		['circle', '🔵'],
		['rectangle', 'Rectangle'],
		['ellipse', 'Elipse']
	]);

	let loading: boolean = false;

	const click = () => setTimeout(() => (loading = !loading), 500);
</script>

<div class="show-components">
	<div class="components-buttons">
		<h1>Buttons</h1>
		{#each [...buttonSchemes] as scheme, index}
			<Button
				scheme={scheme[0]}
				loading={index % 2 === 0 ? loading : null}
				on:click={index % 2 === 0 ? click : () => {}}>{scheme[1]}</Button
			>
		{/each}
		<Button scheme={'primary'} icon={'🔎'}>Rechercher</Button>
		{#each [...buttonTypes] as type}
			<Button shape={type[0]} href={'#'}>{type[1]}</Button>
		{/each}
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
</style>
