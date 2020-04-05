
$(document).ready(function(){

    $('form').submit(function(event){
        event.preventDefault();
        $.ajax({
        url:  $(this).attr('action'),
        type: $(this).attr('method'),
        data: $(this).serialize(),
        beforeSend:() => {
            $(this).parents('.modal').find('.close').click(); 
        },
        success: function(result) {        
        },
        error: function(result) {
        console.log('Упс! Что то пошло не так ...');
        },
        complete: () => {                
           $('#form_modal_success').modal({
                show: true
            });
        },
        });
        });

    /* $("form").submit(function( event ) {              
       
      
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: new FormData($(this)),
            contentType: false,

            success : function (result) {
                alert('ssjjssj');
                alert(result);
                event.preventDefault();
            },
            error: function(){
                console.log('Ошибка! Данные не отправлены');
            },
            dataType: 'text',
            timeout: 1000

        });     
      
    });   */
    
});




