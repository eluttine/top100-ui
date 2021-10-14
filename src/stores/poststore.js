import { writable } from 'svelte/store';

export const posts = writable([]);

const fetchPosts = async () => {
	const url = `http://localhost:3100/posts`;
	const res = await fetch(url);
	const data = await res.json();
	const loaded = data.map((data, index) => {
		return {
			id: index + 1,
			title: data.title,
			text: data.text,
			image: data.image,
			link: data.link
		};
	});
	posts.set(loaded);
};

fetchPosts();
