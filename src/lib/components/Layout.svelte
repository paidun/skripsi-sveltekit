<script>
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import NavbarCombination from './NavbarCombination.svelte';
	export let type;
</script>

<div>
	{#if type == 'Navbar'}
		<Navbar />
	{:else if type == 'Combination'}
		<NavbarCombination />
	{:else}
		<Header />
	{/if}
	<main>
		<div class="container">
			<slot />
		</div>
	</main>
</div>
