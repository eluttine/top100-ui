export default function lazyimage(element) {
	const viewportActionMethods = viewportAction(element);
	element.addEventListener('enterViewport', enterViewport);

	function enterViewport() {
		element.src = element.dataset.src;
	}

	return {
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener('enterViewport', enterViewport);
		}
	};
}

let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	});
}

function viewportAction(element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
