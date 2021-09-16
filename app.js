const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('click', (event) => {
        clearActiveSlide();
        makeSlideActive(event.target);
        
    });
})

function clearActiveSlide() {
    for (const slide of slides) {
        if ( isSlideActive(slide) ) {
            makeSlidePassive(slide);
            break;
        }
    }
}

function isSlideActive(el) {
    return el.classList.contains('active');
}

function makeSlideActive(el) {
    el.classList.add('active');
}

function makeSlidePassive(el) {
    el.classList.remove('active');
}



