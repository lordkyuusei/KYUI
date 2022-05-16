<script context="module">
	export const load = () => {
		const modules = import.meta.glob('./components/*/index.svelte');
		const components = Object.keys(modules).map((module) => {
			const [, , name] = module.split('/');

			return name;
		});

		return {
			props: {
				components
			}
		};
	};
</script>

<script lang="ts">
	import Typography from '$lib/components/Typography.svelte';

	export let components: string[];
</script>

<section class="layout">
	<header class="header">
		<a href="/"><Typography type="title">KYUI</Typography></a>
		<nav />
		<input type="search" />
	</header>
	<nav class="sidebar">
		<details>
			<summary style="cursor: pointer"><Typography type="heading">Components</Typography></summary>
			<ul>
				{#each components as component}
					<li><a href={`/components/${component}`}>{component}</a></li>
				{/each}
			</ul>
		</details>
	</nav>
	<main class="main">
		<slot />
	</main>
	<footer class="footer">Copyright: 2022 @Kyuu</footer>
</section>

<style>
	.layout {
		display: grid;
		grid:
			'header header' 8vh
			'sidebar main' 87vh
			'sidebar footer' 5vh / 15vw;
	}

	.header {
		display: grid;
		grid: 'logo menu menu menu search' 100% / 15rem;
		grid-area: header;
		background: var(--text-light);
		border-bottom-right-radius: 1.5em;
	}

	.header * {
		grid-area: logo;
		font-size: 1.5em;
		font-weight: bold;
		color: var(--secondary);
		text-align: center;
	}

	.header nav {
		grid-area: menu;
		display: flex;
		justify-content: space-around;
	}

	.header input {
		grid-area: search;
		border: none;
		border-bottom: 1px solid var(--secondary);
		padding: 0.5em;
		font-size: 1em;
		color: var(--secondary);
		background: var(--text-light);
	}

	.sidebar {
		grid-area: sidebar;
		background: var(--text-light);
	}

	.sidebar ul {
		list-style: kyuu-counter;
	}

	.sidebar ul li {
		text-transform: capitalize;
	}
	.sidebar ul li:hover {
		background-color: #f5f5f5;
	}

	.main {
		grid-area: main;
	}

	.footer {
		grid-area: footer;
		background: var(--text-light);
	}

	@counter-style kyuu-counter {
		system: cyclic;
		symbols: '🔲' '🔳' '🔴' '🔵' '🔶' '🔷' '🔸' '🔹' '🔺' '🔻' '🔼' '🔽' '🔾' '🔿';
		suffix: ' ';
	}
</style>
