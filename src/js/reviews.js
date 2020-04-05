// import 'jquery';

//Проверка на высоту выполняется за исключением 1го элемента
let maxHeight = 0;
$.each($('#reviews .carousel-item:not(:first-of-type)'), function(){
   
    // На время (доли секунд) делаем элемент видимым
    $(this).addClass('active');

    //Вычисляем выстоту содержимого данного элемента
    let element_height = $(this).find('.carousel-caption').outerHeight() - 3;   
    // console.log($(this).find('.carousel-caption').height() - 5);
    $(this).removeClass('active');
    maxHeight = maxHeight > element_height ? maxHeight : element_height;
   
});

// console.log(maxHeight);
$.each($('#reviews .wrapper'), function() {
    $(this).height(maxHeight);
});
