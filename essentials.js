(() => {
	window.addEventListener('scroll', (e) => {
		const firstStep = document.querySelector('#first-step');
		const firstLink = document.querySelector('aside a[href="#first-step"]');
		const secondStep = document.querySelector('#second-step');
		const secondLink = document.querySelector('aside a[href="#second-step"]');
		const thirdStep = document.querySelector('#third-step');
		const thirdLink = document.querySelector('aside a[href="#third-step"]');
		if (
			window.scrollY >= firstStep.offsetTop &&
			window.scrollY < secondStep.offsetTop
		) {
			firstLink.classList.add('active');
			secondLink.classList.remove('active');
			thirdLink.classList.remove('active');
		}

		if (
			window.scrollY >= secondStep.offsetTop &&
			window.scrollY < thirdStep.offsetTop
		) {
			secondLink.classList.add('active');
			firstLink.classList.remove('active');
			thirdLink.classList.remove('active');
		}

		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
			thirdLink.classList.add('active');
			secondLink.classList.remove('active');
			firstLink.classList.remove('active');
		}
	});
})();
