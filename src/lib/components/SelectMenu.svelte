<script lang="ts">
	import type { Option, OptionGroup } from '$lib/store/Types';
	import { tick } from 'svelte';

	export let options: Option[];
	export let option: Option[];

	export let label: string = '';
	export let groups: OptionGroup[] = [];
	export let multiple: boolean = false;
	export let filter: boolean = false;

	let showDatalist: boolean = false;
	let datainput: HTMLInputElement;

	const showList = async (event) => {
		event.preventDefault();
		showDatalist = !showDatalist;

		await tick();
		datainput.focus();
	};

	const change = (event) => console.log(event);
</script>

<div class="select-menu">
	<div class="select-idle" on:click={showList}>
		<small>{label}</small>
		{#if multiple}
			<span>{option?.map((opt) => opt.label).join(',')}</span>
		{:else}
			<span>{option[0].label}</span>
		{/if}
	</div>
	<div class="select-data" class:shown={showDatalist}>
		<input type="text" list="data" bind:this={datainput} />
		<datalist id="data" on:click={change} on:change={change} on:mousedown={change}>
			{#each options as opt}
				<option value={opt.label}>{opt.label}</option>
			{/each}
		</datalist>
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
		align-items: center;
		border-radius: var(--radius-squircle);
		border: 2px solid var(--secondary);
		min-width: 10rem;
		padding: 0 0.5rem;
		height: 2rem;
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
		right: 0.5rem;
		top: 1px;
	}

	.select-data {
		display: none;
	}

	.select-data.shown {
		display: flex;
		position: relative;
		border-radius: var(--radius-squircle);
		border: 2px solid var(--secondary);
		padding: 1rem 0.5rem 0.5rem;
		transform: translateY(-1rem);
		z-index: 0;
	}

	.select-data > input {
		border: none;
		border-bottom: 1px solid var(--secondary);
		height: 1.5rem;
	}

	datalist {
		background-color: aqua;
	}
</style>
