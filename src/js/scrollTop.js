

$('.btn-up').click(()=>{
    $("html, body").animate({
        scrollTop : 0
    }, 500, 'swing')
});


$(window).scroll(function(){
    // console.log('scrolll', $(this).scrollTop() );
    if($(this).scrollTop() > 400) {
        $('.btn-up').fadeIn(); 
    }
    else {
        $('.btn-up').fadeOut(); 
    }
});