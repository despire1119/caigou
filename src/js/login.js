$(function() {
    $('.unslider').unslider({
        fluid: true,
        dots: true,
        speed: 2000
    });

    $('input').on('focus',function(){
    	$(this).siblings('.input-label').css('display','none');
    }).on('blur',function(){
        if($(this).val().length<1)
    	   $(this).siblings('.input-label').css('display','inline')
    });
    $('.input-label').click(function(){
        $(this).css('display','none');
        $(this).siblings('input').trigger('focus');
    })
});