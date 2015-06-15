$("#coverTitle").widowFix();
var current = null;
var error = [
    new buzz.sound("audios/a24pv4_10.mp3"),
    new buzz.sound("audios/a24pv4_11.mp3"),
    new buzz.sound("audios/a24pv4_12.mp3"),
    new buzz.sound("audios/a24pv4_17.mp3"),
    new buzz.sound("audios/a24pv4_18.mp3"),
    new buzz.sound("audios/a24pv4_19.mp3"),
    new buzz.sound("audios/a24pv4_25.mp3"),
    new buzz.sound("audios/a24pv4_24.mp3"),
    new buzz.sound("audios/a24pv4_26.mp3")
];
function playError(){
    $('section').eq(1).setCursor('cursor_not-allowed');
    $('section').eq(2).setCursor('cursor_not-allowed');
    $('section').eq(3).setCursor('cursor_not-allowed');
    $('.ficha').draggable('disable').setCursor('cursor_not-allowed');
    buzz.all().stop();
    loopJungla.play();
    if(null !== current){
        error[current].pause();
    }
    current = Math.floor((Math.random() * 1000) % 9);
    error[current].play();
    error[current].bind('ended', function(){
        $('section').eq(1).setCursor('cursor_default');
        $('section').eq(2).setCursor('cursor_default');
        $('section').eq(3).setCursor('cursor_default');
        $('.ficha').draggable('enable');
        $('.ficha').setCursor('cursor_pointer');
    });
}
var correcto = [
    new buzz.sound("audios/a24pv4_07.mp3"),
    new buzz.sound("audios/a24pv4_08.mp3"),
    new buzz.sound("audios/a24pv4_09.mp3"),
    new buzz.sound("audios/a24pv4_14.mp3"),
    new buzz.sound("audios/a24pv4_15.mp3"),
    new buzz.sound("audios/a24pv4_16.mp3"),
    new buzz.sound("audios/a24pv4_21.mp3"),
    new buzz.sound("audios/a24pv4_22.mp3"),
    new buzz.sound("audios/a24pv4_23.mp3")
];
function playCorrecto(){
    $('section').eq(1).setCursor('cursor_not-allowed');
    $('section').eq(2).setCursor('cursor_not-allowed');
    $('section').eq(3).setCursor('cursor_not-allowed');
    $('.ficha, .dropped0, .dropped1, .dropped3').draggable('disable').setCursor('cursor_not-allowed');
    buzz.all().stop();
    loopJungla.play();
    if(null !== current){
        correcto[current].pause();
    }
    current = Math.floor((Math.random() * 1000) % 9);
    correcto[current].play();
    correcto[current].bind('ended', function(){
        $('section').eq(1).setCursor('cursor_default');
        $('section').eq(2).setCursor('cursor_default');
        $('section').eq(3).setCursor('cursor_default');
        $('.ficha').draggable('enable').setCursor('cursor_pointer');
        $('.dropped0').draggable('disable');
        $('.dropped1').draggable('disable');
        $('.dropped3').draggable('disable');
        
    });
}
var title_snd = new buzz.sound( "audios/a24pv4_0", {
    formats: [ "mp3"]
});
var snd2 = new buzz.sound( "audios/a24pv4_02", {
    formats: [ "mp3"]
});
var snd3 = new buzz.sound( "audios/a24pv4_03", {
    formats: [ "mp3"]
});
var snd4 = new buzz.sound( "audios/a24pv4_04", {
    formats: [ "mp3"]
});
var snd5 = new buzz.sound( "audios/a24pv4_05", {
    formats: [ "mp3"]
});
var snd6 = new buzz.sound( "audios/a24pv4_06", {
    formats: [ "mp3"]
});
var snd13 = new buzz.sound( "audios/a24pv4_13", {
    formats: [ "mp3"]
});
var snd20 = new buzz.sound( "audios/a24pv4_20", {
    formats: [ "mp3"]
});
var snd27 = new buzz.sound( "audios/a24pv4_27", {
    formats: [ "mp3"]
});
var snd28 = new buzz.sound( "audios/a24pv4_28", {
    formats: [ "mp3"]
});
var sndjungla = new buzz.sound( "audios/a24pv4_jungla", {
    formats: [ "mp3"]
});
var sndjungla2 = new buzz.sound( "audios/a24pv4_jungla", {
    formats: [ "mp3"]
});
var sndjungla3 = new buzz.sound( "audios/a24pv4_jungla", {
    formats: [ "mp3"]
});
var drag_snd = new buzz.sound("../lib/resources/sounds/drag", {
  formats: ["mp3"]
});
var drop_snd = new buzz.sound("../lib/resources/sounds/drop", {
  formats: ["mp3"]
});
var loopJungla = new buzz.sound("audios/a24pv4_jungla", {
    formats: [ "mp3"],
    loop: true,
    autoplay: false,
    volume: 50
});
$(window).load(function() {
    if(currentScreen == 0 ){
      title_snd.play();  
    }
});
$(function(){
    $('.icon-undo').addClass('pageload-link');
    var pageWrap = document.getElementById('wrapper'),
    triggerLoading = [].slice.call( pageWrap.querySelectorAll( '*.pageload-link' ) );

    $('.icon-undo').on('click', function(){
        restartScreen();
    });
});
function doSection(section){
    buzz.all().stop();
    switch (section) {
      case 0:
        loopJungla.play();
          $('section').eq(0).setCursor('cursor_not-allowed');
          $('.avance1 .avance').jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_entrada_000##.png',
              folder: 'img/pant1/avance_entrada/',
              fps: 6,
              from: 1,
              to: 12,
              repeat: false,
              performStop: false,
          });
          break;
      case 1:
          buzz.all().stop();
          loopJungla.play();
		      $('section').eq(1).setCursor('cursor_not-allowed');
		      $('.ficha').setCursor('cursor_not-allowed');
          $('.ficha').draggable('disable');
          $('.avance2 .avance').jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_transicion_000##.png',
              folder: 'img/pant2/avance_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
          break;
      case 2:
          buzz.all().stop();
          loopJungla.play();
          $('section').eq(2).setCursor('cursor_not-allowed');
          $('.ficha').setCursor('cursor_not-allowed');
          $('.ficha').draggable('disable');
          $('.avance3 .avance').jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_transicion_000##.png',
              folder: 'img/pant3/avance_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
          break;
      case 3:
          buzz.all().stop();
          loopJungla.play();
          $('section').eq(3).setCursor('cursor_not-allowed');
          $('.ficha').setCursor('cursor_not-allowed');
          $('.ficha').draggable('disable');
          $('.avance4 .avance').jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_transicion_000##.png',
              folder: 'img/pant4/avance_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
          break;
    }
}
//pantalla 1
 function loop() {
        $('.mapButton').animate({
            left: '195px',
        }, "slow", 'linear', function() {
            loop();
        }).animate({
            left: '185px',
        }, "slow", 'linear', function() {
            loop();
        });;
    }
