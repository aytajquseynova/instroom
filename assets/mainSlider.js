let slider_img = document.querySelector('.slider-img');
let images = ['1.png', '2.png'];
let i = 0;
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    setImg();
    
});

function setImg() {
    return slider_img.setAttribute('src', "./assets/images/" + images[i]);
}

// btn
