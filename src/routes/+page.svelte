<script>
	import Layout from '../lib/components/Layout.svelte';

	const menu = [
		{
			name: 'Review Text',
			path: '/review-text'
		},
		{
			name: 'Review Gambar',
			path: '/image/img-480p'
		},
		{
			name: 'Review Video',
			path: '/video/vid-480p'
		},
		{
			name: 'Review Kombinasi',
			path: '/review-combination/image/480p'
		}
	];
</script>

<Layout type="Header">
	<div class="w-full bg-slate-50 rounded-3xl flex justify-center items-center mt-16 py-10">
		<div
			class="w-3/4 md:w-1/2 mx-auto uppercase text-center text-xl md:text-3xl font-bold text-black"
		>
			Pengujian performa SvelteKit <br /><span class="italic">server side rendering</span>
		</div>
	</div>
	<section id="menu" class="my-10">
		<div class="grid grid-cols-2 gap-5">
			{#each menu as item, i}
				<a href={item.path} key={i}>
					<div
						class="py-20 bg-slate-200 border border-slate-50 rounded-lg flex justify-center items-center"
					>
						<h1 class="font-bold text-black">{item.name}</h1>
					</div>
				</a>
			{/each}
		</div>
	</section>
</Layout>
