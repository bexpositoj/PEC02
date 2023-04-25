

// Almacenamos
var iframes = document.getElementById("container");
var index = 0;

	
// Array del Código de las diapositivas
const iframecode = [

// Pantalla principal 0
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <div class=\"titulo\"><h1>Animaci&oacuten 2D</h1> <h2>La fábrica de sueños</br>(OpenToonz)</h2></div><img class=\"imgpeq\" src=\"img/uoclogo.png\" alt=\"logotipo de la UOC\"><p id=\"nombre\"></br></br></br>Benjamín Expósito Jaramillo</br>TIDM - Cultura digital</br>Abril 2023</p> </div></div>",
// Indice 1
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Indice</h3> </br></br><button class=\"indice\" onclick=\"Diapositiva (2)\">1. Introducción</button> <button class=\"indice\" onclick=\"Diapositiva (3)\">2. Etapas de producción</button> <button class=\"indice\" onclick=\"Diapositiva (4)\">3. Storyboard</button> <button class=\"indice\" onclick=\"Diapositiva (7)\">4. Animática</button> <button class=\"indice\" onclick=\"Diapositiva (8)\">5. Animación (Keyframes y inbetweens)</button> <button class=\"indice\" onclick=\"Diapositiva (11)\">6. Limpieza</button> <button class=\"indice\" onclick=\"Diapositiva (12)\">7. Tinta y pintura</button><button class=\"indice\" onclick=\"Diapositiva (15)\">8. Montaje, composición y entrega</button> <button class=\"indice\" onclick=\"Diapositiva (16)\">9. Conclusión</button><button class=\"indice\" onclick=\"Diapositiva (17)\">10. Actividad lúdica final</button><p></br></br></br></br></br><b>Nota:</b></br> Pulsa F11 para entrar/salir del modo pantalla completa.</br>Pulsa la tecla Control y mueve la rueda del ratón para ajustar el zoom.</p></div></div>",
// Introduccion 2
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Introducci&oacuten</h3> <p> Como dijo Walt Disney: <i>si puedes soñarlo, puedes hacerlo</i>. Una cita apropiada tanto para la animación como para el metamedio ordenador, ya que ambos medios te permiten crear todo aquello que imagines.</p><p> En este ensayo interactivo analizaremos el medio de la animación 2D y su remediación, desde la perspectiva de Lev Manovich, enfocado en la aplicación OpenToonz, software originariamente desarrollado por la empresa Digital Video. </br></br><i>Recuerda que todo esto comenzó con un ratón</i>.</p><iframe class=\"quiz\" src=\"https://h5p.org/h5p/embed/1376086\" allowfullscreen=\"allowfullscreen\" title=\"Walt Disney\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script></div></div>",
// Etapas de la producción 3
"<div class= \"frame \">&nbsp;    <div class= \"diapositiva \"> <h3>Etapas de producción</h3> <p>Si bien la animación 2D tiene una gran cantidad de etapas, no nos centraremos en todas ellas, pero si en las más relevantes y compararemos el método tradicional con el método digital <i> \"Paperless \"</i>, un método de trabajo que no emplea ningún material físico, salvo medios digitales, lo que supone un gran ahorro de recursos y tiempo. </br></br>A continuación mostramos las etapas de producción, pero solo nos centraremos en: <i>Storyboard - Animática - Keyframes e Inbetweens - Limpieza - Tinta y pintura - Montaje, composición y entrega.</i></p>  <p><b>Preproducción:</b></br>Desarrollo del guion, storyboard, diseño y desarrollo visual, grabación de las voces, animática. </br>     </br><b>Producción:</b></br>Track breakdown, layout, fondos, keyframes, inbetween, prueba de línea, limpieza, tinta y pintura, cámara/escáner. </br>     </br><b>Postproducción:</b></br>Montaje y composición, efectos de postproducción, música y diseño de sonido, entrega del proyecto.</p> </br></br></br> <div class=\"centertext\"> <button class=\"sopa\" onclick=\"sopa()\">Actividad lúdica: Sopa de letras</button>   </div></div> </div> ",
// Storyboard 4
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Storyboard</h3> <p>El storyboard es una representación gráfica del guion, donde se representan los distintos planos de las escenas y contienen información de los movimientos de cámara, duración de los planos, descripciones o diálogos y otros datos técnicos que puedan ayudar a componer los planos <a href=\"https://es.wikipedia.org/wiki/Guion_gr%C3%A1fico\">(Wikipedia, 2023)</a>.</br></br> <b>Método tradicional.</b></br>Tradicionalmente, los storyboards se realizaban con papel y lápiz, aunque también se podía emplear color, si con ello se proporciona más información técnica para las siguientes etapas. Fue desarrollado por <a href=\"https://es.wikipedia.org/wiki/Georges_M%C3%A9li%C3%A8s\">Georges Méliès</a>, pero <a href=\"https://disneyypixar.fandom.com/es/wiki/Webb_Smith\">Webb Smith</a>, del estudio de Walt Disney, lo desarrolló tal y como lo conocemos. </p> <div class=\"centertext\" ><img class=\"imgpeq2\" src=\"./img/storyboard002.png\"><a href=\"https://es.khanacademy.org/humanities/hass-storytelling/storytelling-pixar-in-a-box/ah-piab-film-grammar/a/exercise-5-film\">Khan Academy: hacer un storyboard(2023)</a></div></div></div>",
// Storyboard 5
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Storyboard</h3> <p> <b>Remediación (OpenToonz): método \"Paperless\".</b> </br>Digital video tiene un software específico, estructurado desde el principio, para la realización de storyboards, llamado <a href=\"https://www.toonzpremium.com/tpshop/\">Story Planner</a>. Sin embargo des del propio OpenToonz también es sencillo crearlos, ya que sus proyectos están organizados por escenas. Puedes utilizar el primer fotograma para dibujar los planos en forma de matriz o emplear la <i>Xsheet (timeline)</i> para situar los fotogramas en el tiempo según el guion e incluso añadir animaciones y sonido que sirvan de guía. Para la confección del storyboard, se pueden emplear las siguientes herramientas:</br><br><b>Type tool (texto):</b> para añadir anotaciones de texto, como forma de edición vertical.</br><b>Geometric tool:</b> permite crear recuadros y figuras geométricas básicas.</br><b>Brush tool(pincel):</b> para dibujar los distintos planos. <br><br> <img class=\"imgpeq2\" src=\"./img/storyboard001.png\"> <i class=\"italictext\">Captura de pantalla de OpenToonz</i> <br><b>Nota: </b>el pincel te permite modificar el <i>grosor</i>, la <i>precisión</i> y el <i>suavizado</i> del trazo, que bien calibrado permite estabilizar el trazo de posibles temblores del pulso, etc. </p></div></div>",
// Storyboard 6
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Storyboard</h3> <p class=\"centertext\"><b>Actividad lúdica.</b> ¡Ordena el sytoryboard!</br><a href=\"https://www.sitepoint.com/image-manipulation-with-html5-canvas-a-sliding-puzzle-2/\">Bruce Alderman (2012). Código fuente del puzzle.</a></br><a href=\"https://www.acmi.net.au/education/school-program-and-resources/script-storyboard/\">ACMI Education (2020). Imagen del puzzle.</a></p><iframe id=\"slidingframe\" src=\"./diapositivas/sliding.html\" title=\"storyboard\"></iframe></dvi></div>",
//Animática 7
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Animática</h3> <p> La animática es considerada un storyboard animado. Cuando se alcanza esta etapa, las voces de los actores de doblaje ya han sido grabadas. En esta fase se trabaja el ritmo de las escenas, se incluyen diálogos e imágenes estáticas del storyboard con animaciones de desplazamiento, rotación y escala, que permiten ver si las escenas funcionan a nivel cinematográfico. La animátca se convertirá en la base principal de la animación <a href=\"https://www.crehana.com/blog/estilo-vida/produccion-de-animacion/\">(Alexandra Carranza - Producción de animación 3D. 2022)</a>.<b> </br></br>Método tradicional.</b></br>  Al igual que el storyboard, se realizaba a mano y después empleaban la moviola para comprobar las escenas <a href=\"https://es.wikipedia.org/wiki/Moviola\">(Moviola - Wikipedia, 2023)</a>.</br></br><b>Remediación (OpenToonz): método \"Paperless\".</b></br>Con los diálogos previamente grabados, se podría realizar la animática al mismo tiempo que el storyboard, dado que OpenToonz permite fácilmente hacer interpolaciones de posición, escala y rotación. Solo hay que coger el storyboard, importar el sonido de los diálogos y utilizar la <i>timeline</i> para repartir en el tiempo los planos. En esta fase el director está directamente implicado y es posible que se acaben modificando o añadiendo planos. En tal caso, el software permite realizar cambios en cualquier punto de la timeline y reproducirlos al instante, sin tener que capturar los dibujos en papel y luego montar de nuevo la animática.</br></br><iframe class=\"quiz\" src=\"https://h5p.org/h5p/embed/1376100\" title=\"Toonz / OpenToonz\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script></p></dvi></div>",
// Animación (Keyframes y inbetweens) 8
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Animación (Keyframes y inbetweens)</h3> <p> Al llegar a esta fase ya se han realizado las animaciones de las expresiones faciales a partir de los diálogos, los llamados cuadros de compostura o breakdowns. Después de ello, toca la realización de los <i>keyframes</i> o fotogramas clave en base a la animática, dibujados por los animadores seniors. Después se les traspasa a los <i>inbetweeners</i>, que se encargan de dibujar la secuencia de fotogramas entre un keyframe y otro o <i>Inbetweens</i>. A la animación resultante se la conoce como <i>Rough</i> o en bruto <a href=\"https://en.wikipedia.org/wiki/Inbetweening\">(Wikipedia, 2023)</a>.</br></br><b>Método tradicional.</b></br>El método tradicional se basa en realizar los keyframes y los inbetweens a mano, sobre papel y fotograma a fotograma. Después se revisan los resultados en la moviola y si algo no cuadra, debe ser re-dibujado y de nuevo revisado. En este proceso, los diálogos deben estar sincronizados y se puede incluir música, aunque esta se suele realizar más adelante <a href=\"https://youtu.be/mhfp6Z8z1cI\">(How Walt Disney Cartoons are made - YouTube, 2006)</a>.</br></br> Para la realización de los fotogramas inbetween, se utiliza una mesa de luz y folios con agujeros de encuadernación en el margen, que encajan en la mesa de luz. El procedimiento consiste en colocar primero el keyframe o el fotograma anterior. Encima de este, un folio donde se dibujará el siguiente fotograma y sobre este se podría colocar el siguiente keyframe, para ver de dónde vienes y a dónde vas. La luz de la mesa nos permite ver claramente los trazos dibujados en el folio que está debajo y nos da una pauta para dibujar cada frame <a href=\"http://animation-studio-stuff.blogspot.com/2009/\">(Basic equipment for hand-drawn animation, 2009)</a>.</p> </div></div>", 
// Animación (Keyframes y inbetweens) 9
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Animación (Keyframes y inbetweens)</h3> <p> <b>Remediación (OpenToonz): método \"Paperless\".</b></br>Con Toonz se puede realizar este paso dibujando fotograma a fotograma o también se puede emplear las funciones vectoriales, con la opción <i>Nuevo nivel vectorial</i>. Esta opción permite enlazar los trazos que dibujes en un keyframe, con el siguiente keyframe y después, puedes emplear la función de <i>interpolación</i> para generar <i>todos los fotogramas intermedios</i>, ahorrando una grandísima cantidad de tiempo <a href=\"https://youtu.be/EFJreOUtey4\">(Profesor Saitama - Animaciones 2D automáticas con Opentoonz, 2022)</a>.</br></br> Para la animación fotograma a fotograma, OpenToonz implementa <i>Onion skin</i>, una función que imita el comportamiento del <i>papel cebolla</i>, lo que permite ver uno o varios fotogramas anteriores (en rojo) y posteriores (en verde), tal hi como lo hacemos en la mesa de luz.</br><img class=\"imgpeq\" src=\"./img/pelota.png\"><i class=\"italictext\">Captura de pantalla de OpenToonz</i></br>OpenToonz, dispone de un panel para configurar la interfaz del programa en función de la fase del desarrollo en la que estemos, proporcionando las herramientas adecuadas y organizando la interfaz para hacer más eficiente trabajar en cada fase.</br></br><img class=\"imgpeq\" src=\"./img/panelModos.png\"><i class=\"italictext\" >Captura de pantalla de OpenToonz</i></p> </div></div>",
// Animación (Keyframes y inbetweens) 10
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Animación (Keyframes y inbetweens)</h3><p><b>Animación interactiva:</b> Cambia de fotograma haciendo clic en las flechas.</p><iframe id=\"anima\" src=\"./diapositivas/animacion.html\" title=\"storyboard\"></iframe> <iframe class=\"quiz\" src=\"https://h5p.org/h5p/embed/1376779\" title=\"Tasa de fotogramas\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script></div></div>",
// Limpieza 11
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Limpieza</h3> <p>La limpieza consiste en la eliminación de los trazos innecesarios de los fotogramas en bruto o <i>rough</i>, después de revisar que todas las animaciones funcionan. Es decir, pasar a limpio.  </br></br><b>Método tradicional.</b></br>Para pasar a limpio los fotogramas, se calca cada fotograma en <i>láminas de celuloide transparentes</i>, omitiendo trazos innecesarios, quedando el dibujo limpio y definitivo.</br></br><b>Remediación (OpenToonz): método \"Paperless\".</b></br> Si se ha realizado la animación con interpolaciones vectoriales, esta etapa no se tendría que hacer, porque los trazos ya quedarían limpios, pero si se ha dibujado en mapa de bits y fotograma a fotograma, sí tendrás que realizar esta etapa. Para la limpieza, lo que se suele utilizar es una capa vectorial, ya que los gráficos vectoriales son escalables a cualquier resolución sin que haya pérdidas de calidad. Igual que en el método tradicional, deberemos <i>calcar</i> cada fotograma, para ello podemos reducir la <i>opacidad</i> del fotograma en bruto, para que no nos confundan los trazos originales con los trazos que vayamos realizando. A modo de asistencia, para que queden los trazos bien definidos, podemos utilizar las herramientas <i>Pinch Tool</i> y <i>Control Point Editor Tool</i> ya que nos permitirán ajustar las curvas y los puntos de cada sección de los trazos. Hay más herramientas como <i>Pump Tool</i> que <i>incha</i> los trazos, <i>Cutter Tool</i> que <i>corta</i> los trazos, etc.</br></br><b>Nota:</b> Utilizar el modo <i>Cleanup</i> de Opentoonz, sirve principalmente para la limpieza de dibujos en papel escaneados. Permite limpiar la textura del papel de la imagen escaneada y discriminar trazos por el color.</p> <img class=\"imgpeq\" src=\"./img/cleanup.png\"></div></div>",
// Tinta y pintura 12
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Tinta y pintura</h3> <p> Una vez tenemos el fotograma limpio, se procede a añadir color. </br></br><b>Método tradicional.</b></br> En el documental de Disney <a href=\"https://youtu.be/mhfp6Z8z1cI\">How Walt Disney Cartoons are made</a>, aparte de ver como las mujeres se encargaban de producir en cadena fotogramas limpios, como en una fábrica, podemos ver que se valían de laboratorios donde producían sus propios pigmentos, que después aplicaban igualmente en cadena. Básicamente, es un trabajo de fuerza bruta, con un gran consumo de materiales y mano de obra.</p> <iframe class=\"quiz\" src=\"https://h5p.org/h5p/embed/1379318\" title=\"Tinta y pintura\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script></div></div>",
// Tinta y pintura 13
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Tinta y pintura</h3> <p><b>Remediación (OpenToonz): método \"Paperless\".</b></br>OpenToonz es muy eficiente a la hora de pintar. Primero debemos asegurarnos de que nuestro dibujo es <i>rellenable</i>, esto quiere decir que todos los trazos forman áreas cerradas y se puede comprobar automáticamente con la opción <i>View -> Fill Check</i>, que nos rellenará todas las áreas rellenables con un color gris indicando que es correcto o si hay algún trazo que no está unido, veremos el fondo. En este caso podemos usar la herramienta <i>Tape Tool</i>, para enganchar trazos que no están unidos como si se tratara de <i>cinta adhesiva</i>. Una vez comprobado esto, vamos al modo <i>Palette</i> donde podremos crear una paleta de colores manualmente o podemos generar una paleta de colores completa, a partir de una imagen que tengamos. Para pintar vamos al modo <i>InknPaint</i> y nos valdremos de la herramienta <i>Fill Tool</i>, que nos permite rellenar áreas de un color que tengamos en la paleta.</p> <div class=\"centertext\"> <img class=\"imgpeq4\" src=\"./img/tintaypintura.png\"> <a href=\"https://youtu.be/ti25WucHMvs\">Profesor Saitama, 2022</a></div> <p>La paleta de colores tiene más funciones, como el de poder modificar también la <i>Opacidad</i> sirviendo para por ejemplo ocultar los trazos utilizados para señalizar las sombras del dibujo, que normalmente son de un color distinto. Y por último, si pintamos con un color de la paleta y después modificamos la paleta, el color cambiará en todos los lugares donde se haya aplicado ese color automáticamente, en contraste con el método tradicional, que se habría tenido que modificar cada fotograma <a href=\"https://youtu.be/ti25WucHMvs\">( Profesor Saitama - OpenToonz Tutorial - Cómo PINTAR, 2022)</a>.</p></div></div>",
// Tinta y pintura 14
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Tinta y pintura</h3> <p class=\"centertext\"><b>Imágenes interactivas.</b> Yuxtaposición de la Animática y el fotograma final. </br><a href=\"https://www.lawebdelprogramador.com/Código/JavaScript/7013-Mover-una-cortina-por-encima-de-una-imagen.html\">Lawebdelprogramador.com (2021). Código fuente del puzzle.</a><a href=\"https://www.cartoonbrew.com/sponsored-by-toon-boom/an-animator-explains-the-upsides-of-learning-paperless-animation-with-toon-boom-harmony-206764.html \"></br>Cartoon Brew Connect(2021). Imágenes del puzzle.</a></br></p> <iframe id=\"finalframe\"src=\"./diapositivas/clippath.html\" title=\"De animática a fotograma final\"></iframe> </div></div>",
// Montaje y composición 15
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"><h3>Montaje, composición y entrega</h3><p>Una vez ya se han confeccionado todos los fotogramas finales de la animación, se procede a la postproducción.</br></br> <b>Método tradicional.</b></br> En este punto de la producción ya se ha capturado cada fotograma y fondo secuencialmente con cámaras y también se ha creado la banda sonora y los efectos de sonido. Ahora se procede al montaje y la composición. El montaje se realizaba con tijeras y cemento para película, para unir las escenas<a href=\"\">(Wikipedia Montaje, 2023)</a> y luego se grababa junto con el audio en películas de 35mm, para su distribución <a href=\"https://es.wikipedia.org/wiki/Pel%C3%ADcula_de_35_mm\">(Wikipedia 35mm , 2023)</a>.</br></br> <b>Remediación (OpenToonz): método \"Paperless\".</b></br>Para el montaje normalmente se emplean editores de video profesionales, aunque desde OpenToonz sería técnicamente posible hacerlo y funcionaría para plataformas como Netflix. Pero si quisiéramos que se reprodujera en la gran pantalla, no tendríamos más remedio que utilizar un programa de edición <a href=\"https://es.wikipedia.org/wiki/Digital_Cinema_Package\">(Digital cinema package, 2023)</a>. Para el montaje y composición, se podría utilizar el modo <i>Xsheet</i>. Es donde podremos trabajar el montaje del clip y hacer efectos de transición. Una vez organizamos los fotogramas iríamos a la opción de <i>Render -> Output Settings</i> donde configuraríamos las propiedades del fichero de salida, <i>resolución</i>, <i>relación de aspecto</i>, <i>tipo de fichero</i>, <i>ancho de bits del color</i>,<i>frame rate</i>, etc. y generaríamos nuestro fichero.</br></p> </div></div>",
// Conclusión 16
"<div class=\"frame\">&nbsp; <div class=\"diapositiva\"> <h3>Conclusión</h3> <p>Después de repasar el proceso de producción de la animación 2D, tanto del medio como el metamedio, podemos ver todo lo que aporta la remediación. La producción es ahora tan eficiente que un equipo pequeño podría producir una película de animación y siendo OpenToonz un software de código abierto, la animación 2D queda completamente democratizada, pero eso no quiere decir que sustituya al medio original completamente. Es cierto que hoy en día los dispositivos analógicos de grabación han caído en desuso. Es mucho más fácil acceder al medio digital, por lo que las producciones que quieren emplear medios físicos para la animación, emplean también el metamedio. Como por ejemplo el largometraje <a href=\"https://es.wikipedia.org/wiki/Loving_Vincent\">Loving Vincent (2017)</a>, que se realizó con 65.000 cuadros al óleo para la animación, pero empleó equipos digitales y actores reales <a href=\"https://youtu.be/53p0afJsq_A\">(Pintar una película: Loving Vincent - Euromaxx, 2016).</a> </br></br> Podemos concluir que la re-mediación de la animación tradicional puede ser parcial o completa. Parcial, porque se pueden re-mediar solo algunas etapas de la producción y mantener el dibujo y/o la pintura en el contexto físico (teniendo en cuenta como \"medio\", la totalidad del proceso de producción). Y re-mediación completa, donde no se utiliza ningún recurso físico, siendo la simulación un nuevo medio que permite un mayor control, gracias a esa dimensión extra que otorga el software.</p> </div></div>",
// Canvas 17
"<div class=\"frame\">&nbsp; <div class=\"diapositiva2\"> <h3>Actividad lúdica final</h3> <p class=\"centertext\"><b>Actividad lúdica.</b> Dibuja. </br><a href=\"https://codepen.io/alperentalaslioglu/pen/yPGgvP\">HTML5 Canvas Paint Application (CodePen.io).</a> </br></p>  </div><iframe id=\"finalframe\"src=\"./diapositivas/HTML5_canvas_paint/index.html\" title=\"Paint\"></iframe></div>"
];


