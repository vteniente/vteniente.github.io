
// inicializar variables
var totalSections = 0;
var sections;
var colorSet;
var sectionsContainer;
var moveLeft;
var moteTop;
var moveIndex;
var x = 0;
var y = 0;
var moveOne = 0;
var navIndex = 0;
//valores de color tomados de common.js
var navColor = color[4]
var navAnchorColor = color[5]
var backgroundColor = color[7]
var titleColor = color[2]
var menuColor = color[2]
var bodyColor = color[3]
var button = $('.button');
var comenzar = $('#comenzar');
var page1 = $('#page-1');
var defaultOverlayColor = color[3];
var correctColor = color[1];
var errColor = color[2];
var _reload = false;
var resource = {}
var key = level + grade + bloque + materia + resourceNumber
var storeName = materia + grade;
transitoryKey = {
    title: title,
    currentScreen: 0,
    unLockedScreens: [],
    finished: false,
};
var parsedKey = {}
var currentScreen = 0;

function load_data() {

    // load persistent store after the DOM has loaded
store = new Persist.Store(storeName.toUpperCase());

parsedKey = JSON.parse(store.get(key))

if (parsedKey == null){

store.set(key, JSON.stringify(transitoryKey));

}


parsedKey = JSON.parse(store.get(key))
currentScreen = parsedKey.currentScreen
currentIndex = currentScreen - 1;
//store.set(key, JSON.stringify(transitoryKey));)



  setTimeout(function() {
 
        if (currentScreen > 0) {
            $('#page-1').hide();

//$('#navButtons').html('');
//setNavButtons()

            $('#page-2').show();
            navIndex = currentIndex;
            moveTop = 0;
            $('#sectionsContainer').css('width', ($('#page-2 section').outerWidth() * totalSections) + 'px');
            $('#sectionsContainer').css('left', (-currentIndex * $('#page-2 section').width()) + 'px');
            $('#sectionsContainer').css('top', 0 + 'px');
            doSection(currentIndex);
            showButtons(currentIndex)
            $('#header, #nav').delay(200).velocity({
                right: parseInt($('#header').css('right'), 10) == 0 ? ($(this).outerWidth() - 90) * -1 : 0
            });
            $('#buttons, #home').delay(200).velocity({
                left: parseInt($('#header').css('left'), 10) == 0 ? ($(this).outerWidth() - 90) * -1 : 0
            });

 $('#navButtons').find('a').eq(currentScreen-1).css('color', color[2]);
          parsedKey.currentScreen= 0;
          store.set(key, JSON.stringify(parsedKey));     
        }


    }, 350)


    switch (navigation) {

            case 'label':

                sections.each(function(index, element) {

                    $('<li><a>' + (sectionsData[index].label) + '</a></li>').appendTo($('.' + navigation)).click({
                        navType: ($(this).index())
                    }, navigate)
                }); //end each


                break;

            case 'numeric':



                sections.each(function(index, element) {
                    $('<li><a class="navButton">' + (index + 1) + '</a></li>').appendTo($('.' + navigation).find('#navButtons')).click({
                        navType: ($(this).index())
                    }, navigate)



                  //*  keyToUnlock = JSON.parse(store.get(key))
                   //*   keyCurrentScreen = keyToUnlock.currentScreen;
                   //* currentIndex = currentScreen - 1;

                    //*
                 // alert('currentScreen: ' + currentScreen)
                    if ((index + 1) <= currentScreen) {
                        sectionsData[$(this).index()].bloqueado = false

                    }

                    if (sectionsData[$(this).index()].bloqueado == true) {

                        $('#navButtons li').eq($(this).index())
                            .children().text('')
                            .addClass('icon-lock')
                            .parent().addClass('_lock');

                        $('<div class="buttonLocker lock_' + $(this).index() + '" data-lock="' + $(this).index() + '" />')
                            .appendTo('#navButtons').position({
                                my: 'top',
                                at: 'top',
                                of: $('#navButtons li').eq($(this).index())
                            }).on('click', function() {
                                error_snd.play()
                                $('#navButtons li')
                                    .eq(parseInt($(this).attr('data-lock')))
                                    .children().effect('shake');
                            })


                    }

                }); //end each;


                break;

            case 'onebyone':
                //moveOne = 4;
                //alert(moveOnebyone())
                $('<li id="navBack"><a class="button icon-arrow-left"></a></li><li id="navNext"><a class="button icon-arrow-right"></a></li>').appendTo($('.' + navigation)).click({
                    navType: 0
                }, navigate);

                break;
            default:
                alert('Valor inválido en "navigation" (config.js).')

        }

           $('._lock').on('click', function() {

            //.children()
            //.addClass('navButton')
          
            $(this).html('<a class= "navButton">' + ($(this).index() + 1) + '</a>').removeClass('_lock').children().animate({
                    color: color[2]
                }, 400)
        
            $(this).find('a').css('background-color', color[5]).setCursor('cursor_pointer')
            $(this).find('a').effect('bounce');



            setFlatShadow($(this).find('a'), true)

        });

$('.button, #start, #nav a, #home, #navTab, #buttonMenu, #textButton').setCursor('cursor_pointer')

 $('#navButtons').find('a').css('background-color', color[5]);



} // loas data


function setFinishedResource(){
parsedKey.currentScreen = 0;
parsedKey.finished = true;
 store.set(key, JSON.stringify(parsedKey))


////////////////

	var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			//el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			//});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

/////////////////


/*
setTimeout(function(){

          setInterval(function() {
            $('#star').animate({
                    top: '-90%'
                }, 1000)
                .animate({
                   top :' -107%'
                }, 1000);
        }, 500);
}, 700)

*/

final_snd.play();

$('#buttons, #nav').fadeOut()


$('.md-content').css({
  'background': 'none',
  'box-shadow': 'none',
  'width': '1px'
})

$('.md-modal').removeClass('show')
$('.md-content > *').css('opacity', 0)
$('#star').appendTo('.md-content');
$('#star').css('opacity', 1)
$('.md-modal h3').text('');
$('.md-modal p').text('');
//
}


function setNavBUttos(){

       sections.each(function(index, element) {
                    $('<li><a class="navButton">' + (index + 1) + '</a></li>').appendTo($('.' + navigation).find('#navButtons')).click({
                        navType: ($(this).index())
                    }, navigate)



                  //*  keyToUnlock = JSON.parse(store.get(key))
                   //*   keyCurrentScreen = keyToUnlock.currentScreen;
                   //* currentIndex = currentScreen - 1;

                    //*
                    /*
                    if ((index + 1) <= keyCurrentScreen) {
                        sectionsData[$(this).index()].bloqueado = false

                    }


                    if (sectionsData[$(this).index()].bloqueado == true) {

                    }
                    */

                    //alert('cargo de sectionsData en la asignación de botones: ' + sectionsData )

                    if (sectionsData[$(this).index()].bloqueado == true) {

                        $('#navButtons li').eq($(this).index())
                            .children().text('')
                            .addClass('icon-lock')
                            .parent().addClass('_lock');

                        $('<div class="buttonLocker lock_' + $(this).index() + '" data-lock="' + $(this).index() + '" />')
                            .appendTo('#navButtons').position({
                                my: 'top',
                                at: 'top',
                                of: $('#navButtons li').eq($(this).index())
                            }).on('click', function() {
                                error_snd.play()
                                $('#navButtons li')
                                    .eq(parseInt($(this).attr('data-lock')))
                                    .children().effect('shake')




                            })


                    }
                }); //end each;
}