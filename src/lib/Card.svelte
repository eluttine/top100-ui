<script>
	import lazyimage from './actions/lazyimage';
	export let post;
</script>

<article class="card bordered flex-shrink w-80 m-5">
	<figure>
		<a href={post.link}>
			<img use:lazyimage data-src={post.image} alt={post.title} />
		</a>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{post.title}
			<div class="badge mx-2 badge-secondary">NEW</div>
		</h2>
	</div>
</article>
