<script lang="ts">
	import type { Scheme } from '$lib/store/Types';
	export let type: string = 'normal';
	export let scheme: Scheme = 'primary';
	export let href: string = '#';
	export let disabled: boolean = false;
	export let icon: string = '';
</script>

<button class="button-{scheme} type-{type} {icon !== '' ? 'icon' : ''}" {disabled}>
	{#if type === 'link'}
		<a {href}><slot /></a>
	{:else}
		{#if icon !== ''}
			<span class="has-icon">
				{icon}
			</span>
		{/if}
		<slot />
	{/if}
</button>

<style>
	button {
		box-sizing: content-box;
		font-family: 'Segoe UI', 'Cascadia Code', 'Helvetica', 'Arial', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 10px;
		border: 3px solid rgba(255, 255, 255, 0.3);
		min-width: 8rem;
		width: fit-content;
		-moz-width: fit-content;
		padding: 0.5rem;
		margin: 0.25rem;
		text-transform: uppercase;
		transition: all 0.1s ease-in-out;
		letter-spacing: 1px;
		box-shadow: #000 0px 0px 1px;
		-webkit-font-smoothing: antialiased;
	}

	button:hover {
		cursor: pointer;
		filter: brightness(110%);
	}

	button:active {
		cursor: pointer;
		filter: brightness(80%);
	}

	[class*=' icon'],
	[class^='button-']:not([class*='primary']):not([class*='secondary']) {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 100%;
		align-items: flex-end;
	}

	.has-icon {
		grid-column: 1;
	}

	[class^='button-']::before {
		text-shadow: 0 0 1px #000, 0 0 0 #000, 0 0 0 #000, 0 0 0 #000, 0 0 0 #000;
		-webkit-font-smoothing: antialiased;
	}

	.button-primary {
		color: var(--text-light);
		background-color: var(--primary);
	}

	.button-secondary {
		color: var(--text-light);
		background-color: var(--secondary);
	}

	.button-success {
		color: var(--text-light);
		background-color: var(--success);
	}

	.button-success::before {
		content: '✅';
	}

	.button-danger {
		color: var(--text-light);
		background-color: var(--danger);
	}
	.button-danger::before {
		content: '❌';
	}

	.button-warning {
		color: var(--text-dark);
		background-color: var(--warning);
	}
	.button-warning::before {
		content: '⚠️';
	}

	.button-info {
		color: var(--text-dark);
		background-color: var(--info);
	}
	.button-info::before {
		content: 'ℹ️';
	}

	.type-round {
		min-width: unset;
		border-radius: 50px;
		height: 1.5rem;
		width: 1.5rem;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;

		letter-spacing: unset;
	}

	.type-round::first-letter {
		font-size: medium;
	}

	.type-link {
		border: none;
		box-shadow: none;
		background-color: unset;
		min-width: unset;
		text-decoration: solid underline;
	}
</style>
