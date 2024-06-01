<script>
	import CardVideo from '../../../../lib/components/CardVideo.svelte';
	import Layout from '../../../../lib/components/Layout.svelte';
	import LayoutMedia from '../../../../lib/components/LayoutMedia.svelte';
	import getSettingMediaResolution from '../../../../lib/utils/mediaUtils';
	export let data;
	const reviews = data.data.data;
	const slug = data.slug;
	const mediaInfo = getSettingMediaResolution('vid-' + slug);
	const posterVideo = `poster-${mediaInfo.resolution}.png`;
</script>

<svelte:head>
	<title>TESTING | Kombinasi Video</title>
</svelte:head>
<Layout type={'Combination'}>
	<LayoutMedia type="Kombinasi Video" resolution={mediaInfo.resolution}>
		<div class="my-6">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each reviews as item, i}
					<CardVideo
						widthVideo={mediaInfo.widthMedia}
						heightVideo={mediaInfo.heightMedia}
						source={item.path_video}
						name={item.name}
						area={item.area}
						rating={item.rating}
						reviewDate={item.review_date}
						reviewText={item.review_text}
						{posterVideo}
						key={i}
					/>
				{/each}
			</div>
		</div>
	</LayoutMedia>
</Layout>
