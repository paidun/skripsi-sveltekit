<script>
	import { onMount } from 'svelte';
	import logo from '../assets/images/logo.png';

	let isOpenImageNav,
		isOpenVideoNav,
		isOpenToogleNav = false;
	let hoveredIndex = null;
	let imageRef, videoRef;

	const handleToogleNav = () => {
		isOpenToogleNav = !isOpenToogleNav;
	};

	function handleClickOutside(e) {
		// console.log(imageRef.contains(e.target));
		if (imageRef && isOpenImageNav && imageRef.contains && !imageRef.contains(e.target)) {
			isOpenImageNav = false;
		}
		if (videoRef && isOpenVideoNav && videoRef.contains && !videoRef.contains(e.target)) {
			isOpenVideoNav = false;
		}
	}

	const setIsOpenImageNav = () => {
		isOpenImageNav = !isOpenImageNav;
	};

	const setIsOpenVideoNav = () => {
		isOpenVideoNav = !isOpenVideoNav;
	};

	const handleMouseEnter = (index) => {
		hoveredIndex = index;
	};
	const handleMouseLeave = () => {
		hoveredIndex = null;
	};
	const navigations = {
		images: [
			{
				id: 1,
				name: '480p (SD)',
				link: 'img-480p'
			},
			{
				id: 2,
				name: '720p (HD)',
				link: 'img-720p'
			},
			{
				id: 3,
				name: '1080p (FULL HD)',
				link: 'img-1080p'
			},
			{
				id: 4,
				name: '2K',
				link: 'img-2k'
			},
			{
				id: 5,
				name: '4K',
				link: 'img-4k'
			}
		],
		videos: [
			{
				id: 1,
				name: '480p (SD)',
				link: 'vid-480p'
			},
			{
				id: 2,
				name: '720p (HD)',
				link: 'vid-720p'
			},
			{
				id: 3,
				name: '1080p (FULL HD)',
				link: 'vid-1080p'
			},
			{
				id: 4,
				name: '2K',
				link: 'vid-2k'
			},
			{
				id: 5,
				name: '4K',
				link: 'vid-4k'
			}
			// {
			//   name: '8K',
			//   link: 'vid-8k'
			// },
		]
	};

	onMount(() => {
		window.addEventListener('mousedown', handleClickOutside);
	});
</script>

<nav class="flex justify-between items-center border relative z-50">
	<div class="container">
		<div class="flex justify-between items-center">
			<div>
				<a href={'/'} class="text-3xl font-bold py-2 uppercase text-black"> Testing Skripsi </a>
			</div>
			<div>
				<div class="flex items-center px-4">
					<button
						type="button"
						class="block lg:hidden absolute right-3 px-2 py-1"
						on:click={handleToogleNav}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
					<div
						class={`${!isOpenToogleNav ? 'invisible opacity-0 lg:visible lg:opacity-100' : 'block'} p-3 absolute py-5 bg-white shadow-lg rounded-lg max-w-[150px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all`}
					>
						<ul class="flex flex-col gap-y-2 lg:flex-row lg:items-center md:gap-x-10">
							<li class="hover:text-slate-700">
								<a href="/">Home</a>
							</li>
							<li class="hover:text-slate-700 relative">
								<button class="flex items-center space-x-1" on:click={setIsOpenImageNav}>
									<span>Images</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width={1.5}
										stroke="currentColor"
										class="w-3.5 h-3.5 mt-1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="m19.5 8.25-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</button>
								<div
									class={`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenImageNav ? 'block' : 'hidden'}`}
									bind:this={imageRef}
								>
									<ul>
										{#each navigations.images as imageNav}
											<a
												data-sveltekit-reload
												href={`/image/${imageNav.link}`}
												class={`${imageNav.id === hoveredIndex && 'text-slate-600 bg-slate-50'} p-1.5 block border-b`}
												on:mouseenter={() => handleMouseEnter(imageNav.id)}
												on:mouseleave={handleMouseLeave}
											>
												{imageNav.name}
											</a>
										{/each}
									</ul>
								</div>
							</li>
							<li class="hover:text-slate-700 relative">
								<button
									class="flex items-center space-x-1"
									on:click={() => setIsOpenVideoNav(!isOpenVideoNav)}
								>
									<span>Videos</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width={1.5}
										stroke="currentColor"
										class="w-3.5 h-3.5 mt-1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="m19.5 8.25-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</button>
								<div
									class={`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenVideoNav ? 'block' : 'hidden'}`}
									bind:this={videoRef}
								>
									<ul>
										{#each navigations.videos as videoNav}
											<a
												data-sveltekit-reload
												href={`/video/${videoNav.link}`}
												class={`${videoNav.id === hoveredIndex && 'text-slate-600 bg-slate-50'} p-1.5 block border-b`}
												on:mouseenter={() => handleMouseEnter(videoNav.id)}
												on:mouseleave={handleMouseLeave}
											>
												{videoNav.name}
											</a>
										{/each}
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
