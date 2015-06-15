

function restartScreen() {
    buzz.all().stop();

    loader = new SVGLoader(document.getElementById('loader'), {
        speedIn: 300,
        easingIn: mina.easeinout
    })
    loader.show();

  transitoryKey.currentScreen = navIndex + 1;

  store.set(key, JSON.stringify(transitoryKey));


 // store.save();

console.log(JSON.stringify(transitoryKey))
    setTimeout(function() {
        console.log(JSON.stringify(transitoryKey));
        console.log(transitoryKey);
        location.reload()
    }, 900)

}

/*

var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

if (iOS) {

}
*/

window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    $('#wrapper').center(true, true, 2000000);
}, false);

//carga del sonidos
var nav_snd = new buzz.sound("../lib/common/sounds/nav", {
    formats: ["mp3"]
});

var select_snd = new buzz.sound("../lib/common/sounds/select", {
    formats: ["mp3"]
});

var open_snd = new buzz.sound("../lib/common/sounds/open", {
    formats: ["mp3"]
});

var error_snd = new buzz.sound("../lib/common/sounds/error", {
    formats: ["mp3"]
});

var unlock_snd = new buzz.sound("../lib/common/sounds/unlock", {
    formats: ["mp3"]
});


var final_snd = new buzz.sound("../lib/common/sounds/final", {
    formats: ["mp3"]
});

//Posicionar algunos elementos en pantalla

$('#scene').position({
    my: "center center-70",
    at: "center center",
    of: "#page-1"

})
$('#page-1').position({
    my: "center center",
    at: "center center",
    of: "#wrapper"

});

$('<ul id="buttons"></ul>').appendTo('body');
$('body').css('background-color', bodyColor);
$('<header id="header"><img id="blockImg"><img id="character"><h2></h2></header>').appendTo('#allPageWrap');
$('header h2').text(title).css('background-color', color[3]);
$('header h2').css('background-color', color[3]);


///home provisional para fines demostrativos:
$('<div id="home"><a class="icon-home3 button" href="../../index.html"></a></div>').appendTo('body');
$('#navTab').appendTo('#home')
$('#home').css('background-color', color[4]);
$('.md-content').css('background-color', color[3]);


$('header #blockImg').attr('src', '../lib/common/img/blockImg/' + bloque + '.png')
$('header #character').attr('src', '../lib/common/img/characters/' + bloque + '.png')
$('#coverTitle').html(title);


$('#splash').position({
    my: "center center",
    at: "center center",
    of: "#page-1"
});


