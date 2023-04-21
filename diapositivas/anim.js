// Almacenamos
var imgae = document.getElementById("minitabla");
var index = 0;

// Array del Código de las imgs
const imgcode = [

"<img class=\"imgpeq3\" src=\"../img/pelota.0001.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0002.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0003.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0004.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0005.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0006.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0007.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0008.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0009.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0010.png\">",
"<img class=\"imgpeq3\" src=\"../img/pelota.0011.png\">"


];


// Muestra la img
function mostrarimg() {
	
	imgae.innerHTML = imgcode[index];
}

// cambia de img a la derecha
function siguienteimg() {

	index++;
	if (index >= imgcode.length) {
		index = 0;
	}
	mostrarimg();
}

// cambia de img a la izquierda
function anteriorimg() {

	index--;
	if (index < 0) {
		index = imgcode.length - 1;
	}
	mostrarimg();
}


// Muestra la primera img
mostrarimg();


// Inputs para cambiar de imgs, bien por clics o por teclas de cursor.


document.getElementById('adelante').addEventListener('click', siguienteimg);
document.getElementById('atras').addEventListener('click', anteriorimg);