function detener() {
	var miVideo = document.querySelector('video');
	miVideo.pause();
}

function reanudar() {
	var miVideo = document.querySelector('video');
	miVideo.play();
}

function detenerPresionado() {
	var miVideo = document.querySelector('video');
	var contenedorTexto = document.querySelector("#contenedor-texto");
	contenedorTexto.innerHTML = "Manten presionado el mouse en esta zona para iniciar video";

	miVideo.pause();
}

function reanudarPresionado() {
	var miVideo = document.querySelector('video');
	miVideo.play();

	var contenedorTexto = document.querySelector("#contenedor-texto");
	contenedorTexto.innerHTML = "Suelta el boton para parar el video";

}

window.onload = function() {

	var reproductorVideo = document.querySelector('video');

	/** hacemos que el video se detenga y se reanude usando eventos**/
	reproductorVideo.addEventListener("mouseover", reanudar);
	reproductorVideo.addEventListener("mouseout", detener);

	var caja = document.querySelector("#contenedor-texto");
	caja.addEventListener("mousedown", reanudarPresionado);

	var caja = document.querySelector("#contenedor-texto");
	caja.addEventListener("mouseup", detenerPresionado);

}