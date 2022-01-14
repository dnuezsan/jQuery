'use strict'

$("document").ready(inicio)

function inicio(){
    console.log('Hoola');
    $("button").click(ocultarBoton)
}

//ejercicio 1
function ocultar() {
    $("*").hide()
}

//ejercicio 2
function ocultarBoton(){
    $("button").click($(this).hide())
}

//ejercicio 3