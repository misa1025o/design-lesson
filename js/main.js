$(function() {
    // toriga- 
    $('#copy-trigger').click(function(){
        let copyText = $('#copyTarget').text();

        // テキストエリアを一時的に作って選択状態にする
        let $textarea = $('<textarea></textarea>');
        $textarea.text(copyText);
        $(this).append($textarea);
        $textarea.select();

        // コピー
        document.execCommand('copy');
        $textarea.remove();

        // アラート
        let $baloon = $(this).prev('.item-description');
        console.log($baloon);
        $baloon.show();

        // ちょっとあとに消す
        setTimeout(function(){
            $baloon.fadeOut();
        }, 800);
        
    })
});

function open_popup() {
    $('.popup-wrapper').fadeIn();
}
function close_popup() {
    $('.popup-wrapper').fadeOut();
}