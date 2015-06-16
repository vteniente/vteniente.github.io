$("#coverTitle").widowFix();

var title_snd = new buzz.sound( "voice/a21pv2_0", {
    formats: [ "mp3"]
});
var snd2 = new buzz.sound( "voice/a21pv2_02", {
    formats: [ "mp3"]
});
var snd3 = new buzz.sound( "voice/a21pv2_03", {
    formats: [ "mp3"]
});
var snd4 = new buzz.sound( "voice/a21pv2_04", {
    formats: [ "mp3"]
});
var snd5 = new buzz.sound( "voice/a21pv2_05", {
    formats: [ "mp3"]
});
var snd7 = new buzz.sound( "voice/a21pv2_07", {
    formats: [ "mp3"]
});
var snd8 = new buzz.sound( "voice/a21pv2_08", {
    formats: [ "mp3"]
});
var snd10 = new buzz.sound( "voice/a21pv2_10", {
    formats: [ "mp3"]
});
var snd11 = new buzz.sound( "voice/a21pv2_11", {
    formats: [ "mp3"]
});
var snd13 = new buzz.sound( "voice/a21pv2_13", {
    formats: [ "mp3"]
});
var error2 = new buzz.sound( "voice/a21pv2_06", {
    formats: [ "mp3"]
});
var error3 = new buzz.sound( "voice/a21pv2_09", {
    formats: [ "mp3"]
});
var error4 = new buzz.sound( "voice/a21pv2_12", {
    formats: [ "mp3"]
});
$(window).load(function() {
    if(currentScreen == 0 ){
       title_snd.play();  
    }
    $('.distraido2').jsMovie({
                height: 414,
                width: 331,
                playOnLoad: true,
                sequence: 'abuela_loop_000##.png',
                folder: 'img/pant2/abuela_loop/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: true,
                performStop: false,
            });
    $('.chango1').jsMovie({
                height: 175,
                width: 221,
                playOnLoad: true,
                sequence: 'nito_preocupado_000##.png',
                folder: 'img/pant4/nito_preocupado/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: true,
                performStop: false,
            });
    $('.chango2').jsMovie({
                height: 175,
                width: 221,
                playOnLoad: true,
                sequence: 'nito_alegre_000##.png',
                folder: 'img/pant4/nito_alegre/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: true,
                performStop: false,
            });
    $('.iris').xeyes();
});

function doSection(section){
    switch(section){
        case 0:
            $('section').eq(0).setCursor('cursor_not-allowed');
            buzz.all().stop();
            $('.personaje1 .persona').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'tita_camina_000##.png',
                folder: 'img/pant1/tita_camina/',
                fps: 6,
                from: 1,
                to: 12,
                repeat: false,
                performStop: false,
            });
        break;
        case 1:
            $('section').eq(1).setCursor('cursor_not-allowed');
            buzz.all().stop();
            $('.personaje2 .entrada').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'tita_camina2_000##.png',
                folder: 'img/pant2/tita_camina/',
                fps: 6,
                from: 0,
                to: 11,
                repeat: false,
                performStop: false,
            });
        break;
        case 2:
            $('section').eq(2).setCursor('cursor_not-allowed');
            buzz.all().stop();
            $('.personaje3 .entrada').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'tita_camina3_000##.png',
                folder: 'img/pant3/tita_camina/',
                fps: 6,
                from: 1,
                to: 13,
                repeat: false,
                performStop: false,
            });
        break;
        case 3:
            $('section').eq(3).setCursor('cursor_not-allowed');
            buzz.all().stop();
            $('.personaje4 .entrada').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'tita_camina4_000##.png',
                folder: 'img/pant4/tita_camina/',
                fps: 6,
                from: 1,
                to: 12,
                repeat: false,
                performStop: false,
            });
        break;
    }
}

$(function(){
    $('.icon-undo').addClass('pageload-link');
        var pageWrap = document.getElementById('wrapper'),
        triggerLoading = [].slice.call( pageWrap.querySelectorAll( '*.pageload-link' ) )
    $('.icon-undo').on('click', function(){
        restartScreen(); // reiniciar actividad actual
    });
    $('.sec2.icon-bullhorn').on('click', function(){	
        buzz.all().stop(); //Evita que las locuciones se encimen
    	snd4.play();  
    });
    $('.sec3.icon-bullhorn').on('click', function(){
        buzz.all().stop();
    	snd7.play();  
    });
    $('.sec4.icon-bullhorn').on('click', function(){
        buzz.all().stop();
        snd7.play(); 
    });
    $('.goBack').on('click', {navType:0}, navigate);
});

