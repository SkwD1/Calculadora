function botao(num){
	var concat = document.calc.tela.value;
	document.calc.tela.value = concat + num;	
}
function resultado(){
	resultado = 0;
	resultado = document.getElementById("tela").value;

	document.getElementById("tela").value = '';
	document.getElementById("tela").value = eval(resultado);
		
}
function limpar(){
	//document.getElementById("tela").value = '';
	window.location.reload()
}
