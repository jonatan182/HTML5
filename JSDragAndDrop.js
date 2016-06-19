// JavaScript Document
var elem_origen;
var elem_destino;
function comenzar(){
		elem_origen=document.getElementById("imagen");//identificamos el elemento imagen
		elem_destino= document.getElementById("zonadestino",false);//identificamos el elemento zona_destino
		
		elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false);//indicamos a la imagen que permanezca a la escucha del evento dragstar, dragstart desencadena la accion cuando empezamos a arrastrar la imagen ejecuta la funcion anonima. si el evento fuera dragend la accion se desencadena cuando terminemos de arrastrar la imagen. si el evento fuese drag, se desencadena la accion cuando se esta arrastrando la imagen es decir se dispara milesimas de segundo despues que se dispara el evento dragstart
		
		/*elem_destino.addEventListener("dragenter",function(e){
			e.preventDefault();//para resetear acciones que tiene el navegador por defecto, quitamos el candado 
		},false);*///indicamos a la zona destino que permanezca a la escucha del evento dragenter, dragenter desencadena la accion cuando el raton entra a la area de destino, ejecuta la funcion anonima que hace es modificar en la zonadestino el comportamiento por defecto que pudiera tener el navegador de turno con este evento
		
		elem_destino.addEventListener("dragenter",entrando,false);
		
		elem_destino.addEventListener("dragover",function(e){
			e.preventDefault();//para resetear acciones que tiene el navegador por defecto
		},false);//indicamos a la zona destino que permanezca a la escucha del evento dragover, dragover desencadena la accion cuando el raton se mueve en el area de destino. Con esta instruccion le decimos al navegador que bajo q este evento dragover tambien resetee el comportamiento por defecto y no haga nada al igual que hicimos con el evento dragenter
		
		elem_destino.addEventListener("drop",soltado,false);//indicamos a la zona destino que permanezca a la escucha del evento drop, drop desencadena la accion cuando el elemento es soltado en el area de destino
		
		elem_origen.addEventListener("dragend",terminado,false);//indicamos que el elemento origen esta a la escucha del evento dragend. dragend desencadena la accion cuando se temina de arrastrar la imagen, es decir cuando la soltamos
		
		elem_destino.addEventListener("dragleave",saliendo,false);//indicamos que el elemento origen esta a ka escucha dek evento dragleave. dragleave desencadena la accion cuando el elemento arrastrado sale del area de destino, es decir cuando la imagen sale de la zonadestino
	}
	
	function entrando(e){
		e.preventDefault();//para resetear acciones que tiene el navegador por defecto
		elem_destino.style.background="rgba(8,252,25,.8)";
	}
	function saliendo(e){
		e.preventDefault();
		elem_destino.style.background="#FFF";
	}

	
function comenzamos_arrastrar(e){//e para capturar el objeto que a desencadenado el evento en este caso dragstart
	var codigo = "<img src='"+elem_origen.getAttribute("src")+"'>";//con getAtribute capturamos el atributo que queramos del objeto en cuestion, es decir capturamos el atributo src del objeto imagen
	e.dataTransfer.setData("Text",codigo);//el metodo setData es un metodo del objeto dataTransfer que permite establecer cual informacion es la que queremos compartit, es decir los datos que seran trasnferidos, asi que la informacion que vamos a compartir es lo que esta en la variable codigo que es una imagen, este metodo setdata tiene 2 parametros el primero es el formato de la informacion que en este caso sera de formato Texto, y el segundo es la informacion que esta almacenada en la variable codigo
	
}
function soltado(e){//tambien recibe por parametro "e" el objeto que descencadena el evento
	e.preventDefault();//indicamos al navegador que resetee el comportamiento que tiene por defecto cuando soltamos un objeto que en este caso es la imagen
	elem_destino.innerHTML=e.dataTransfer.getData("Text");//innerHTML propiedad que permite es establecer un codigo html para el objeto elem_destino, con e.getData capturamos la informacion compartida, es decir hace lo contrario a setData, y tiene un parametro que es el formato en que esta la informacion
}
	function terminado(e){
		var elemento = e.target;//identificamos el elemento"objeto" que a descencadenado el evento y ese objeto lo almacenamos dentro de la variable elemento
		elemento.style.visibility="hidden";//para ocultar el elemento, el elemento en este ejemplo vendra ciendo la imagen, ya que la imgane es el objeto que descencadenara el evento dragend.
	}
	

window.addEventListener("load",comenzar,false);//cuando carga la pagina llamamos al metodo comenzar