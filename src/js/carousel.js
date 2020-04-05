// import 'jquery';

import Swiper from './swiper.min';


// Делаем переключение слайдера по клику на сам слайдер
setTimeout(() => {
    $('#carousel .carousel_item').each(function(){
        $(this).click(function() {
            $('#carousel .carousel-control-next').click();     
        });
    });
}, 500);

console.log($('#carousel .carousel_item'));

//Делаем переключение слайдера по клику на части слайдеров крома ссылок (а)
$('#reviews .carousel-item .caption').add('#reviews .carousel-item .face').add('#reviews .carousel-item h3').click(function () {
    $('#reviews .carousel-control-next').click();
});

//Добавляем переключение на первый слайдер по клику на последний
$('#reviews_carousel .carousel-item:last .caption').add('#reviews_carousel .carousel-item:last .face').add('#review_carousel .carousel-item:last h3').click(() => {
    $('#reviews_carousel .carousel-indicators li:first').click();
});



// Подгоняем высоту картинок под первую
$('#carousel #main_carousel .carousel_item').each(function () {
    $(this).find('img').height($('#carousel #main_carousel .carousel_item:first-of-type img').height())
    console.log($(this).find('img').height());

});



// Делаем переключение слайдера по клику на сам слайдер Halls
$('#halls .row:has(.carousel-item)').each(function () {
    // console.log( $(this).find('.carousel-item'));
    $(this).find('.carousel-item').click(function () {
        $(this).parents('.carousel-inner')[0].nextElementSibling.children[2].click();
        // console.log(  '===', $(this).parents('.carousel-inner')[0].nextElementSibling.children[2]);
    });
});



var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '#carousel .carousel-control-next',
        prevEl: '#carousel .carousel-control-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true 
});