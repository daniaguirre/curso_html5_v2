//esta declaracion siempre debe de ir en un web worker
onmessage = function(evento) {

	//el worker recibe los datos que le envia el hilo principal en la propiedad evento.dada
	//al mensaje que haya enviado el hilo principal le agregamos el texto "hola"
	var mensaje = "hola " + evento.data;

	//el worker tiene acceso a la funcion postMessage
	//la cual permite enviar los datos procesados al hilo principal
	postMessage(mensaje);

}
