<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import Select from '$lib/components/Select.svelte';
	import type { Scheme, Shape, Option } from '$lib/store/Types';
	import SelectMenu from '$lib/components/SelectMenu.svelte';

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

	const defaultOptions = ['Pistache', 'Noix de pécan', 'Citron vert', 'Oréo', 'Crème brulée'];
	const options: Option[] = defaultOptions.map((label, index) => ({
		label,
		value: label.toLocaleLowerCase().replace(' ', '_')
	}));

	let value: Option = options[0];
	let values: Option[] = [];
	let menuValues: Option[] = [];

	let checked: boolean = false;
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
	<div class="components-switch">
		<h1>Switches</h1>
		<div class="switches">
			<Switch scheme={'primary'} style={'inward'} bind:checked>Toggle Inward: {checked}</Switch>
			<Switch scheme={'secondary'} style={'outward'}>Toggle Outward</Switch>
			<Switch scheme={'primary'} direction={'vertical'}>Toggle Vertical</Switch>
		</div>
	</div>
	<div class="components-select">
		<h1>Selectes</h1>
		<div class="selectes">
			<div>
				<h3>Single</h3>
				<Select name="single-select" {options} bind:option={value} /><br />
				Sélectionné: {value.label}
			</div>
			<div>
				<h3>Multiple</h3>
				<Select name="multiple-select" {options} bind:option={values} multiple /><br />
				{#if values.length === 0}
					Rien de sélectionné.
				{:else}
					Sélectionnés:
					<ul>
						{#each values as val}
							<li>{val.label}</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div>
				<h3>Modern</h3>
				<SelectMenu {options} bind:option={menuValues} multiple />
			</div>
		</div>
	</div>
</div>

<style>
	.show-components {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	[class^='components-'] {
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
