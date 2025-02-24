//Filter channel-blocks by type
let channelBlocks = document.querySelector('#channel-blocks')
let showAll = document.querySelector('#show-all')
let navButtons = document.querySelectorAll('.nav-button');

//add toggle filter for each type button
function toggleFilter(button, type) {
	// Check if the clicked button’s class is already applied
	if (channelBlocks.classList.contains(`show-${type}`)) {
		// Remove the class (toggle off)
		channelBlocks.classList.remove(`show-${type}`);
		button.classList.remove('active');
	} else {
		// Remove all active filters first
		channelBlocks.classList.remove('show-image', 'show-video', 'show-audio', 'show-link', 'show-text');
		document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));

		// Apply the new filter (toggle on)
		channelBlocks.classList.add(`show-${type}`);
		button.classList.add('active');
	}
}

// filter out each button
navButtons.forEach(button => {
	let type = button.id.replace('show-', ''); // Extract type from ID
	button.addEventListener('click', () => toggleFilter(button, type));
});

//channel-link, nav-button glowing animation every 8sec for 2sec but not when hovering
document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll("#channel-link, .nav-button");
  
	elements.forEach((element) => {
	  let isHovered = false;
  
	  // Listen for hover events
	  element.addEventListener("mouseenter", function () {
		isHovered = true;
	  });
  
	  element.addEventListener("mouseleave", function () {
		isHovered = false;
	  });
  
	  function triggerGlow() {
		if (window.matchMedia("(min-width: 375px)").matches && !isHovered) { // Check if not hovered
		  // Only run on mobile and if not hovered
		  element.classList.add("glow-trigger");
  
		  // Remove animation after 2 seconds
		  setTimeout(() => {
			element.classList.remove("glow-trigger");
		  }, 2000);
		}
	  }
  
	  // Run the animation every 8 seconds (8000ms)
	  setInterval(triggerGlow, 8000);
	});
  });



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