// Muestra la diapositiva
function mostrarDiapositiva() {
	
	iframes.innerHTML = iframecode[index];
}

// cambia de diapositiva a la derecha
function siguienteDiapositiva() {

	index++;
	if (index >= iframecode.length) {
		index = 0;
	}
	mostrarDiapositiva();
}

// cambia de diapositiva a la izquierda
function anteriorDiapositiva() {

	index--;
	if (index < 0) {
		index = iframecode.length - 1;
	}
	mostrarDiapositiva();
}
 
// Cambiar index
function Diapositiva ( i ) {

	index = i;
	mostrarDiapositiva();
}

function sopa() {
	iframes.innerHTML = "<div class=\"frame\"><iframe src=\"https://h5p.org/h5p/embed/1373821\" height=\"860\" title=\"Sopa de letras\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script></div>";
}


// Muestra la primera diapositiva
mostrarDiapositiva();


// Inputs para cambiar de diapositivas.
document.getElementById('siguiente').addEventListener('click', siguienteDiapositiva);
document.getElementById('anterior').addEventListener('click', anteriorDiapositiva);

var left = false;
var right = false;
document.addEventListener('keydown', function(event) {
	if (event.key === 'ArrowRight' && right === false ) {
		siguienteDiapositiva(); 
		right = true; 
		element.classList.toggle('container');
	}
	else if (event.key === 'ArrowLeft' && left === false ) {  
		anteriorDiapositiva(); 
		left = true; 
		element.classList.toggle('container');
	}

});
document.addEventListener('keyup', function(event) {
	if (event.key === 'ArrowRight') {
		right = false;
		element.classList.toggle('container');
	}
	else if (event.key === 'ArrowLeft') {
		left = false;
		element.classList.toggle('container');
	}

});