//Pantalla 1
$('.personaje1 .persona').bind('ended',function(){
    snd2.play();
    $('.personaje1 .preocupada').css('z-index','1');
    $('.personaje1 .persona').css('z-index','-1');
});
snd2.bind('ended',function(){
    $('.tuto').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'tutorial_000##.png',
                folder: 'img/pant1/tutorial/',
                fps: 6,
                from: 1,
                to: 19,
                repeat: false,
                performStop: false,
     });
    setTimeout(function(){
        $('.personaje1 .preocupada').css('z-index','-1');
        $('.distraido1 .triste').css('z-index','-1');
    },100);
    setTimeout(function(){
        $('.lostfound1 .lf1').css('z-index','-1');
        $('.lostfound1 .lf2').css('z-index','1');
    }, 2000);
    setTimeout(function(){
        $('.distraido1 .feliz').css('z-index','1');
        $('.personaje1 .preocupada').css('z-index','-1');
        $('.personaje1 .alegre').css('z-index','1');
    }, 3000);
    
});
$('.tuto').bind('ended',function(){
    snd3.play();
});
snd3.bind('ended',function(){
    unlock(1);
    showNextSection($('#navButtons li').eq(1));
});
//pantalla 2
$('.personaje2 .entrada').bind('ended',function(){
    snd4.play();
    $('.personaje2 .entrada').css('z-index','-1');
    $('.personaje2 .preocupada').css('z-index','1');
    $('.personaje2 .ojos').css('z-index','1');
});
snd4.bind('ended',function(){
    $('.lostfound2 .active, .lostfound2 .object').setCursor('cursor_pointer');
    $('.lostfound2 .active').css('z-index','1');
    $('.lostfound2 .object').css('z-index','2');
    $('section').eq(1).setCursor('cursor_default');
    $('.personaje2 .preocupada').css('z-index','-1');
    $('.personaje2 .ojos').css('z-index','2');
    $('.personaje2 .triste').css('z-index','2');
});
$('.lostfound2 .object').click(function(){
    $('.lostfound2 .lf1').css('z-index','-1');
    $('.lostfound2 .lf2').css('z-index','1');
    $('.finale2').css('z-index','1');
    $('.finale2').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'secuencia_lentes_000##.png',
                folder: 'img/pant2/secuencia_lentes/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: false,
                performStop: false,
     });
});
$('.finale2').bind('ended',function(){
    $('.personaje2 .triste').css('z-index','-1');
    $('.personaje2 .alegre').css('z-index','2');
    snd5.play();
});
snd5.bind('ended', function(){
    unlock(2);
    showNextSection($('#navButtons li').eq(2));
});
//pantalla 3
$('.personaje3 .entrada').bind('ended', function(){
    snd7.play();
    $('.personaje3 .entrada').css('z-index','-1');
    $('.personaje3 .preocupada').css('z-index','1');
    $('.personaje3 .ojos').css('z-index','1');
});
snd7.bind('ended',function(){
    $('.lostfound3 .active, .lostfound3 .object').setCursor('cursor_pointer');
    $('.lostfound3 .active').css('z-index','1');
    $('.lostfound3 .object').css('z-index','2');
    $('section').eq(2).setCursor('cursor_default');
    $('.personaje3 .preocupada').css('z-index','-1');
    $('.personaje3 .ojos').css('z-index','2');
    $('.personaje3 .triste').css('z-index','2');
});
$('.lostfound3 .object').click(function(){
    $('.lostfound3 .lf1').css('z-index','-1');
    $('.lostfound3 .lf2').css('z-index','1');
    $('.finale3').css('z-index','2');
    $('.finale3').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'secuencia_salero_000##.png',
                folder: 'img/pant3/secuencia_salero/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: false,
                performStop: false,
     });
});
$('.finale3').bind('ended',function(){
    $('.personaje3 .triste').css('z-index','-1');
    $('.personaje3 .alegre').css('z-index','2');
    $('.distraido3 .triste').css('z-index','-1');
    $('.distraido3 .alegre').css('z-index','2');
    snd8.play();
});
snd8.bind('ended', function(){
    unlock(3);
    showNextSection($('#navButtons li').eq(3));
});
//pantalla 4
$('.personaje4 .entrada').bind('ended', function(){
    snd10.play();
    $('.personaje4 .entrada').css('z-index','-1');
    $('.personaje4 .preocupada').css('z-index','1');
    $('.personaje4 .ojos').css('z-index','1');
});
snd10.bind('ended',function(){
    $('.lostfound4 .active, .lostfound4 .object').setCursor('cursor_pointer');
    $('.lostfound4 .active').css('z-index','1');
    $('.lostfound4 .object').css('z-index','2');
    $('section').eq(3).setCursor('cursor_default');
    $('.personaje4 .preocupada').css('z-index','-1');
    $('.personaje4 .ojos').css('z-index','2');
    $('.personaje4 .triste').css('z-index','2');
});
$('.lostfound4 .object').click(function(){
    $('.lostfound4 .lf1').css('z-index','-1');
    $('.lostfound4 .lf2').css('z-index','1');
    $('.finale4').css('z-index','1');
    $('.finale4').jsMovie({
                height: 560,
                width: 790,
                playOnLoad: true,
                sequence: 'secuencia_oso_000##.png',
                folder: 'img/pant4/secuencia_oso/',
                fps: 6,
                from: 1,
                to: 7,
                repeat: false,
                performStop: false,
     });
});
$('.finale4').bind('ended',function(){
    $('.personaje4 .triste').css('z-index','-1');
    $('.personaje4 .alegre').css('z-index','2');
    $('.chango1').css('z-index','-1');
    $('.chango2').css('z-index','2');
    snd11.play();
});
snd11.bind('ended', function(){
    snd13.play();
});
snd13.bind('ended', function(){
    setFinishedResource();
});
$('.lostfound2 .active').click(function(){
    buzz.all().stop();
    error2.play();
    $('.personaje2 .triste').css('z-index','-1');
    $('.personaje2 .preocupada').css('z-index','2');
    error2.bind('ended', function(){
        $('.personaje2 .triste').css('z-index','2');
        $('.personaje2 .preocupada').css('z-index','-1');
    });
});
$('.lostfound3 .active').click(function(){
    buzz.all().stop();
    error3.play();
    $('.personaje3 .triste').css('z-index','-1');
    $('.personaje3 .preocupada').css('z-index','2');
    error3.bind('ended', function(){
        $('.personaje3 .triste').css('z-index','2');
        $('.personaje3 .preocupada').css('z-index','-1');
    });
});
$('.lostfound4 .active, .actives').click(function(){
    buzz.all().stop();
    error4.play();
    $('.personaje4 .triste').css('z-index','-1');
    $('.personaje4 .preocupada').css('z-index','2');
    error4.bind('ended', function(){
        $('.personaje4 .triste').css('z-index','2');
        $('.personaje4 .preocupada').css('z-index','-1');
    });
});