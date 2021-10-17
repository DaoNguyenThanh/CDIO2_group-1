//common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 400,
    delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.main-title, .section-title, .special-title, .title-number3', { delay: 150, origin: 'left' });
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 450, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 450, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 450, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image, .sec-04 .image, .sec-05 .image, .sec-06 .image, .sec-07 .image, .sec-08 .image, .sec-09 .image, .sec-10 .image, .sec-11 .image, .sec-12 .image', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.media-info li', { delay: 450, origin: 'left', interval: 200 });

var i = 0;
var so1 = "CÁCH THỨC HOẠT ĐỘNG CỦA SÀN CHỨNG KHOÁN";

function
typing() {
    if (i < so1.length) {
        document.getElementById("Number1").innerHTML += so1.charAt(i);
        i++;
        setTimeout(typing, 85);
    }
}
typing();