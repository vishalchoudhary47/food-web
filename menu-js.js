const navSlide = () => {
	const bar = document.querySelector('.bar');
	const nav = document.querySelector('.nav-links');
	//Active Toggle
	bar.addEventListener('click',()=>{
		nav.classList.toggle('bar-click');
	});
}
navSlide();