<script>
	export let post;
</script>

<article class="card bordered flex-shrink w-80 m-5">
	<figure>
		<img src={post.image} alt={post.title} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{post.title}
			<div class="badge mx-2 badge-secondary">NEW</div>
		</h2>
		<!-- <p>
			{post.text}
		</p> -->
		<!-- <div class="justify-end card-actions">
			<button class="btn btn-secondary">More info</button>
		</div> -->
	</div>
</article>
