

//footer #top button 
document.addEventListener("DOMContentLoaded", function () {
	const topButton = document.getElementById("top");

	window.addEventListener("scroll", function () {
		const scrollPosition = window.scrollY;

		if (scrollPosition > 800) {
			topButton.style.opacity = "1";
			topButton.style.visibility = "visible";
		} else {
			topButton.style.opacity = "0";
			topButton.style.visibility = "hidden";
		}
	});
});

