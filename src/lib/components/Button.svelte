<script lang="ts">
	import type { Scheme } from '$lib/store/Types';
	export let type: string = 'normal';
	export let scheme: Scheme = 'primary';
	export let href: string = '#';
</script>

<button class="button-{scheme} type-{type}">
	{#if type === 'link'}
		<a {href}><slot /></a>
	{:else}
		<slot />
	{/if}
</button>

<style>
	button {
		box-sizing: content-box;
		font-family: 'Segoe UI', 'Cascadia Code', 'Helvetica', 'Arial', sans-serif;
		font-size: 1rem;
		border-radius: 10px;
		border: 3px solid rgba(255, 255, 255, 0.3);
		min-width: 8rem;
		width: fit-content;
		-moz-width: fit-content;
		padding: 0.5rem;
		margin: 0.25rem;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		letter-spacing: 1px;
		box-shadow: #000 0px 0px 1px;
		-webkit-font-smoothing: antialiased;
	}

	button:hover {
		cursor: pointer;
		filter: brightness(0.8);
	}

	[class^='button-']:not([class*='primary']):not([class*='secondary']) {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: flex-end;
	}

	[class^='button-']::before {
		/* apply text shadow border*/
		text-shadow: #000 0px 0px 1px;
		-webkit-font-smoothing: antialiased;
	}

	.button-primary {
		background-color: var(--primary);
	}

	.button-secondary {
		background-color: var(--secondary);
	}

	.button-success {
		background-color: var(--success);
	}

	.button-success::before {
		content: '✅';
	}

	.button-danger {
		background-color: var(--danger);
	}
	.button-danger::before {
		content: '❌';
	}

	.button-warning {
		background-color: var(--warning);
	}
	.button-warning::before {
		content: '⚠️';
	}

	.button-info {
		background-color: var(--info);
	}
	.button-info::before {
		content: 'ℹ️';
	}

	.type-round {
		min-width: unset;
		border-radius: 50px;
		height: 2.5rem;
		width: 2.5rem;
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
		background-color: unset;
		text-decoration: solid underline;
	}
</style>
