$(function(){
    var viewRemaining = $('nav').css('height');
    $('#viewportContent').css('height', 'calc(100vh - ' + viewRemaining + ')');
});