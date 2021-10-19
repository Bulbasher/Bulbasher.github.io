$(function() {
    new Slider({
        images: '.slider-3 img',
        articles: '.slider-3 article',
        btn1: '.slider-3 .carousel_buttons .first',
        btn2: '.slider-3 .carousel_buttons .second',
        btn3: '.slider-3 .carousel_buttons .third',
        btn4: '.slider-3 .carousel_buttons .four',
        auto: true,
        rate: 5000
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

    let a = 0;
    let b = 0;
    let c = 1;
    let d = 2;
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
            slider.images.eq(a).removeClass('shown');
            slider.articles.eq(b).removeClass('shown news_text_1');
            slider.articles.eq(c).removeClass('shown news_text_2');
            slider.articles.eq(d).removeClass('shown news_text_3');
            a++;
            b = b + 3;
            c = c + 3;
            d = d + 3;
            if (a >= slider.images.length) {
                a = 0;
            }
            if (b >= slider.articles.length) {
                b = 0;
            }
            if (c >= slider.articles.length) {
                c = 1;
            }
            if (d >= slider.articles.length) {
                d = 2;
            }
            slider.images.eq(a).addClass('shown');
            slider.articles.eq(b).addClass('shown news_text_1');
            slider.articles.eq(c).addClass('shown news_text_2');
            slider.articles.eq(d).addClass('shown news_text_3');
        }
        // The "Next" button: to remove the class .shoved, show the next image and add the .shoved class
    this.first = function() {
        slider.images.eq(a).removeClass('shown');
        slider.articles.eq(b).removeClass('shown news_text_1');
        slider.articles.eq(c).removeClass('shown news_text_2');
        slider.articles.eq(d).removeClass('shown news_text_3');
        a = 0;
        b = 0;
        c = 1;
        d = 2;
        slider.images.eq(a).addClass('shown');
        slider.articles.eq(b).addClass('shown news_text_1');
        slider.articles.eq(c).addClass('shown news_text_2');
        slider.articles.eq(d).addClass('shown news_text_3');
    }
    this.second = function() {
        slider.images.eq(a).removeClass('shown');
        slider.articles.eq(b).removeClass('shown news_text_1');
        slider.articles.eq(c).removeClass('shown news_text_2');
        slider.articles.eq(d).removeClass('shown news_text_3');
        a = 1;
        b = 3;
        c = 4;
        d = 5;
        slider.images.eq(a).addClass('shown');
        slider.articles.eq(b).addClass('shown news_text_1');
        slider.articles.eq(c).addClass('shown news_text_2');
        slider.articles.eq(d).addClass('shown news_text_3');
    }
    this.third = function() {
        slider.images.eq(a).removeClass('shown');
        slider.articles.eq(b).removeClass('shown news_text_1');
        slider.articles.eq(c).removeClass('shown news_text_2');
        slider.articles.eq(d).removeClass('shown news_text_3');
        a = 2;
        b = 6;
        c = 7;
        d = 8;
        slider.images.eq(a).addClass('shown');
        slider.articles.eq(b).addClass('shown news_text_1');
        slider.articles.eq(c).addClass('shown news_text_2');
        slider.articles.eq(d).addClass('shown news_text_3');
    }
    this.four = function() {
        slider.images.eq(a).removeClass('shown');
        slider.articles.eq(b).removeClass('shown news_text_1');
        slider.articles.eq(c).removeClass('shown news_text_2');
        slider.articles.eq(d).removeClass('shown news_text_3');
        a = 3;
        b = 9;
        c = 10;
        d = 11;
        slider.images.eq(a).addClass('shown');
        slider.articles.eq(b).addClass('shown news_text_1');
        slider.articles.eq(c).addClass('shown news_text_2');
        slider.articles.eq(d).addClass('shown news_text_3');
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