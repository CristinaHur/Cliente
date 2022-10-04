
window.onload=cargado;
function cargado(){
	document.formulario.convertir.onkeypress =conversion();

}

function conversion(decimal){
	decimal=parseInt(document.formulario.decimal.value); 	
	let binario = document.formulario.binario.value ;
	binario = decimal.toString(2);
	let octal = document.formulario.octal.value;
	octal = decimal.toString(8);
	let hexadecimal = document.formulario.hexadecimal.value;
	hexadecimal =decimal.toString(16);
}