$(function() {

        var $scene = $('#scene').parallax();
        $scene.parallax('enable');

        footer = $('<footer><h1 id="footerh1"></h1><h2 id>' + intro + '</h2></footer');
        $('footer').css('background-color', color[5]);
        $('#afterTitle').css('background-color', color[3]);
        var footerh1 = $("#footerh1"),


        htmlfooterh1 = $.parseHTML(title);
        footerh1.append(htmlfooterh1);
        foo = $("#footerh1").text();

        $("#footerh1").widowFix();


        $('title').text($("#footerh1").text())

        wrapper = $('#wrapper');
        sectionsContainer = $('#sectionsContainer');
        sections = $('#page-2 section');
        totalSections = sections.length;

        moveLeft = $(sections).outerWidth();
        moveTop = $(sections).outerHeight();
        moveLeftIndex = 1;
        moveTopIndex = 1;
        $('body').append('<nav class=' + navigation + ' id="nav"><ul id="navButtons"></ul></nav>');;
        navTop = $('#nav').css('top');
        $('#nav').css('top', parseInt(navTop) - parseInt($('#nav').css('height')) / 20)
        $('#navTab').on('click', function() {

        })
        $('#navTab img').attr('src', 'thumb.jpg')
        nav = $('#nav').find('ul')
        $('#nav').css('background-color', navColor)


        $("<div class=' icon-arrow-right' id='navIndicator'/>").appendTo('#nav')


        $('#buttons').css('background-color', color[3]);



        navTab = $('#navTab');
        navIndicator = $('#navIndicator');
        //navIndicator.insertBefore('#nav *:last')
        $('.pageload-link').on('click', function() {

            select_snd.play();
            setTimeout(function() {
                open_snd.play();
            }, 300)

        })

        $('#start').on('click', function() {
 $('#navButtons').find('a').eq(0).css('color', color[2]);
            //store.remove(key) 

            showButtons(navIndex)
            $scene.parallax('disable');
            setTimeout(function() {
                open_snd.play();
            }, 300)
            $(this).effect('bounce');

            //$('#page-2 > section').addClass('sectionBorders')

            $('#header, #nav').delay(200).velocity({
                right: parseInt($('#header').css('right'), 10) == 0 ? ($(this).outerWidth() - 90) * -1 : 0
            });

            $('#buttons, #home').delay(200).velocity({
                left: parseInt($('#header').css('left'), 10) == 0 ? ($(this).outerWidth() - 90) * -1 : 0
            });

        })

        $('#navTab').click(function() {

            _reload = true;

             loader = new SVGLoader(document.getElementById('loader'), {
        speedIn: 300,
        easingIn: mina.easeinout
    })
    loader.show();

       
            setTimeout(function(){
                location.reload()
            },1000)


        });

        $('#blockImg').on('click', function() {

            $('#header').velocity({
                right: parseInt($('#header').css('right'), 10) == 0 ? ($('#header').outerWidth() - 90) * -1 : 0
            }, function() {

            });
        })


        //moveElements('#header',  'right', true, 90)

    

        $('#nav').find('li a').css('background-color', navAnchorColor);



        buttons_arr = []
        for (i = 0; i < sectionsData.length; i++) {


            for (var ii in sectionsData[i].buttons) {

                $('<a/>', {
                    'class': 'button icon-' + sectionsData[i].buttons[ii] + ' sec' + (i + 1)
                }).appendTo('#buttons').wrap('<li style="display:none" data-buttonGroup="' + i + '"></li>');

            }


        }



        showButtons()
       

        setFlatShadow($('[class*=" icon-"], .textButton'), navAnchorColor, false);
        $('.button, .textButton').css('background-color', navAnchorColor);

        page1.css('background-color', color[0]);

        setFlatShadow($('#nav').find('li a'), navAnchorColor, false);
        //setFlatShadow($('#navTab'), navAnchorColor, false, true);


        //PINTAR DE OTRO COLOR BOTONES DEL LADO IZQUIERDO
        setFlatShadow($('#buttons [class*=" icon-"]'), color[1], false);
        $('.button').on('click', function() {
            $(this).effect('bounce')

            nav_snd.play()


        })

        $('#buttons .button').css('background-color', color[1]);
        $('#navTab').on('click', function() {
            $(this).effect('bounce')
        })

        // $('#nav').center(true, false, 2000000);
        $('#wrapper').center(true, true, 2000000);
        $('#home a').css('background-color', color[0]);

        $('.button, #start, #nav a, #home, #navTab, #buttonMenu, #textButton').setCursor('cursor_pointer')

        $('#buttonMenu').css('background-color', color[0]);


        $(".div").greenify({
            // color: "orange"
        });

        
$('<li><a id="buttonMenu" class="icon-list2"></a></li>').appendTo('#buttons').on('click', function() {
            $(this).children().effect('bounce')
        })

        $('#buttonMenu').css('background-color', color[0])


         $('#buttonMenu').on('click', function() {


//alert($('*[data-buttonGroup="'+navIndex+'"]').length)

            $('#buttons').velocity({
            left: parseInt($('#buttons').css('left'), 10) == 0 ? ($('#buttons').outerWidth() - 90) * -1 : 0
            });
        });

$('title').text(title)
    })
    //end doc ready





$.fn.greenify = function(options) {

    var settings = $.extend({

        color: "#556b2f",
        backgroundColor: "white"
    }, options);

    // Greenify the collection based on the settings variable.
    return this.css({
        color: settings.color,
        backgroundColor: settings.backgroundColor
    });

};

//setModalWindow(defaultOverlayColor, .80);

$.fn.setRgba = function(prop) {
    //this.css( prop, "green" );
};

$('.md-overlay').setRgba('color'); // Makes all the links green.

function navigate(event) {
        event.preventDefault();

        nav_snd.play()

        switch ($(this).attr('id')) {
            case 'navBack':

                if (navIndex >= 1) {
                    navIndex--

                }

                break;

            case 'navNext':
                if (navIndex < (totalSections - 1)) {

                    navIndex++

                }
                break;

            default:
                navIndex = 0;
                navIndex = event.data.navType;
        }

        switch (transition[0]) {
            case 'vertical':

                moveLeft = 0;
                moveTop = -navIndex * ($(sections).outerHeight()) + 'px';

                break;
            case 'horizontal':
                moveTop = 0;

                $('#sectionsContainer').css('width', ($(sections).outerWidth() * totalSections) + 'px');
                moveLeft = -navIndex * $(sections).width() + 'px';

                break;
            case 'grid':

                $('#sectionsContainer').css('width', ($(sections).outerWidth() * transition[3]) + 'px');
                cols = transition[3];
                y = 0;
                x = 0;
                for (i = 1; i <= totalSections; i++) {
                    x++
                    if (x > cols) {
                        y++;
                        x = 1;
                    }
                    if (i == (navIndex + 1)) {

                        moveLeft = (-x + 1) * ($(sections).outerWidth() - 1) + 'px';
                        moveTop = -y * ($(sections).outerHeight() - 1) + 'px';

                    }
                }
                break;

            default:

                alert('El valor asignado a "Transition" es incorrecto. (config.js).')
        }

        setFlatShadow($('[class*=" icon-"], .textButton'), navAnchorColor, false);
        $('.button, .textButton').css('background-color', navAnchorColor);

        //PINTAR DE OTRO COLOR BOTONES DEL LADO IZQUIERDO
        setFlatShadow($('#buttons [class*=" icon-"]'), color[1], false);
        $('#buttons .button').css('background-color', color[1]);

        if (!$('#sectionsContainer').hasClass('animated')) {
            $('#sectionsContainer').dequeue().stop().velocity({
                    'left': moveLeft,
                    'top': moveTop,
                }, transition[2], transition[1], function() {

                    $('#sectionsContainer').addClass('animated')
                    $('#sectionsContainer').removeClass('animated').dequeue();

                    doSection(navIndex)


                }

            )
        }


        if (navigation == 'numeric') {

            if ($('#navButtons li').eq(navIndex).children().hasClass('highlighted')) {

                $('#navIndicator').removeIndicator()
            }


            $('#navButtons li').eq(navIndex).children().effect('bounce').dequeue().stop().animate({
                'color': color[2]
            }, 500)

            $('#navButtons li').not(':eq(' + navIndex + ')').children().dequeue().stop().animate({
                'color': 'white'
            }, 500);


        }


        showButtons(navIndex)

    } //end navigate



