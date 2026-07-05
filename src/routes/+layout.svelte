<script lang="ts">
	import BottomNav from '$lib/components/BottomNav.svelte';
	import './layout.css';

	const { children } = $props();
</script>

<div class="min-h-screen pb-28">
	{@render children()}
</div>

<BottomNav />
