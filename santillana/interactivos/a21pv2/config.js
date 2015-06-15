level="a";
grade=2;
bloque=1;
materia="pv";
resourceNumber = 2;
title="Siguiendo la pista"; //acepta algunas etiquetas html, como <i> y <b>
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
	'buttons': ['undo', 'bullhorn']
},

{//panel 3	
	"bloqueado" : true,//true o false
	
		'buttons': ['undo', 'bullhorn']
},

{//panel 4

	"bloqueado" : true,//true o false
	
		'buttons': ['undo']
}

]
//colocar aquí el apartado de "sugerencias" que viene en el guión, usando etiquetado básico de html (<p>,<i>,<b>,<br>,<ul>,<li>, etc...)
sugerencias="<p>A continuación ponemos a su disposición algunas recomendaciones para usar este recurso digital durante el, desarrollo del tema:</p> <ul> <li><b>Sugerencia 1:</b> Al inicio de cada reactivo se sugiere que la educadora se asegure que todos los niños sepan qué objeto se les está pidiendo y lo describa junto con ellos, para darles una referencia sobre lo que buscan y sea más sencillo. Por ejemplo: ¿qué vamos a buscar?... ¿y cómo son los lentes?, ¿quién tiene unos? ¿cómo se ven?... ahora vamos a buscarlos.</li><li> <b>Sugerencia 2:</b> Durante el interactivo se le sugiere que vaya rondando por el salón para identificar a los niños que tengan dificultades, en caso de ser así darles algunas estrategias para escanear la pantalla con los ojos de una manera organizada y sistematizada (de arriba a abajo de izquierda a derecha por ejemplo)</li></ul> <b>Tiempo de recurso:</b> 5 minutos ";