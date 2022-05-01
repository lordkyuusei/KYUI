<script lang="ts">
	import type { Scheme, Shape } from '$lib/store/Types';
	export let scheme: Scheme = 'primary';
	export let shape: Shape = 'squircle';
	export let href: string = '#';
	export let icon: string = '';

	export let loading: boolean = null;
	export let disabled: boolean = false;
</script>

<button
	class="button-{scheme} type-{shape} {icon !== '' ? 'icon' : ''} {loading !== null
		? `is-${loading ? 'loading' : 'loaded'}`
		: ''}"
	{disabled}
	on:click
>
	{#if shape === 'link'}
		<a {href}><slot /></a>
	{:else if icon !== ''}
		<span class="has-icon">
			{icon}
		</span>
		<slot />
	{:else}
		<slot />
	{/if}
</button>

<style>
	button {
		border: 0px;

		height: 2rem;
		min-width: 6rem;

		margin: 0.25rem;
		padding: 0 0.5rem;

		transition: all 0.1s ease-in-out;
	}

	button:hover {
		cursor: pointer;
	}

	[class^='button-'] {
		border-width: 0.1rem;
		border-style: solid;
	}

	[class^='button-']:not([class^='button-primary']):not([class^='button-secondary']) {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 100%;
		grid-gap: 0.1rem;
		justify-content: center;
		align-items: center;
		line-height: 0;
	}

	[class^='button-']:not([class^='button-primary']):not([class^='button-secondary'])::before {
		text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
	}

	[class^='button-']:not(.type-link):hover {
		color: var(--text-light);
	}

	[class^='button-']:not(.type-link).is-loading::before {
		content: '🌀';
		animation: is-loading 1s linear infinite;
	}

	@keyframes is-loading {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	[class^='button-']:active {
		transform: scale(0.95);
	}

	.button-primary {
		border-color: var(--primary);
	}

	.button-primary:hover {
		border-color: hsl(
			var(--primary-h),
			var(--primary-s),
			calc(var(--primary-l) + var(--brightness))
		);
		background-color: hsl(
			var(--primary-h),
			var(--primary-s),
			calc(var(--primary-l) - var(--brightness) * 1)
		);
	}

	.button-secondary {
		border-color: var(--secondary);
	}

	.button-secondary:hover {
		border-color: hsl(
			var(--secondary-h),
			var(--secondary-s),
			calc(var(--secondary-l) + var(--brightness))
		);
		background-color: hsl(
			var(--secondary-h),
			var(--secondary-s),
			calc(var(--secondary-l) - var(--brightness) * 1)
		);
	}

	.button-success {
		border-color: var(--success);
	}

	.button-success:hover {
		border-color: hsl(
			var(--success-h),
			var(--success-s),
			calc(var(--success-l) + var(--brightness))
		);
		background-color: hsl(
			var(--success-h),
			var(--success-s),
			calc(var(--success-l) - var(--brightness) * 0.5)
		);
	}

	.button-success::before {
		content: '✅';
	}

	.button-danger {
		border-color: var(--danger);
	}

	.button-danger:hover {
		border-color: hsl(var(--danger-h), var(--danger-s), calc(var(--danger-l) + var(--brightness)));
		background-color: hsl(
			var(--danger-h),
			var(--danger-s),
			calc(var(--danger-l) - var(--brightness) * 1)
		);
	}

	.button-danger::before {
		content: '⛔';
	}

	.button-warning {
		border-color: var(--warning);
	}

	.button-warning:hover {
		border-color: hsl(
			var(--warning-h),
			var(--warning-s),
			calc(var(--warning-l) + var(--brightness))
		);
		background-color: hsl(
			var(--warning-h),
			var(--warning-s),
			calc(var(--warning-l) - var(--brightness) * 1)
		);
	}

	.button-warning::before {
		content: '⚠️';
	}

	.button-info {
		border-color: var(--info);
	}

	.button-info:hover {
		border-color: hsl(var(--info-h), var(--info-s), calc(var(--info-l) + var(--brightness)));
		background-color: hsl(
			var(--info-h),
			var(--info-s),
			calc(var(--info-l) - var(--brightness) * 1)
		);
	}

	.button-info::before {
		content: 'ℹ️';
	}

	.type-circle {
		border-radius: var(--radius-circle);
		min-width: 2rem;
		padding: 0;
	}

	.type-link {
		border: none;
		text-underline-offset: 0.2rem;
	}

	.type-squircle {
		border-radius: var(--radius-squircle);
	}

	.type-ellipse {
		border-radius: var(--radius-circle);
	}

	.type-rectangle {
		border-radius: var(--radius-rectangle);
	}
</style>
