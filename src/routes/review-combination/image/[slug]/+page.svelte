<script>
	import CardImage from '../../../../lib/components/CardImage.svelte';
	import Layout from '../../../../lib/components/Layout.svelte';
	import LayoutMedia from '../../../../lib/components/LayoutMedia.svelte';
	import getSettingMediaResolution from '../../../../lib/utils/mediaUtils';
	export let data;
	const reviews = data.data.data;
	const slug = data.slug;
	const mediaInfo = getSettingMediaResolution('img-' + slug);
</script>

<svelte:head>
	<title>TESTING | Kombinasi Gambar</title>
</svelte:head>
<Layout type={'Combination'}>
	<LayoutMedia type="Kombinasi Gambar" resolution={mediaInfo.resolution}>
		<div class="my-6">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each reviews as item, i}
					<CardImage
						widthImage={mediaInfo.widthMedia}
						heightImage={mediaInfo.heightMedia}
						srcImage={item.path_image}
						name={item.name}
						area={item.area}
						rating={item.rating}
						reviewDate={item.review_date}
						reviewText={item.review_text}
						key={i}
					/>
				{/each}
			</div>
		</div>
	</LayoutMedia>
</Layout>
