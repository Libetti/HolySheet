<svelte:head>
	<title>HolySheet</title>
	<meta
		name="description"
		content="A clean starting point for HolySheet while the bigger features are still taking shape."
	/>
</svelte:head>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	const upcomingFeatures = [
		'Users and authentication',
		'Profiles',
		'File sharing',
		'AI API integration'
	];
</script>

<div
	class="from-background via-muted/30 to-background min-h-screen bg-gradient-to-b px-6 py-12 text-foreground"
>
	<div class="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
		<section class="rounded-4xl border bg-card/80 p-8 shadow-lg backdrop-blur sm:p-10">
			<p class="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
				HolySheet
			</p>
			<h1 class="mt-4 max-w-[10ch] text-5xl leading-none font-semibold tracking-tight sm:text-7xl">
				Basic now. Ready for the real app later.
			</h1>
			<p class="text-muted-foreground mt-6 max-w-2xl text-base leading-7 sm:text-lg">
			This starter keeps things intentionally simple so we can layer in product decisions when
			you are ready.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="https://www.shadcn-svelte.com/docs">Browse shadcn-svelte</Button>
				<Button href="https://tailwindcss.com/docs" variant="outline">Tailwind docs</Button>
			</div>
		</section>

		<section class="rounded-4xl border bg-card p-8 shadow-sm sm:p-10">
			<div class="flex items-center justify-between gap-4">
				<div>
					<p class="text-sm font-medium">Planned foundation</p>
					<p class="text-muted-foreground mt-1 text-sm">Now styled with Tailwind and shadcn.</p>
				</div>
				<div class="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
					{upcomingFeatures.length} items
				</div>
			</div>

			<ul class="mt-6 grid gap-3">
				{#each upcomingFeatures as feature}
					<li class="bg-muted/50 flex items-center gap-3 rounded-2xl border px-4 py-3">
						<span class="bg-primary h-2.5 w-2.5 rounded-full"></span>
						<span class="text-sm sm:text-base">{feature}</span>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</div>
