<script>
	import Layout from '../../../lib/components/Layout.svelte';
	import LayoutMedia from '../../../lib/components/LayoutMedia.svelte';
	import getSettingMediaResolution from '../../../lib/utils/mediaUtils';

	export let data;
	const reviews = data.data.data;
	const slug = data.slug;
	const mediaInfo = getSettingMediaResolution(slug);
	const posterVideo = `poster-${mediaInfo.resolution}.png`;
</script>

<svelte:head>
	<title>TESTING | Review Video</title>
</svelte:head>
<Layout type="Navbar">
	<LayoutMedia type={'Video'} resolution={mediaInfo.resolution}>
		<div class="mt-5">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
				{#each reviews as item}
					<video
						class="rounded-sm aspect-video object-fill"
						width={mediaInfo.widthVideo}
						height={mediaInfo.heightVideo}
						controls
						muted
						preload="none"
						poster={`${import.meta.env.VITE_BASE_MEDIA_URL}/videos/${posterVideo}`}
					>
						<track kind="captions" />
						<source
							src={`${import.meta.env.VITE_BASE_MEDIA_URL}/videos/${item.path_video}`}
							type="video/mp4"
						/>
						<caption>Your browser does not support the video tag.</caption>
						Your browser does not support the video tag.
					</video>
				{/each}
			</div>
		</div>
	</LayoutMedia>
</Layout>
