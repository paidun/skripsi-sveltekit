<script>
	export let type;
	export let resolution;
</script>

{#if type === 'Gambar'}
	<section id="Review Gambar" class="mt-16">
		<div class="container">
			<h1 class="text-3xl font-semibold text-dark">GAMBAR</h1>
			<p class="text-lg text-dark">Resolusi: {resolution}</p>
			<slot />
		</div>
	</section>
{:else if type === 'Text'}
	<section id="Review Text" class="mt-16">
		<div class="container">
			<h1 class="text-3xl font-semibold text-dark">Review Text</h1>
			<slot />
		</div>
	</section>
{:else if type === 'Kombinasi Gambar'}
	<section id="Review Kombinasi Gambar" class="mt-16">
		<div class="container">
			<h1 class="text-3xl font-semibold text-dark">Kombinasi Gambar</h1>
			<p class="text-lg text-dark">Resolusi: {resolution}</p>
			<slot />
		</div>
	</section>
{:else if type === 'Kombinasi Video'}
	<section id="Review Kombinasi Video" class="mt-16">
		<div class="container">
			<h1 class="text-3xl font-semibold text-dark">Kombinasi Video</h1>
			<p class="text-lg text-dark">Resolusi: {resolution}</p>
			<slot />
		</div>
	</section>
{:else}
	<section id="Review Video" class="mt-16">
		<div class="container">
			<h1 class="text-3xl font-semibold text-dark">VIDEO</h1>
			<p class="text-lg text-dark">Resolusi: {resolution}</p>
			<slot />
		</div>
	</section>
{/if}
