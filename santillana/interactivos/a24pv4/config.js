level="a";
grade=2;
bloque=4;
materia="pv";
resourceNumber = 4;
title="Sigamos el mapa"; //acepta algunas etiquetas html, como <i> y <b>
intro= '';

navigation= "numeric";  //numeric
transition = [
"horizontal", // horizontal 
"easeOutBack", //tipo de easing. (Consultar la referencia en http://gsgd.co.uk/sandbox/jquery/easing/ )
1000, //tiempo en milisegundos que tarda la transición
4 // En proceso, no modificar este valor
]; // posibilidad de arar clase con plug ins de drag and drop

sectionsData =[	

{//panel 1

	"bloqueado" : false, //true o false
	'buttons': ['undo']
},

{//panel 2
	"bloqueado" : true,//true o false
	'buttons': ['undo', 'bullhorn', 'volume-low']
},

{//panel 3	
	"bloqueado" : true,//true o false
	
		'buttons': ['undo', 'bullhorn', 'volume-low']
},

{//panel 4

	"bloqueado" : true,//true o false
	
		'buttons': ['undo']
}

]
//colocar aquí el apartado de "sugerencias" que viene en el guión, usando etiquetado básico de html (<p>,<i>,<b>,<br>,<ul>,<li>, etc...)
sugerencias="<p>A continuación ponemos a su disposición algunas recomendaciones para usar este recurso digital al final el tema:</p><ul><li><b>Sugerencia 1:</b> Antes de iniciar al interactivo asegurarse que todos los niños prestan atención al tutorial y les quedan claras las instrucciones sobre lo que hay que hacer, incluso pedirle a uno o dos niños que expliquen las instrucciones.</li><li><b>Sugerencia 2:</b> Durante el desarrollo del interactivo rondar por toda el aula asegurándose que todos estén contestando correctamente, en caso de detectar niños con dificultades darles estrategias como que cuenten los cuadros, que señalen con el dedo, propiciando que vayan repitiendo lo que hacen en voz alta con el fin de auto-monitorearse.</li><li><b>Sugerencia 3:</b>Para los niños con dificultades motrices importantes, guiarles la mano con el <i>mouse</i> para facilitar el movimiento del mismo.</li></ul><b>Tiempo de recurso:</b> 10 minutos.</ul>";
