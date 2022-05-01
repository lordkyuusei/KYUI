<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import Select from '$lib/components/Select.svelte';
	import type { Scheme, Shape, Shade, Option } from '$lib/store/Types';
	import SelectMenu from '$lib/components/SelectMenu.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Toast from '$lib/components/Toast.svelte';

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

	const loadingTypes: Map<Shade, string> = new Map<Shade, string>([
		['bar', 'Barre'],
		['dot', 'Point'],
		['round', 'Rond'],
		['squid', 'Etalé'],
		['circle', 'Cercles'],
		['spread', 'Eparpillé']
	]);

	const toastTypes: Map<Scheme, string> = new Map<Scheme, string>([
		['primary', 'Notification envoyée 1'],
		['secondary', 'Notification envoyée 2'],
		['success', 'Le formulaire a été validé'],
		['danger', 'La ressource a été supprimée.'],
		['warning', 'La ressource a été envoyée, mais aucune nouvelle depuis.'],
		['info', 'Un nouveau contrat est disponible.']
	]);

	const defaultOptions = ['Pistache', 'Noix de pécan', 'Citron vert', 'Oréo', 'Crème brulée'];
	const options: Option[] = defaultOptions.map((label) => ({
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
	<div class="components-toast">
		<h1>Toasts</h1>
		<div class="toasts">
			{#each [...toastTypes] as toast, index}
				<Toast mode={index === 0 ? 'absolute' : 'relative'} scheme={toast[0]}>{toast[1]}</Toast>
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

	.switches {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: space-between;
		gap: 0.5rem;
	}

	.loadings {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
