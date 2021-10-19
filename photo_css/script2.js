$(function() {
    new Slider({
        images: '.slider-3 img',
        articles: '.slider-3 article',
        btn1: '.slider-3 .carousel_buttons .first',
        btn2: '.slider-3 .carousel_buttons .second',
        btn3: '.slider-3 .carousel_buttons .third',
        btn4: '.slider-3 .carousel_buttons .four',
        auto: false,
        rate: 0
    });
});


function Slider(obj) {

    this.articles = $(obj.articles);
    this.images = $(obj.images);
    this.auto = obj.auto;
    this.text1 = obj.text1;
    this.text2 = obj.text2;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.btn1 = obj.btn1;
    this.btn2 = obj.btn2;
    this.btn3 = obj.btn3;
    this.btn4 = obj.btn4;
    this.rate = obj.rate || 500;

    let i = 0;
    let j = 0;
    let c = 0;
    let slider = this;

    // The "Previous" button: to remove the class .shoved, show the previous image and add the .shoved class
    this.prev = function() {
        slider.images.eq(i).removeClass('shown');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images.eq(i).addClass('shown');
    }

    // The "Next" button: to remove the class .shoved, show the next image and add the .shoved class
    this.next = function() {
            slider.images.eq(i).removeClass('shown');
            i++;

            if (i >= slider.images.length) {
                i = 0;
            }

            slider.images.eq(i).addClass('shown');
        }
        // The "Next" button: to remove the class .shoved, show the next image and add the .shoved class
    this.first = function() {
        slider.images.eq(i).removeClass('shown');
        slider.articles.eq(j).removeClass('shown name_album1');
        slider.articles.eq(c).removeClass('shown name_album2');
        i = 0;
        j = 0;
        c = 1;
        slider.images.eq(i).addClass('shown');
        slider.articles.eq(j).addClass('shown name_album1');
        slider.articles.eq(c).addClass('shown name_album2');
    }
    this.second = function() {
        slider.articles.eq(j).removeClass('shown name_album1');
        slider.articles.eq(c).removeClass('shown name_album2');
        i = 1;
        j = 2;
        c = 3;
        slider.images.eq(i).addClass('shown');
        slider.articles.eq(j).addClass('shown name_album1');
        slider.articles.eq(c).addClass('shown name_album2');
    }
    this.third = function() {
        slider.images.eq(i).removeClass('shown');
        i = 2;
        slider.images.eq(i).addClass('shown');
    }
    this.four = function() {
        slider.images.eq(i).removeClass('shown');
        i = 3;
        slider.images.eq(i).addClass('shown');
    }

    // To add next and prev functions when clicking the corresponding buttons
    $(slider.btnPrev).on('click', function() { slider.prev(); });
    $(slider.btnNext).on('click', function() { slider.next(); });
    $(slider.btn1).on('click', function() { slider.first(); });
    $(slider.btn2).on('click', function() { slider.second(); });
    $(slider.btn3).on('click', function() { slider.third(); });
    $(slider.btn4).on('click', function() { slider.four(); });

    // For the automatic slider: this method calls the next function at the set rate
    if (slider.auto) {
        setInterval(slider.next, slider.rate);
    }
};