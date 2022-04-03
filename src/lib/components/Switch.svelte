<script lang="ts">
	import type { Scheme, SwitchStyle, Direction } from '$lib/store/Types';

	export let checked: boolean = false;
	export let scheme: Scheme = 'primary';
	export let style: SwitchStyle = 'inward';
	export let direction: Direction = 'horizontal';
</script>

<div class="switch-component is-{checked ? 'checked' : 'unset'}">
	<div class="switch scheme-{scheme} to-{direction}" on:click={() => (checked = !checked)}>
		<span class="toggle is-{style}" />
	</div>
	<slot />
</div>

<style>
	.switch-component {
		display: flex;
		gap: 0.25rem;
		margin: 0.25rem;
	}

	.switch {
		position: relative;
		width: 2.5rem;
		height: 1rem;
		border: 1px solid var(--info);
		border-radius: 25px;
	}

	.toggle {
		top: 50%;
		left: 0;
		cursor: pointer;
		position: absolute;
		border-radius: 25px;
		box-sizing: border-box;
		transform: translateY(-50%);
		border: 1px solid var(--info);
		transition: all 0.2s ease-in-out;
	}

	.toggle.is-inward {
		width: 0.9rem;
		height: 0.9rem;
	}

	.toggle.is-inward:hover {
		width: 1rem;
		height: 1rem;
	}

	.toggle.is-outward {
		left: -4px;
		width: 1.4rem;
		height: 1.4rem;
	}

	.toggle.is-outward:hover {
		width: 1.5rem;
		height: 1.5rem;
	}

	.is-checked > .switch > .toggle {
		transform: translateX(1.5rem) translateY(-50%);
		background-color: var(--info);
	}

	.is-unset > .switch > .toggle {
		background-color: var(--primary);
	}

	.is-unset > .switch.scheme-secondary > .toggle {
		background-color: var(--secondary);
	}

	.is-checked > .switch.scheme-primary {
		background-color: var(--primary);
	}

	.is-checked > .switch.scheme-secondary {
		background-color: var(--secondary);
	}

	.is-unset > .switch {
		background-color: var(--info);
	}

	.to-vertical {
		transform: rotate(-90deg);
	}
</style>
