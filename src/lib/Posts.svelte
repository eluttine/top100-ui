<script>
	import { posts } from '../stores/poststore';
	import Card from './Card.svelte';
</script>

<div class="mt-4">
	<div class="flex flex-wrap justify-center">
		{#each $posts as post}
			<Card {post} />
		{/each}
	</div>
</div>
