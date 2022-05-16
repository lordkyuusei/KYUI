<script lang="ts">
	import type { Scheme } from '$lib/store/Types';
	import Toast from '$lib/components/Toast.svelte';

	const toastTypes: Map<Scheme, string> = new Map<Scheme, string>([
		['primary', 'Notification envoyée 1'],
		['secondary', 'Notification envoyée 2'],
		['success', 'Le formulaire a été validé'],
		['danger', 'La ressource a été supprimée.'],
		['warning', 'La ressource a été envoyée, mais aucune nouvelle depuis.'],
		['info', 'Un nouveau contrat est disponible.']
	]);
</script>

<div class="show-components">
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
</style>