$('.avance1 .avance').bind("ended",function(){
    snd2.play();
})
snd2.bind("ended",function(){
  $(".mapButton").css("z-index","2").setCursor("cursor_pointer");
  loop();
});
$(".mapButton").click(function(){
  $(".mapButton").remove();
  $(".mapaDes").css('z-index','1');
  $('section').eq(0).setCursor('cursor_not-allowed');
  snd3.play();
});

snd3.bind("ended",function(){
  $(".aripiensa").css("z-index",'1');
  snd4.play();
});
snd4.bind("ended",function(){
  $(".tutorial").jsMovie({
              height: 560,
              width: 790,
              playOnLoad: true,
              sequence: 'tutorial_000##.png',
              folder: 'img/pant1/tutorial/',
              fps: 6,
              from: 1,
              to: 28,
              repeat: false,
              performStop: false,
   });
  setTimeout(function(){
      $(".fichas1 .ficha1").css("z-index",'-1');
  },1500);

  setTimeout(function(){
      $(".fichas1 .ficha2").css("z-index",'-1');
  },3333);
});
$(".tutorial").bind("ended",function(){
  snd5.play();
  $(".avance1 .avanceFinal").css('z-index','1');
  $('.avance1 .avanceFinal').jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_camina_000##.png',
              folder: 'img/pant1/avance_camina/',
              fps: 6,
              from: 1,
              to: 13,
              repeat: false,
              performStop: false,
          });
});
$('.avance1 .avanceFinal').bind("ended",function(){
    unlock(1);
    showNextSection($('#navButtons li').eq(1));
});
//Pantalla 2
$(".avance2 .avance").bind("ended",function(){
  snd6.play();
});
snd6.bind("ended",function(){
          $('.mapa2 .mapa').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'mapa_transicion_000##.png',
              folder: 'img/pant2/mapa_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.mapa2 .mapa').bind("ended",function(){
    $('.jungla2 .jungla').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'jungla_transicion_000##.png',
              folder: 'img/pant2/jungla_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.jungla2 .jungla').bind("ended",function(){
	$('section').eq(1).setCursor('cursor_default');
	$('.ficha').setCursor('cursor_pointer');
  $('.ficha').draggable('enable');
});
//pantlla 3
$(".avance3 .avance").bind("ended",function(){
  snd13.play();
});
snd13.bind("ended",function(){
          $('.mapa3 .mapa').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'mapa_transicion_000##.png',
              folder: 'img/pant3/mapa_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.mapa3 .mapa').bind("ended",function(){
    $('.jungla3 .jungla').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'jungla_transicion_000##.png',
              folder: 'img/pant3/jungla_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.jungla3 .jungla').bind("ended",function(){
  $('section').eq(2).setCursor('cursor_default');
  $('.ficha').setCursor('cursor_pointer');
  $('.ficha').draggable('enable');
});
//pantalla 4
$(".avance4 .avance").bind("ended",function(){
  snd20.play();
});
snd20.bind("ended",function(){
          $('.mapa4 .mapa').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'mapa_transicion_000##.png',
              folder: 'img/pant4/mapa_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.mapa4 .mapa').bind("ended",function(){
    $('.jungla4 .jungla').jsMovie({
              height: 260,
              width: 260,
              playOnLoad: true,
              sequence: 'jungla_transicion_000##.png',
              folder: 'img/pant4/jungla_transicion/',
              fps: 6,
              from: 1,
              to: 7,
              repeat: false,
              performStop: false,
          });
});
$('.jungla4 .jungla').bind("ended",function(){
  $('section').eq(3).setCursor('cursor_default');
  $('.ficha').setCursor('cursor_pointer');
  $('.ficha').draggable('enable');
});
//functions
$(".drop1").droppable({
    accept: ".ficha",
    drop: function(event, ui) {
        playCorrecto();
        var pos = $(this).offset()
        flagRetro = true;
        ui.draggable.draggable( {revert: false}).setCursor("cursor_not-allowed");
        ui.draggable.addClass('dropped0').attr("rel","dropped").draggable( "option", "disabled", true ).offset(pos);
        if($('.dropped0').length == 3){
            $(".avance2 .avanceFinal").css('z-index','1');
            $(".avance2 .avanceFinal").jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_camina_000##.png',
              folder: 'img/pant2/avance_camina/',
              fps: 6,
              from: 1,
              to: 13,
              repeat: false,
              performStop: false,
          });
        }
        $(this).droppable( "option", "disabled", true ); 
    }
});
$(".drop2").droppable({
    accept: ".ficha",
    drop: function(event, ui) {
        playCorrecto();
        var pos = $(this).offset()
        flagRetro = true;
        ui.draggable.draggable( {revert: false}).setCursor("cursor_not-allowed");
        ui.draggable.addClass('dropped1').attr("rel","dropped").draggable( "option", "disabled", true ).offset(pos);
        if($('.dropped1').length == 5){
            $(".avance3 .avanceFinal").jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_camina_000##.png',
              folder: 'img/pant3/avance_camina/',
              fps: 6,
              from: 1,
              to: 13,
              repeat: false,
              performStop: false,
          });
        }
        $(this).droppable( "option", "disabled", true ); 
    }
});
$(".drop3").droppable({
    accept: ".ficha",
    drop: function(event, ui) {
        playCorrecto();
        var pos = $(this).offset()
        flagRetro = true;
        ui.draggable.draggable( {revert: false}).setCursor("cursor_not-allowed");
        ui.draggable.addClass('dropped3').attr("rel","dropped").draggable( "option", "disabled", true ).offset(pos);
        if($('.dropped3').length == 7){
            sndjungla3.play();
            $(".avance4 .avanceFinal").jsMovie({
              height: 380,
              width: 350,
              playOnLoad: true,
              sequence: 'avance_camina_000##.png',
              folder: 'img/pant4/avance_camina/',
              fps: 6,
              from: 1,
              to: 24,
              repeat: false,
              performStop: false,
          });
        }
        $(this).droppable( "option", "disabled", true ); 
    }
});
$(".avance2 .avanceFinal").bind("ended",function(){
    unlock(2);
    showNextSection($('#navButtons li').eq(2));
});
$(".avance3 .avanceFinal").bind("ended",function(){
    unlock(3);
    showNextSection($('#navButtons li').eq(3));
});
$(".avance4 .avanceFinal").bind("ended",function(){
    snd27.play();
});
snd27.bind("ended",function(){
    snd28.play();
});
snd28.bind("ended",function(){
    setFinishedResource();
});

$('.goBack').on('click', {navType:0}, navigate);
$('.drag').draggable({
		containment: "#page-2",	
		revert: true,
		cursor: 'url(../../common/img/cursors/default.svg)', //para mantener el cursor default en pantalla
		start: function(){
			drag_snd.currentTime = 0;
			drag_snd.play()
		},
		stop: function(){
      drop_snd.play()
      var rel = $(this).attr('rel');
            if(!rel){
                playError();
            }
    },
		drag: function(event, ui){
        $(this).setCursor('cursor_pointer') // cambia cursor al asignado para arrastrar
		}
		
}); 







