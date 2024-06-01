<script>
	export let widthVideo,
		heightVideo,
		source,
		name,
		reviewText,
		rating,
		area,
		reviewDate,
		posterVideo;
</script>

<div>
	<video
		class="rounded-sm aspect-video object-fill"
		width={widthVideo}
		height={heightVideo}
		controls
		muted
		preload="none"
		poster={`${import.meta.env.VITE_BASE_MEDIA_URL}/videos/${posterVideo}`}
	>
		<track kind="captions" />
		<source src={`${import.meta.env.VITE_BASE_MEDIA_URL}/videos/${source}`} type="video/mp4" />
		<caption>Your browser does not support the video tag.</caption>
		Your browser does not support the video tag.
	</video>
	<div class="w-full">
		<div class="flex justify-between items-center">
			<h3 class="text-base font-semibold">{name}</h3>
			<h3 class="text-sm truncate">Rating: {rating}</h3>
		</div>
		<div class="flex justify-between items-center">
			<h3 class="text-base font-semibold">{area}</h3>
			<h3 class="text-sm truncate">{reviewDate}</h3>
		</div>
		<p class="line-clamp-2">{reviewText}</p>
	</div>
</div>
