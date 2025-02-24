//Filter channel-blocks by type
// Filter channel-blocks by type
let channelBlocks = document.querySelector('#channel-blocks');
let navButtons = document.querySelectorAll('.nav-button');
let channelLink = document.querySelector('#channel-link');

// Add toggle filter for each type button
function toggleFilter(button, type) {
	if (channelBlocks.classList.contains(`show-${type}`)) {
		// Remove the class (toggle off)
		channelBlocks.classList.remove(`show-${type}`);
		button.classList.remove('active');
	} else {
		// Remove all active filters first
		channelBlocks.classList.remove('show-image', 'show-video', 'show-audio', 'show-link', 'show-text');
		navButtons.forEach(btn => btn.classList.remove('active'));

		// Apply the new filter (toggle on)
		channelBlocks.classList.add(`show-${type}`);
		button.classList.add('active');
	}
}

// Filter out each button
navButtons.forEach(button => {
	let type = button.id.replace('show-', ''); // Extract type from ID
	button.addEventListener('click', () => toggleFilter(button, type));
});

// Function to apply rainbowGlow animation except on hover or active state
function applyRainbowGlow() {
	navButtons.forEach(button => {
		if (!button.matches(':hover') && !button.classList.contains('active')) {
			button.classList.add('glow');
		} else {
			button.classList.remove('glow');
		}
	});
	channelLink.classList.add('glow');
}

// Glowing animation repeat every 8 seconds
setInterval(() => {
	applyRainbowGlow();
	setTimeout(() => {
		document.querySelectorAll('.glow').forEach(el => el.classList.remove('glow'));
	}, 2000); // Remove glow after 2 seconds
}, 8000);


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

