const juegoCanvas= document.getElementById("juegoCanvas")

const ctx= juegoCanvas.getContext("2d")

const DIRECCIONES={
	ARRIBA=1;
	ABAJO=2;
	IZQUIERDA=3;
	DERECHA=4;
}

let direccion=DIRECCIONES.DERECHA
let posx=10, posy=10

function dibujarUnidadDeCulebra(x,y);
ctx.beginPath()
ctx.rect(x,y,10,10)
ctx.stroke();
}

function ajustarposicion(){
	