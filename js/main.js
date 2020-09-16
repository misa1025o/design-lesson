$(function() {
    // toriga- 
    $('#copyTarget').click(function(){
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
        console.log('copy');
        
    })

});