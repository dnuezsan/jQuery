'use strict'

$("document").ready(inicio)

function inicio() {
    console.log('Hoola');
    $("button").click()
    cambiarCuadroTexto()
}

//ejercicio 1
function ocultar() {
    $("*").hide()
}

//ejercicio 2
function ocultarBoton() {
    $("button").click($(this).hide())
}

//ejercicio 3
function ocultarParrafo() {
    $("button").click($(".intro").eq(1).hide())
}

//ejercicio 4
function ocultarParrafo2() {
    $("button").click($("p:first").hide())
}

//ejercicio 5
function ocultarLi1() {
    $("button").click($("ul li:first").hide())
}

//ejercicio 6
function ocultarul1() {
    $("button").click($("ul:first").hide())
}

//ejercicio 7
function enlaces() { //Si se crean los elementos ya no se pueden usar eventos
    $("button").click($(document.createElement("a")).attr("href", "#").html("<br />enlace 1").appendTo("body"))
    $("button").click($(document.createElement("a")).attr("href", "#").html("<br />enlace 2").appendTo("body"))
    $("a").hide()
}
//OJO  //Si se crean los elementos ya no se pueden usar eventos
function ocultarEnlaces() {
    $("button").click($("p").hide())
}

//Ejercicio 8
/* function links(params) {
    $(document.createElement('a')).
} */
//Ejercicio 9
function ocultarBotonDinamico() {
    $(document.createElement('button'))
        .html('pulsa')
        .attr("id", "boton")
        .appendTo("body")

    //No se por que con this referencia el boton equivocado aunque el evento se dirija por id
    $(document).on("click", "#boton", () => {
        $("#boton").hide()
    })
}

//Ejercicio 10

function crearTabla() {
    $(document.createElement('table'))
        .html("<tr><td></td></tr>" +
            "<tr><td></td></tr>" +
            "<tr><td></td></tr>").appendTo("body")

    $("table tr:odd").css("background-color", "red")
    $("table tr:even").css("background-color", "green")
}
//Ejercicio 11
function parrafoFugaz() {
    $(document.createElement('p')).appendTo('body').attr("id", 'fugaz').html(
        "Esto es un parrafo de prueba")
    $(document).on('dblclick', '#fugaz', () => {
        $("#fugaz").hide()
    })

}
//Ejercicio 12
function clicanicano() {
    $(document.createElement('p')).attr("id", "clicanicus").appendTo('body').html('Parrafo de prueba')
    $(document).on('mouseup', '#clicanicus', function () {
        alert('alertado pero no alarmado')
    })
}
//Ejercicio 13
function elPoderDelHover() {
    $("p").eq(1).hover( //toma el primero de los dos parrafos
        () => console.log('hover dentro'),
        () => console.log('hover fuera'))
}
//Ejercicio 14
function cambiarCuadroTexto() {
    $('.cuadros').focus(()=>{
        $(".cuadros").css('background-color', 'green')}
       /* css('background-color', 'green') */
    )
    $('.cuadros').blur(()=>{
        $(".cuadros").css('background-color', 'white')}
    )
    /* $("input").eq(1).focus($("input").css("background-color", "green")) */
    //$("input").blur($("input").css("background-color", "red"))
}
//Ejercicio 15
function crearDivs() {
    $(document.createElement("div")).attr("class", "caja").appendTo("body")
    $(document.createElement("button")).attr("class", "boton").html("Pulsa").appendTo(".caja")

    $(".caja").clone().appendTo("body")

    $(document).on("click", "div button", function () {
        $(this).parent().hide()
    })
}

