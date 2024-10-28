$(function(){
    // id属性がchange-colorの要素がクリックされたら
    $('#change-color').on('click',function(){
        $('#target').css('color','red');
    });
    // id属性がchange-textの要素がクリックされたら
    $('#change-text').on('click',function(){
        $('#target').text('Hello!');
    });

    // id属性がfade-outの要素がクリックされたら
    $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });

    // id属性がfade-inの要素がクリックされたら
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });

});