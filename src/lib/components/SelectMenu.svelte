<script lang="ts">
	import type { Option, OptionGroup } from '$lib/store/Types';
	import { tick } from 'svelte';

	export let options: Option[];
	export let option: Option[];

	export let label: string = '';
	export let multiple: boolean = false;

	let searchvalue = '';
	let datainput: HTMLInputElement;
	let showDatalist: boolean = false;

	$: filter = options
		.filter((opt) => {
			const matchResearch = opt.label.toLocaleLowerCase().includes(searchvalue);
			const notSelected = !option.some((o) => o.value === opt.value);
			return matchResearch && notSelected;
		})
		.map((opt) => ({
			...opt,
			label: searchvalue ? opt.label.replace(searchvalue, `[${searchvalue}]`) : opt.label
		}));

	const showList = async (event) => {
		event.preventDefault();
		showDatalist = !showDatalist;

		await tick();
		datainput.focus();
	};

	const change = (newOption: Option) => {
		const { label, value } = newOption;
		option = option.some((opt) => opt.value === value)
			? [...option.filter((opt) => opt.value !== value)]
			: [...option, { label, value }];
	};

	const remove = (event) => {
		const { id } = event.target;
		option = [...option.filter((opt) => opt.value !== id)];
	};
</script>

<div class="select-menu">
	<div class="select-idle" on:click|self={showList}>
		<small>{label}</small>
		{#if multiple}
			{#each option as opt}
				<span class="selection" id={opt.value.toString()} on:click={remove}>{opt.label}</span>
			{/each}
		{:else}
			<span class="selection" id={option[0].value.toString()}>{option[0].label}</span>
		{/if}
	</div>
	<div class="select-data" class:shown={showDatalist}>
		<input
			role="searchbox"
			type="text"
			list="data"
			bind:this={datainput}
			bind:value={searchvalue}
		/>
		<div id="data">
			{#each filter as opt}
				<option value={opt.value} on:click={() => change(opt)}>{opt.label}</option>
			{/each}
		</div>
	</div>
</div>

<style>
	.select-menu {
		position: relative;
	}

	.select-idle {
		background-color: var(--text-light);
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		border-radius: var(--radius-squircle);
		border: 2px solid var(--secondary);
		min-width: 10rem;
		max-width: 15rem;
		min-height: 2rem;
		padding: 0 1.5rem 0 0.5rem;
		cursor: pointer;
		z-index: 1;
	}

	.select-idle::after {
		height: 100%;
		font-family: monospace;
		font-weight: bold;
		position: absolute;
		content: '<>';
		color: var(--primary);
		transform: rotate(90deg);
		pointer-events: none;
		right: 1rem;
	}

	.select-data {
		display: none;
	}

	.select-data.shown {
		display: flex;
		flex-direction: column;
		position: relative;
		border-radius: var(--radius-squircle);
		border: 2px solid var(--secondary);
		padding: 1.5rem 0.5rem 0.5rem;
		transform: translateY(-1.5rem);
		z-index: 0;
	}

	.select-data > input {
		border: none;
		border-bottom: 1px solid var(--secondary);
		height: 1.5rem;
		margin: 0.5rem 0;
	}

	.selection {
		font-size: 0.8rem;
		margin: 0.25rem;
		padding: 0.25rem;
		border-radius: var(--radius-squircle);
		border: 2px solid var(--secondary);
		background-color: var(--text-light);
		cursor: pointer;
	}

	.selection:hover {
		background-color: var(--primary);
		color: var(--text-light);
	}

	option {
		cursor: pointer;
	}

	option:hover {
		background-color: aliceblue;
	}
</style>
