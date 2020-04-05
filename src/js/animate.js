// import 'jquery';

$('.animated').css('opacity', 0);

// Анимация появления при скролле
$(window).scroll(function(){   
    $('.animated').each(function(){
        if($(window).scrollTop() + $(window).height() > $(this).offset().top + 60) {
            $(this).addClass($(this).data('animation')); 
        }

        // console.log($(this), $(window).scrollTop() + $(window).height(),  $(this).offset().top)
    });
});

// Если при обновлении позиция окна не сверху то всё что выше видимого блока - становится видимым ,
// Всё что ниже - ещё невидимое
$('.animated').each(function(){
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + 50) {
        $(this).addClass($(this).data('animation')); 
    };
}); 



// Если при обновлении позиция окна не сверху то цвет навбара - белый
if($(window).scrollTop() > 35 && $(window).width() > 992) {
    $('.navbar').css({"backgroundColor": "white"});
}

// Меняем прозрачность навбара во время движения от верха к низу
$(window).scroll(() => { 
    $('.navbar').css({"backgroundColor": "white"});  
    if($(window).scrollTop() == 0 && $(window).width() > 992) {
        $('.navbar').css({"backgroundColor" : "transparent"});   
    }
})
