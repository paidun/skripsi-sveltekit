<script>
	export let srcImage, widthImage, heightImage, name, reviewText, rating, area, reviewDate;
</script>

<div>
	<img
		src={`${import.meta.env.VITE_BASE_MEDIA_URL}/images/${srcImage}`}
		alt={`Gambar ${name}`}
		class="rounded"
		width={widthImage}
		height={heightImage}
	/>
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
