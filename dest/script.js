// hightlights current navigation item according to doc title

document.querySelectorAll('.header_nav-item').forEach((el, i, arr) => {
    if (el.text == document.title) {
        arr[i].classList.add('header_nav-item__active');
    }
});

// video click removes poster and starts the video

document.querySelector('.header_video').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header_video-poster').style.display = "none";
    document.querySelector('.header_video-frame').src += "&autoplay=1";
});

// service tabs opening/closing on click

document.querySelectorAll('.service_title').forEach((el, i) => {
    el.addEventListener('click', (e) => {
        let item = el.parentNode;
        let content = item.querySelector('.service_content');
        content.classList.toggle('service_content__enabled');
    })
});

document.querySelector('.header_menu').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header_nav').classList.toggle('header_nav__enabled');
})