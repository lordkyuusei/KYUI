<h1 class="title">
	<slot />
</h1>

<style>
	.title {
		font-size: 2.4rem;
		font-weight: bold;
		margin: 0.24em 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--primary);
		text-shadow: 0 0 0.05em var(--primary);
	}

	.title:hover {
		text-decoration: underline;
		cursor: pointer;
		text-indent: 1rem;
		transition: text-indent 0.3s ease-in-out;
	}

	.title:hover::before {
		content: '#';
	}
</style>
