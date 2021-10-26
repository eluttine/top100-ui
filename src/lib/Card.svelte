<script>
	import lazyimage from './actions/lazyimage';
	export let post;
</script>

<article class="card flex-auto bordered m-3 md:w-80">
	<figure>
		<a href={post.link}>
			<img class="w-full" use:lazyimage data-src={post.image} alt={post.title} />
		</a>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{post.title}
			<div class="badge mx-2 badge-secondary">NEW</div>
		</h2>
	</div>
</article>
