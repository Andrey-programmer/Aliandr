
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
});




