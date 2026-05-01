<svelte:head>
	<title>HolySheet</title>
	<meta
		name="description"
		content="A clean starting point for HolySheet while the bigger features are still taking shape."
	/>
</svelte:head>

<script lang="ts">
	const upcomingFeatures = [
		'Users and authentication',
		'Profiles',
		'File sharing',
		'AI API integration'
	];
</script>

<div class="shell">
	<section class="hero">
		<p class="eyebrow">HolySheet</p>
		<h1>Basic now. Ready for the real app later.</h1>
		<p class="intro">
			This starter keeps things intentionally simple so we can layer in product decisions when
			you are ready.
		</p>
	</section>

	<section class="panel">
		<h2>Planned foundation</h2>
		<ul>
			{#each upcomingFeatures as feature}
				<li>{feature}</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			'Helvetica Neue',
			Helvetica,
			Arial,
			sans-serif;
		background:
			radial-gradient(circle at top, #f8efe2 0%, #f6f2ea 35%, #efe9df 100%);
		color: #1f2933;
	}

	.shell {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: 2rem;
		gap: 1.5rem;
	}

	.hero,
	.panel {
		width: min(42rem, 100%);
		background: rgba(255, 255, 255, 0.7);
		border: 1px solid rgba(31, 41, 51, 0.08);
		border-radius: 1.5rem;
		padding: 2rem;
		box-shadow: 0 18px 50px rgba(31, 41, 51, 0.08);
		backdrop-filter: blur(10px);
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.8rem;
		color: #8a5a44;
	}

	h1,
	h2 {
		margin: 0;
	}

	h1 {
		font-size: clamp(2.5rem, 8vw, 4.75rem);
		line-height: 0.95;
		max-width: 10ch;
	}

	.intro {
		margin: 1rem 0 0;
		max-width: 42ch;
		font-size: 1.05rem;
		line-height: 1.6;
		color: #52606d;
	}

	.panel h2 {
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	ul {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.75rem;
		color: #334e68;
	}

	li::marker {
		color: #c26d3a;
	}

	@media (max-width: 640px) {
		.hero,
		.panel {
			padding: 1.5rem;
			border-radius: 1.25rem;
		}
	}
</style>
