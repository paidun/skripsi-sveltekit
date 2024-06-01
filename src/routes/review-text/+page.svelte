<script>
	import Layout from '../../lib/components/Layout.svelte';
	import LayoutMedia from '../../lib/components/LayoutMedia.svelte';

	export let data;
	const reviews = data.data;
</script>

<svelte:head>
	<title>TESTING | Review Text</title>
</svelte:head>
<Layout type="Header">
	<LayoutMedia type="Text" resolution="480p">
		<div class="my-6">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead class="text-xs text-gray-700 uppercase border-b text-center">
						<tr>
							<th scope="col" class="px-6 py-3 bg-gray-50"> No </th>
							<th scope="col" class="px-6 py-3"> Name </th>
							<th scope="col" class="px-6 py-3 bg-gray-50"> Area </th>
							<th scope="col" class="px-6 py-3"> Date </th>
							<th scope="col" class="px-6 py-3 bg-gray-50"> Rating </th>
							<th scope="col" class="px-6 py-3"> Review </th>
						</tr>
					</thead>
					<tbody>
						{#each reviews as item, i}
							<tr class="border-gray-200">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-center"
								>
									{i + 1}
								</th>
								<td class="px-6 py-4 text-center capitalize">
									{item.name}
								</td>
								<td class="px-6 py-4 text-center bg-gray-50 capitalize">
									{item.area}
								</td>
								<td class="px-6 py-4 text-center capitalize">
									{item.review_date}
								</td>
								<td class="px-6 py-4 text-center bg-gray-50 capitalize">
									{item.rating}
								</td>
								<td class="px-6 py-4 normal-case">
									{item.review_text}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</LayoutMedia>
</Layout>
