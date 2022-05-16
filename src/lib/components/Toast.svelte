<script lang="ts">
	import type { Scheme } from '$lib/store/Types';
	import Button from './Button.svelte';

	export let mode: 'relative' | 'absolute' = 'relative';
	export let scheme: Scheme = 'primary';
</script>

<div class="ktoast ktoast-{mode} ktoast-{scheme}">
	<header class="header">
		<b>🔔 NOTIFICATION</b>
		<div class="action">
			<Button shape={'circle'}>❌</Button>
		</div>
	</header>
	<span class="content"><slot /></span>
</div>

<style>
	.ktoast {
		margin: 0.5rem;
		padding: 0.75rem;
		height: 3.5rem;
		min-width: 15rem;
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		border: 0.25rem solid transparent;
		border-radius: var(--radius-squircle);
	}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.action {
		display: flex;
		justify-content: space-between;
	}

	.content {
		text-indent: 0.25rem;
	}

	.ktoast-absolute {
		z-index: 2;
		position: fixed;
		bottom: 0.25rem;
		right: 0.25rem;
	}

	.ktoast-primary {
		border-color: var(--primary);
		background-color: hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.6);
	}

	.ktoast-secondary {
		border-color: var(--secondary);
		background-color: hsla(var(--secondary-h), var(--secondary-s), var(--secondary-l), 0.6);
	}

	.ktoast-success {
		border-color: var(--success);
		background-color: hsla(var(--success-h), var(--success-s), var(--success-l), 0.6);
	}

	.ktoast-warning {
		border-color: var(--warning);
		background-color: hsla(var(--warning-h), var(--warning-s), var(--warning-l), 0.6);
	}

	.ktoast-danger {
		border-color: var(--danger);
		background-color: hsla(var(--danger-h), var(--danger-s), var(--danger-l), 0.6);
	}

	.ktoast-info {
		border-color: var(--info);
		background-color: hsla(var(--info-h), var(--info-s), var(--info-l), 0.6);
	}
</style>
