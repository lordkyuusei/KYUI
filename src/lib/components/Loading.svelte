<script lang="ts">
	export let fullscreen = false;
	export let shade = 'bar';
</script>

<div class="loading {shade}">
	<div class="loading-{shade}" />
	<div class="loading-{shade}" />
	<div class="loading-{shade}" />
	<div class="loading-{shade}" />
</div>

<style>
	* {
	}
	.loading {
		width: 4rem;
		height: 4rem;
	}

	.dot,
	.bar,
	.squid {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.round,
	.circle {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 100%;
		align-items: center;
		justify-items: center;
	}

	[class^='loading-']:not(.loading-circle) {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 5rem;
		background-color: var(--primary);
	}

	.loading-bar {
		animation: loading-bar 1s ease-in-out infinite;
	}

	.loading-dot {
		animation: loading-dot 1s ease-in-out infinite;
	}

	.loading-squid {
		animation: loading-squid 1s ease-in-out infinite;
	}

	.loading-circle {
		grid-column: 1 / 4;
		grid-row: 1;
		background-color: transparent;
		position: relative;
		border: 0.5rem solid transparent;
		border-top: 0.5rem solid var(--primary);
		border-top-left-radius: 3rem;
		border-top-right-radius: 3rem;
		animation: loading-circle 1s ease-in-out infinite;
	}

	.loading-circle::before {
		content: '';
		background-color: var(--primary);
		position: absolute;
		border-radius: 5rem;
		width: 0.5rem;
		height: 0.5rem;
	}

	.loading-circle::after {
		content: '';
		background-color: var(--primary);
		position: absolute;
		border-radius: 5rem;
		width: 0.5rem;
		height: 0.5rem;
	}

	.loading-round {
		grid-column: 2;
		grid-row: 1;
		animation: loading-round 1.5s ease-in-out infinite;
		transform-origin: 0 2rem;
	}

	[class^='loading-']:nth-child(2) {
		animation-delay: 0.2s;
	}

	[class^='loading-']:nth-child(3) {
		animation-delay: 0.4s;
	}

	[class^='loading-']:nth-child(4) {
		animation-delay: 0.6s;
	}

	.loading-circle:nth-child(1) {
		height: 1rem;
		width: 1rem;
		z-index: 4;
		background-color: var(--primary);
		border: 0.5rem solid white;
		border-radius: 1rem;
		animation-duration: 0.8s;
	}

	.loading-circle:nth-child(1)::before,
	.loading-circle:nth-child(1)::after {
		top: 20%;
		right: 20%;
		background-color: white;
	}

	.loading-circle:nth-child(2) {
		height: 2rem;
		width: 2rem;
		z-index: 3;
		animation-duration: 0.9s;
	}

	.loading-circle:nth-child(2)::before,
	.loading-circle:nth-child(2)::after {
		top: -2px;
	}

	.loading-circle:nth-child(2)::before {
		left: -2px;
	}

	.loading-circle:nth-child(2)::after {
		right: -2px;
	}

	.loading-circle:nth-child(3) {
		height: 3rem;
		width: 3rem;
		z-index: 2;
		animation-duration: 1s;
	}

	.loading-circle:nth-child(3)::before,
	.loading-circle:nth-child(3)::after {
		top: 0;
	}
	.loading-circle:nth-child(3)::before {
		left: 0;
	}

	.loading-circle:nth-child(3)::after {
		right: 0;
	}

	.loading-circle:nth-child(4) {
		height: 4rem;
		width: 4rem;
		animation-duration: 1.1s;
	}

	.loading-circle:nth-child(4)::before,
	.loading-circle:nth-child(4)::after {
		top: 3px;
	}
	.loading-circle:nth-child(4)::before {
		left: 2px;
	}

	.loading-circle:nth-child(4)::after {
		right: 2px;
	}

	@keyframes loading-dot {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(1rem);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes loading-bar {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(2);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes loading-round {
		0% {
			transform: translateY(-1.2rem) rotate(0deg);
		}
		100% {
			transform: translateY(-1.2rem) rotate(360deg);
		}
	}

	@keyframes loading-circle {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes loading-squid {
		0% {
			height: 0.5rem;
		}
		50% {
			height: 2.5rem;
			border-radius: 5px;
		}
		100% {
			height: 0.5rem;
		}
	}
</style>
