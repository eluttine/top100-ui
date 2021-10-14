<!-- <div
	class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4"
> -->
<script>
	import Posts from '$lib/Posts.svelte';
</script>

<div class="flex-1 px-2 mx-2">
	<div class="items-stretch hidden lg:flex">
		<a href="/" class="btn btn-ghost btn-sm rounded-btn">Suosituimmat</a>
		<a href="/uusimmat" class="btn btn-ghost btn-sm rounded-btn">Uusimmat</a>
		<a href="/top100" class="btn btn-ghost btn-sm rounded-btn">Top 100</a>
	</div>
</div>
<Posts />
