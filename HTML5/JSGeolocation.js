// JavaScript Document
function comenzar(){
	var botonUbicacion = document.getElementById("dame_ubicacion");
	botonUbicacion.addEventListener("click",obtener,false);
	function obtener(){
		
		var parametros = {enableHighAccuracy: true, timeout:10000, maximumAge:60000};//con enableHighAccuracy en true indicamos a nuestra pagina web  que para obtener la ubicacion se utilice si esta disponible  los dispositivos GPS    y que la presicion sea mayor, el segundo valor Timeout indica el tiempo en milisegundos para llevar acabo la localizacion, si no se optiene devuelve TIMEOUT. El Tercer valor maximumAge determina si ha de ir a la cache a buscar la ultima localizacion, es decir si se encuentra en la memoria cache del navegador con una posicion obtenida hace  menos de 60 segundos entonces la obtiene del navegador enves de pedir la ubicacion utilizando GPS, lo que hace es utilizar  la ultima ubicacion que hay almacenada en la cache del navegador si esta tuvo lugar hace menos de 60 segundos, en el caso de que no encuentre ninguna posicion hace menos de 60 segundos entonces si obtiene una nueva posicion con un tiempo limite de obtenerla de 10 segundos, esa posicion quedara almacenada en la cache con la cual si volvemos a pedir la ubicacion antes de 60 segundos entonces cojera la posicion de la cache en ves de pedir una nueva, es una forma de ahorrar recursos
	   	
		//navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores, parametros);//obtenemos la posicion, nos devuelve un objeto position, y ese es capturado en la funcion mostrar_posicion en el atributo "posicion, puede ser cuaquier nombre", si hay errores entonces son capturados por la function gestion_errores en el atributo error, puede ser cualquier nombres, si hay un error llama a la funcion gestionar_errores, si no hay errores nos devuelve la posicion y llama a mostrar_posicion pasando la posicion por el parametro posicion. el tercer argumento es una configuracion que pasamos como por ejemplo con que exactitud queremos que obtenga la posicion del usuario, tambien determinar el tiempo limite para obtener la posicion del usuario, y tambien podemos establecer  cada cuanto tiempo queremos obtener la posicion del usuario, incluso accediendo a la cache del navegador. Todo esto se refleja bien cuando estamos utilizando un dispositivo movil.
		
		navigator.geolocation.watchPosition(mostrar_posicion, gestion_errores, parametros);//con watchPosition estamos haciendo casi lo mismo que arriba pero con un pequeño matiz, y es que nosotros estamos llamando al metodo mostrar posicion, con watchPosition cambia el sentido del maximumAge por que lo que estamas haciendo es llamar a mostrar_posicion 1 ves cada 60 segundos. es decir le estamos piediendo a nuestra pagina web que nos actualice la ubicacion del usuario cada minuto, por lo tanto cada minuto "60segundos" llamara al metodo mostrar posicion, watchPosition es muy utilizado en dispositivos moviles
		
		
	//La diferencia es que getCurrentPosition  ejecuta la función de éxito una única vez, es decir, se ejecuta y te da la posición. Es cierto que con el tercer argumento podemos hacer que se ejecute más de una vez cada x segundos. Pero la diferencia es que watchPosition se ejecuta varias veces tanto si se lo indicamos con el tercer argumento (como a getCurrentPosition) como si se cambia de posición (getCurrentPosition no se ejecuta si se cambia de posición)

	}
	function mostrar_posicion(posicion){//recibe un parametro que es la posicion que recuperamos mediante getCurrentPosition
		var ubicacion = document.getElementById("ubicacion");//identificamos la zona para poner nuestra posicion
		//imprimimos en texto la latitud, longitud y exactitud
		/*var miUbicacion = "";
		miUbicacion += "Latitud: " + posicion.coords.latitude+"<br>";//recuperamos la latitud, y la concatenamos con un salto de linea
		miUbicacion += "Longitud: " + posicion.coords.longitude+"<br>";//recuperamos la longitud y la concatenamos con un salto de linea
		miUbicacion += "Exactitud: " + posicion.coords.accuracy+"<br>";//recuperamos la exactitud y la concatenamos con un salto de linea*/
	
	//dibujamos mapa en vez de imprimir en texto
	var mimapa = "http://maps.google.com/maps/api/staticmap?center=" +posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;//Url De La Api De Google Maps
		
		//ubicacion.innerHTML=miUbicacion;
		
		ubicacion.innerHTML="<img src='"+ mimapa +"'>";
		
	}
}
function gestion_errores(error){//recibe un parametro que es el error que llegue a causar getCurrentPosition
	//alert("Ha habido un error"+error.code + " " + error.message);//imprimimos el codigo del error y el mensage del error
	/*if(error.message=="User denied Geolocation"){
		alert("Debes permitir el uso de la geolocalizacion en tu navegador");
	}*/
	if(error.code==1){
		alert("Debes permitir el uso de la geolocalizacion en tu navegador");
	}
}
window.addEventListener("load",comenzar,false);