// $('.highlighted')   eq(navIndex + 1)
function showNextSection(target) {

    if (navigation == 'numeric') {

        $('#navIndicator').fadeIn().position({
            my: 'left top',
            at: 'left-40 top+20',
            of: target

        }).exShake();

        target.children().addClass('highlighted');

        setInterval(function() {
            $('.highlighted').animate({
                    color: color[2]
                }, 400)
                .animate({
                    color: 'white'
                }, 400);
        }, 1000);
    }

    if (navigation == 'onebyone') {


    }

}

function unlock(_target) {


        $('#navButtons li').eq(_target).children()

            .removeClass('icon-lock')
            .addClass('icon-unlocked')
            unlock_snd.play();
//**
        $('.lock_' + _target + '').remove();
        $('#navIndicator').fadeIn().position({
            my: 'left top',
            at: 'left-40 top+20',
            of: $('#navButtons li').eq(_target)

        }).exShake()

$('#navButtons li').eq(_target).children().addClass('highlighted').effect('bounce');

        setInterval(function() {
            $('.highlighted').animate({
                    color: color[2]
                }, 400)
                .animate({
                    color: 'white'
                }, 400);
        }, 500);

    } //termina unlock



  (function() {
           var pageWrap = document.getElementById('wrapper'),
               pages = [].slice.call( pageWrap.querySelectorAll( 'div.container' ) ),
               currentPage = 0,
               triggerLoading = [].slice.call( pageWrap.querySelectorAll( '*.pageload-link' ) ),
               loader = new SVGLoader( document.getElementById( 'loader' ), {
                 speedIn : 300, easingIn : mina.easeinout }
                                     );  
           function init() {


             triggerLoading.forEach( function( trigger ) {
               trigger.addEventListener( 'click', function( ev ) {
                 ev.preventDefault();
                 loader.show();
                 // after some time hide loader
                 setTimeout( function() {
                   loader.hide();
                   classie.removeClass( pages[ currentPage ], 'show' );
                   // update..
                   currentPage = currentPage ? 0 : 1;
                   classie.addClass( pages[ currentPage ], 'show' );
       //   console.log(resource.currentScreen);
     if(_reload == false){
    setTimeout(function(){
 //* resource.currentScreen = navIndex;
// console.log('currentScreen: ' + resource.currentScreen )
doSection(navIndex);
      },500);
           }else{
    location.reload();
             }
                     }
                            , 2000 );
               }
                                       );
             }
                                   );
           }
           init();
         }
         )();

$.fn.exShake = function() {

    this.addClass('shake')
    var self = this;
    (function runEffect() {
        $('.shake').effect("shake", {
            times: 3
        }, 3000, runEffect);
    })();
    return this;

};


$.fn.removeIndicator = function() {
    $('.highlighted').removeClass('highlighted');
    var self = this;
    this.fadeOut();
    (function runEffect() {
        self.removeClass("shake")
    })();
    return this;

};


jQuery.fn.center = function(top, left, zIndex, extraLeft, extraTop) {
    this.css('position', 'absolute')
        //this.css("z-index", "" + zIndex );

    if (top) {
        this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    }
    if (left) {

        this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        return this;
    }
}

window.onresize = function(event) {

    $('#wrapper').center(true, true, 2000000);

};

function showButtons(index) {

    $('#buttons li:not(:last-child)').each(function(i) {


        if (parseInt($(this).attr('data-buttonGroup')) == index) {
            $(this).show()

        } else {
            $(this).hide()
        }

    })

if($('#buttons').css('left') == '-280px'){
$('#buttons').css('left', 0) 
}



}