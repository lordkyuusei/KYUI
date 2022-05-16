<script lang="ts">
	import Select from '$lib/components/Select.svelte';
	import type { Option } from '$lib/store/Types';
	import SelectMenu from '$lib/components/SelectMenu.svelte';

	const defaultOptions = ['Pistache', 'Noix de pécan', 'Citron vert', 'Oréo', 'Crème brulée'];
	const options: Option[] = defaultOptions.map((label) => ({
		label,
		value: label.toLocaleLowerCase().replace(' ', '_')
	}));

	let value: Option = options[0];
	let values: Option[] = [];
	let menuValues: Option[] = [];
</script>

<div class="show-components">
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
