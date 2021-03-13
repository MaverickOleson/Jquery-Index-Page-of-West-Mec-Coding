$(function(){
    var viewRemaining = $('nav').css('height');
    $('#viewportContent').css('height', 'calc(100vh - ' + viewRemaining + ')');
    $('#logoFront').css('height', 'calc((' + $('#logoFront').css('width') + ' * 545) / 590');
    $('#logoBack').css({'height': '' + $('#logoFront').css('height'), 'width': '' + $('#logoFront').css('width')});
});