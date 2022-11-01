//PARALLAX
const bodyEl = document.querySelector("body");
addEventListener("mousemove", parallax);
addEventListener("touchmove", parallax);
function parallax (el) {
    //Offsets need to return values from -1 to 1 so they can ignore zooming
    const xOffset = (el.pageX - window.innerWidth/2)/(window.innerWidth/2);
    const yOffset = (el.pageY - window.innerHeight/2)/(window.innerHeight/2);

    const center = `${50 - xOffset * 0}% ${50 - yOffset * 0}%`;
    const ground = `${50 - xOffset * (window.innerHeight > window.innerWidth ? -1.5 : 10)}% ${105 - yOffset * 4}%`;
    const tree = `${(window.innerHeight > window.innerWidth ? 120 : 81) - xOffset * (window.innerHeight > window.innerWidth ? 70 : 5)}% 50%`;
    const treeBush = `${(window.innerHeight > window.innerWidth ? -450 : 110) - xOffset * (window.innerHeight > window.innerWidth ? -11 : 1.5)}% ${-50 - yOffset * 10}%`;
    const treesBushes = `${(window.innerHeight > window.innerWidth ? 150 : -50) - xOffset * (window.innerHeight > window.innerWidth ? -2.5 : 1.5)}% ${-50 - yOffset * 10}%`;
    const bg1 = `${50 - xOffset * 1}% ${-40 - yOffset * 0.75}%`;

    bodyEl.style.transition = "background-position 0.05s";
    bodyEl.style.backgroundPosition = `${center}, ${tree}, ${ground}, ${treeBush}, ${treesBushes}, ${bg1}, center`;
}

//LOGO BUTTON
const logoBtn = document.getElementById("button-logo");
const closeBtn = document.getElementById("button-close");
const overlay = document.getElementById("overlay");
const popUp = document.getElementById("company-info");

logoBtn.addEventListener("click", function() {
    overlay.classList.add("active");
    popUp.classList.add("active");
})
closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
    popUp.classList.remove("active");
})
overlay.addEventListener("click", function() {
    overlay.classList.remove("active");
    popUp.classList.remove("active");
})

//TRAILER RESIZE
const embedEl = document.getElementById("embed-el");
addEventListener("resize", function() {
    const calculatedHeight = embedEl.clientWidth / 1.777777777777778;
    embedEl.height = calculatedHeight;
})

//TRAILER BUTTONS
const trailerBtn = document.getElementById("button-trailer");
const closeTrailer = document.getElementById("button-close-trailer");
const popUpTrailer = document.getElementById("trailer-container");

trailerBtn.addEventListener("click", function() {
    const calculatedHeight = embedEl.clientWidth / 1.777777777777778;
    embedEl.height = calculatedHeight;
    overlay.classList.add("active");
    popUpTrailer.classList.add("active");
})
closeTrailer.addEventListener("click", function() {
    overlay.classList.remove("active");
    popUpTrailer.classList.remove("active");
    stopTrailer();
})
overlay.addEventListener("click", function() {
    overlay.classList.remove("active");
    popUpTrailer.classList.remove("active");
    stopTrailer();
})

function stopTrailer () {
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
}
