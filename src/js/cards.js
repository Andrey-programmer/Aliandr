// import 'jquery';

// При ширине экрана меньше 480px убираем деление по 2 блока в ряду
if ($(window).width() < 576) {
    $('#pricing .wrapper').removeClass('col-6').addClass('col-8');
}

if ($(window).width() < 380) {
    $('#pricing .wrapper').removeClass('col-6').addClass('col-11');
}


var maxHeight = 0;

$('#pricing .card').each(function(){
    maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
});

$('#pricing .card').each(function(){
    $(this).height(maxHeight); 
});

