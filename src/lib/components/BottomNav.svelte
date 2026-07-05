<script lang="ts">
	import List from '@lucide/svelte/icons/list';
	import Search from '@lucide/svelte/icons/search';
	import User from '@lucide/svelte/icons/user';
	import X from '@lucide/svelte/icons/x';
	import { cn } from '$lib/utils';
	import type { Component } from 'svelte';
	import { tick } from 'svelte';

	type NavItem = {
		id: string;
		label: string;
		icon?: Component<{ class?: string }>;
	};

	const navItems: NavItem[] = [
		{ id: 'nav-1', label: 'Account', icon: User },
		{ id: 'nav-2', label: 'List', icon: List },
		{ id: 'nav-3', label: 'Navigation item 3' }
	];

	const navButtonClass = cn(
		'inline-flex size-12 shrink-0 items-center justify-center rounded-full border bg-muted/60',
		'transition-colors hover:bg-muted',
		'focus-visible:ring-ring focus-visible:ring-3 focus-visible:outline-none'
	);

	let searchOpen = $state(false);
	let searchQuery = $state('');
	let searchInput = $state<HTMLInputElement | null>(null);

	async function openSearch() {
		searchOpen = true;
		await tick();
		searchInput?.focus();
	}

	function closeSearch() {
		searchOpen = false;
		searchQuery = '';
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && searchOpen) {
			closeSearch();
		}
	}}
/>

<nav
	class="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-6 pb-6"
	aria-label="Main navigation"
>
	<div
		class="bg-card/90 pointer-events-auto w-[17.5rem] rounded-full border px-5 py-3 shadow-lg backdrop-blur-sm"
	>
		{#if searchOpen}
			<div class="flex h-12 items-center gap-3">
				<input
					bind:this={searchInput}
					bind:value={searchQuery}
					type="search"
					name="search"
					placeholder="Search..."
					class={cn(
						'h-full min-w-0 flex-1 border-0 bg-transparent text-sm shadow-none ring-0 outline-none',
						'placeholder:text-muted-foreground',
						'focus:border-0 focus:ring-0 focus:outline-none focus-visible:ring-0',
						'[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden'
					)}
					aria-label="Search"
				/>

				<button
					type="button"
					class={navButtonClass}
					aria-label="Close search"
					onclick={closeSearch}
				>
					<X class="size-5" />
				</button>
			</div>
		{:else}
			<div class="flex items-center gap-4">
				{#each navItems as item (item.id)}
					{@const Icon = item.icon}
					<button type="button" class={navButtonClass} aria-label={item.label}>
						{#if Icon}
							<Icon class="text-muted-foreground size-5" />
						{/if}
					</button>
				{/each}

				<button type="button" class={navButtonClass} aria-label="Open search" onclick={openSearch}>
					<Search class="text-muted-foreground size-5" />
				</button>
			</div>
		{/if}
	</div>
</nav>
