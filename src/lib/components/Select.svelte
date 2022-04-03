<script lang="ts">
	import type { Option } from '$lib/store/Types';

	export let name: string = 'select';

	export let options: Option[];
	export let option: Option | Option[];
	export let multiple: boolean = false;
</script>

<label class:label-multiple={multiple} class:label-single={!multiple} for={name}>
	{#if multiple}
		<select
			{name}
			title={name}
			class="select-multiple"
			multiple
			bind:value={option}
			size={Math.min(options.length, 5)}
		>
			{#each options as opt}
				<option value={opt}>{opt.label}</option>
			{/each}
		</select>
	{:else}
		<select {name} title={name} class="select-single" bind:value={option}>
			{#each options as opt}
				<option value={opt}>{opt.label}</option>
			{/each}
		</select>
	{/if}
</label>

<style>
	label {
		position: relative;
	}

	label.label-single::after {
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

	select {
		overflow: auto;
		appearance: none;
		border-radius: var(--radius-squircle);

		border: 2px solid var(--secondary);
		min-width: 10rem;
	}

	select:focus {
		outline: none;
	}

	select.select-single {
		padding: 0 0.5rem;
	}
	select.select-single,
	select.select-multiple > option {
		height: 2rem;
	}

	.select-multiple > option {
		display: grid;
		grid-template-columns: 1fr 3fr;
		padding: 0 0.5rem;
		grid-template-rows: 100%;
		align-items: center;
	}

	.select-multiple > option::before {
		content: '🔲';
		color: var(--primary);
	}

	.select-multiple > option:checked::before {
		content: '☑️';
	}

	.select-multiple > option:checked {
		background-color: transparent;
	}

	.select-multiple > option:hover {
		color: var(--text-light);
		background-color: var(--secondary);
	}

	select > * {
		cursor: pointer;
	}
</style>
