$(function(){

})


$.fn.setCursor = function(cursor) {

    this.removeClass (function (index, css) {
    return (css.match (/\bcursor_\S+/g) || []).join('');
});
   
this.addClass(cursor)
};

color=[];
switch (grade){

case 1:

color= ['#006738', '#71bf43','#bed62f','#2275bc','#00adef','#ed1c24']

break;

case 2:

color= ['#994d9d', '#522e91','#a2fcdf','#769836','#00adc4','#bed62f'] // #99ca3c  , #dfd7ea

break;

case 3:

color= ['#e64d25', '#f7931d','#ffdd00','#0097a1','#6cc8be','#cf1381']

break;
}


$('#next1, #prev1').css('background-color', color[1]);

$('#next2, #prev2').css('background-color', color[2]);


    setFlatShadow($('.button [class*=" icon-"]'), color[1], false);


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;


} // hex to rgb







function setFlatShadow(element, hexColor, alpha, isBoxObject){

if(isBoxObject){

shadowType = "box-shadow"

}else{

shadowType = "text-shadow"
}


increment= " "
reduce = 30
total = 10
 element.css(shadowType, 0)
if(alpha ==false ){
_color = 'rgb(' + (  hexToRgb(hexColor).r  - reduce ) + ', ' + (  hexToRgb(hexColor).g  - reduce ) + ', ' + (  hexToRgb(hexColor).b  - reduce ) + ')'

for(i=1; i<=total; i++){

 if(i<total){

increment = increment + _color + ' ' + i+ 'px ' + i+ 'px,'  
}else{

increment = increment + _color+ ' ' + i+ 'px ' + i+ 'px'  
}
 element.css(shadowType, increment)
}

}else{

for(i=1; i<=total; i++){

  decrement = (1 - ( i * .1 / 3.3 )).toFixed(2);
console.log( decrement )
_color = 'rgba(' + (  hexToRgb(navAnchorColor).r  - reduce ) + ', ' + (  hexToRgb(navAnchorColor).g  - reduce ) + ', ' + (  hexToRgb(navAnchorColor).b  - reduce ) + ', ' + decrement  + ')'

if(i<total){

increment = increment + _color + ' ' + i+ 'px ' + i+ 'px,'  
}else{

increment = increment + _color+ ' ' + i+ 'px ' + i+ 'px'  
}

//alert(increment)
element.css(shadowType, increment)

}



}// termina else

//alert(_color)



}// end getRGB

//alert( hexToRgb(color[1]).g ); // ;
