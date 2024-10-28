$(function (){
    // class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function(){
        // class属性がtext-boxに「クリックしました！」を追加
        $('.text-box').val('クリックされました！');

    });

});