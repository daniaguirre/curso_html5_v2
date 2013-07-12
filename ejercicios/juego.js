window.onload = function() {
	//Obtiene el canvas y el contexto
	var canvas = document.querySelector("canvas");
	var contexto = canvas.getContext("2d");

	//PREPARA la imagen de fondo
	var imgFondoLista = false;
	var imagenFondo = new Image();
	imagenFondo.src = "../imagenes/fondo_juego.png";
	imagenFondo.onload = function() {
		//si ya se termino de cargar la imagen ponemos esta bandera como true
		imgFondoLista = true;
	};

	//Prepara la imagen del heroe
	var imgHeroeLista = false;
	var imagenHeroe = new Image();
	imagenHeroe.src = "../imagenes/heroe.png";
	imagenHeroe.onload = function() {
		//si ya se termino de cargar la imagen ponemos esta bandera como true
		imgHeroeLista = true;
	};

	//Prepara la imagen del mostruo
	var imgMonstruoLista = false;
	var imagenMonstruo = new Image();
	imagenMonstruo.src = "../imagenes/monstruo.png";
	imagenMonstruo.onload = function() {
		//si ya se termino de cargar la imagen ponemos esta bandera como true
		imgMonstruoLista = true;
	};

	//OBJETOS QUE REPRESENTAN A LOS ELEMENTOS DEL JUEGO
	var heroe = {
		velocidad : 1 // Cuantos pixeles se mueve el heroe por segundo
	};
	var monstruo = {};
	var monstruosCapturados = 0;

	//-------------------------SI YA SE GUARDO EL RECORD----------------------------------
	//COMENTARIO C1 -- AGREGAR LOGICA PARA CHECAR SI YA SE TIENE EN EL LOCAL STORAGE 
	//los monstruos capturados, si es asi actualizar monstruosCapturados (recuerde hacer un parseInt)
	//de lo contrario agregar los monstruos capturados al localStorage

	// guarda los codigos de las teclas presionadas
	var teclasPresionadas = {};

	//Dibuja el fondo, el heroe y al monstruo
	var dibujaJuego = function() {
		if (imgFondoLista) {
			contexto.drawImage(imagenFondo, 0, 0);
		}

		if (imgHeroeLista) {
			contexto.drawImage(imagenHeroe, heroe.x, heroe.y);
		}

		if (imgMonstruoLista) {
			contexto.drawImage(imagenMonstruo, monstruo.x, monstruo.y);
		}

		//pintamos cuantos monstruos lleva capturados
		contexto.fillStyle = "rgb(250, 250, 250)";
		contexto.font = "24px Helvetica";
		contexto.textAlign = "left";
		contexto.textBaseline = "top";
		
		//COMENTARIO C2
		//cambie a la variable mensaje para que obtena el total de monstrous capturados
		//pero del localStorage
		var mensaje = "Monstruos capturados: " + monstruosCapturados;
		contexto.fillText(mensaje, 32, 32);
	};

	// genera un nuevo par de coordenadas para el heroe y el monstruo
	//esta funcion la invocamos cada que el heroe captura un monstruo
	var reseteaCoordenadas = function() {
		heroe.x = canvas.width / 2;
		heroe.y = canvas.height / 2;

		//Genera una posicion aleatoria para el monstruo
		monstruo.x = 32 + (Math.random() * (canvas.width - 64));
		monstruo.y = 32 + (Math.random() * (canvas.height - 64));
	};

	// checa cual de las teclas con flechitas se ha oprimido
	//si la posicion del heroe se traslapa
	var actualizaCoordenadas = function() {

		//Si esta oprimiendo la flecha de arriba
		if (38 in teclasPresionadas) {
			//lo movemos un pixel arriba
			heroe.y = heroe.y - heroe.velocidad;
		}

		//Si esta oprimiendo la flecha de abajo
		if (40 in teclasPresionadas) {

			//lo movemos un pixel abajo
			heroe.y = heroe.y + heroe.velocidad;
		}

		//Si esta oprimiendo la flecha izquierda

		if (37 in teclasPresionadas) {

			//lo movemos un pixel a la izquierda
			heroe.x = heroe.x - heroe.velocidad;
		}

		//Si esta oprimiendo la flecha derecha
		if (39 in teclasPresionadas) {

			//lo movemos un pixel a la derecha
			heroe.x = heroe.x + heroe.velocidad;
		}

		// Si se traslapan las imagenes, entonces el heroe ha capturado un monstruo
		if (heroe.x <= (monstruo.x + 32) && monstruo.x <= (heroe.x + 32) && heroe.y <= (monstruo.y + 32) && monstruo.y <= (heroe.y + 32)) {
			//incrementamos el contador de monstruos capturados
			monstruosCapturados = monstruosCapturados + 1;

			//-------------------------GUARDAMOS LOS MONSTRUOS CAPTURADOS----------------------------------
			//-------COMENTARIO C3
			//Actualizar la variable del localStorage
			
			reseteaCoordenadas();
		}

	};

	// Esta funcion controla toda la logica del juego
	var principalJuego = function() {
		//asignamos coordenadas al heroe y al monstruo
		actualizaCoordenadas();
		dibujaJuego();
	};

	//cuando el usuario presione una tecla, guardamos el codigo de dicha tecla
	//en el objeto teclasPresionadas
	window.addEventListener("keydown", function(evento) {
		teclasPresionadas[evento.keyCode] = true;
	}, false);

	//si suelta la tecla, borramos del objeto telcasPresionadas
	//el codigo de la tecla que se presiono
	window.addEventListener("keyup", function(evento) {
		delete teclasPresionadas[evento.keyCode];
	}, false);
	// Inicia el Juego!
	//asignamos coordenadas iniciales al heroe y al monstruo
	reseteaCoordenadas();
	//ejecuta la logica del juego cada que pase 1 mili segundo
	setInterval(principalJuego, 1);

	//-------------------------AGREGAMOS LOGICA DEL BOTON----------------------------------
	//COMENTARIO C4
	//AGREGAR LOGICA DEL BOTON AQUI
	//al dar click debe de poner la variable monstruosCapturados a cero y actualizar al localStorage
	

}
