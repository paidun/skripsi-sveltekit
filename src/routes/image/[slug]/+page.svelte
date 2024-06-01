<script>
	import Layout from '../../../lib/components/Layout.svelte';
	import LayoutMedia from '../../../lib/components/LayoutMedia.svelte';
	import getSettingMediaResolution from '../../../lib/utils/mediaUtils';
	export let data;
	const reviews = data.data.data;
	const slug = data.slug;
	const mediaInfo = getSettingMediaResolution(slug);
</script>

<svelte:head>
	<title>TESTING | Review Gambar</title>
</svelte:head>
<Layout type="Navbar">
	<LayoutMedia type={'Gambar'} resolution={mediaInfo.resolution}>
		<div class="mt-5">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
				{#each reviews as item, i}
					<img
						src={`${import.meta.env.VITE_BASE_MEDIA_URL}/images/${item.path_image}`}
						alt=""
						width={mediaInfo.widthMedia}
						height={mediaInfo.heightMedia}
						key={i}
					/>
				{/each}
			</div>
		</div>
	</LayoutMedia>
</Layout>
