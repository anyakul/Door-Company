function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.ready-sets__list').scrollLeft -= (delta*10); // Multiplied by 10
        e.preventDefault();
    }
    if (document.querySelector('.ready-sets__list').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.querySelector('.ready-sets__list').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.querySelector('.ready-sets__list').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.querySelector('.ready-sets__list').attachEvent("onmousewheel", scrollHorizontally);
    }
