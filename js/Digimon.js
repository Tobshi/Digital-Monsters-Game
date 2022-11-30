const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputMermaimon
let inputPalmon
let inputGreymon
let inputMetaletemon
let inputAlphamon
let inputPuppetmon
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo 
let music = new Audio('/Digital Monstes Fixed/mokepon/assets/BattleSpirit.mp3')
music.play();
music.loop =true;
music.volume = 0.1
let mapaBackground = new Image()
mapaBackground.src = './assets/Digital World.png'
let alturaBuscada
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 500


if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaBuscada = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaBuscada

class Mokepon {
    constructor(nombre, foto, vida,fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 65
        this.alto = 65
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0

    }

    pintarDigi() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            )
    }
}

let mermaimon = new Mokepon('Mermaimon', './assets/Wavemon.gif' , 5, './assets/Wavemon.gif',)

let palmon = new Mokepon('Palmon', './assets/Earthmon.gif', 5, './assets/Earthmon.gif')

let greymon = new Mokepon('Greymon', './assets/Hellmon.gif', 5, './assets/Hellmon.gif')

let metaletemon = new Mokepon('Metaletemon', './assets/metaletemon.gif', 5, './assets/metaletemon.gif')

let alphamon = new Mokepon('Alphamon', './assets/alphamon.gif', 5, './assets/alphamon.gif')

let puppetmon = new Mokepon('Puppetmon', './assets/puppetmon.gif', 5, './assets/puppetmon.gif')

const MERMAIMON_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]

mermaimon.ataques.push(...MERMAIMON_ATAQUES)

const PALMON_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]

palmon.ataques.push(...PALMON_ATAQUES)

const GREYMON_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]

greymon.ataques.push(...GREYMON_ATAQUES)

const METALETEMON_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]

metaletemon.ataques.push(...METALETEMON_ATAQUES)

const ALPHAMON_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
]

alphamon.ataques.push(...ALPHAMON_ATAQUES)

const PUPPETMON_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]

puppetmon.ataques.push(...PUPPETMON_ATAQUES)


mokepones.push(mermaimon,palmon,greymon,metaletemon,alphamon,puppetmon)


function iniciarJuego() {

    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputMermaimon = document.getElementById('Mermaimon')
     inputPalmon = document.getElementById('Palmon')
     inputGreymon = document.getElementById('Greymon')
     inputMetaletemon = document.getElementById('Metaletemon')
     inputAlphamon = document.getElementById('Alphamon')
     inputPuppetmon = document.getElementById('Puppetmon')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    

    
    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/login")
        .then(function (res){
            if(res.ok)
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })

        })
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    if (inputMermaimon.checked) {
        spanMascotaJugador.innerHTML = inputMermaimon.id
        mascotaJugador = inputMermaimon.id
    } else if (inputPalmon.checked) {
        spanMascotaJugador.innerHTML = inputPalmon.id
        mascotaJugador = inputPalmon.id
    } else if (inputGreymon.checked) {
        spanMascotaJugador.innerHTML = inputGreymon.id
        mascotaJugador = inputGreymon.id
    } else if (inputMetaletemon.checked) {
        spanMascotaJugador.innerHTML = inputMetaletemon.id
        mascotaJugador = inputMetaletemon.id
    } else if (inputAlphamon.checked) {
        spanMascotaJugador.innerHTML = inputAlphamon.id
        mascotaJugador = inputAlphamon.id
    } else if (inputPuppetmon.checked) {
        spanMascotaJugador.innerHTML = inputPuppetmon.id
        mascotaJugador = inputPuppetmon.id    
    } else { 
        if(alert('Select a Digital Monster!')){}
        else window.location.reload();
    }

    seleccionarDigimon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    seleccionarMascotaEnemigo()
}

function seleccionarDigimon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"  
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}



function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#013220'   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#013220'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#013220'
            }
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
    

}

function enviarAtaques(){
    fetch('http://localhost:8080/mokepon/${jugadorId}/ataques', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
       body: JSON.stringify({
        ataques: ataqueJugador
       }) 
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch('http://localhost:8080/mokepon/${enemigoId}/ataques')
    .then(function (res) {
        if (res.ok) {
            res.json()
            .then (function ({ataques}) {
               if (ataques.length === 5){
                ataqueEnemigo = ataques
                combate()
               } 
            })
        }
    })
}

function seleccionarMascotaEnemigo(enemigo) {   
        spanMascotaEnemigo.innerHTML=enemigo.nombre
        ataquesMokeponEnemigo=enemigo.ataques
        secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("DRAW!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("YOU WIN!! :)") 
    } else {
        crearMensajeFinal('YOU LOOSE! :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarDigi()

        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarDigi()
        revisarColision(mokepon)
    })
    
}

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"  
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok){
            res.json()
            .then(function({ enemigos }) {
               console.log(enemigos)
              mokeponesEnemigos = enemigos.map(function (enemigo) {
                let mokeponEnemigo = null
                const mokeponNombre = enemigo.mokepon.nombre || ""
                if (mokeponNombre === 'Mermaimon') {
                     mokeponEnemigo = new Mokepon('Mermaimon', './assets/Wavemon.gif' , 5, './assets/Wavemon.gif' , enemigo.id)
                } else if (mokeponNombre === 'Palmon'){
                    mokeponEnemigo = new Mokepon('Palmon', './assets/Earthmon.gif', 5, './assets/Earthmon.gif' , enemigo.id)
                } else if (mokeponNombre === 'Greymon'){
                     mokeponEnemigo = new Mokepon('Greymon', './assets/Hellmon.gif', 5, './assets/Hellmon.gif' , enemigo.id)
                } else if (mokeponNombre === 'Metaletemon'){
                     mokeponEnemigo = new Mokepon('Metaletemon', './assets/metaletemon.gif', 5, './assets/metaletemon.gif' , enemigo.id)
                } else if (mokeponNombre === 'Alphamon'){
                     mokeponEnemigo = new Mokepon('Alphamon', './assets/alphamon.gif', 5, './assets/alphamon.gif' , enemigo.id)
                } else if (mokeponNombre === 'Puppetmon'){
                     mokeponEnemigo = new Mokepon('Puppetmon', './assets/puppetmon.gif', 5, './assets/puppetmon.gif' , enemigo.id)
                }

                mokeponEnemigo.x = enemigo.x
                mokeponEnemigo.y = enemigo.y

                return mokeponEnemigo
               })
            })
        }
    })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){

   mascotaJugadorObjeto.velocidadX = 0
   mascotaJugadorObjeto.velocidadY = 0 
}

function PresionarTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            case "ArrowLeft":
            moverIzquierda()
            break
            case "ArrowRight":
            moverDerecha()
            break
                    


        default:
            break;
    }
}

function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', PresionarTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x


    const arribaMascota = 
    mascotaJugadorObjeto.y
    const abajoMascota = 
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota 
    = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota 
    = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
      return;  
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');enemigoId=enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)}

window.addEventListener('load', iniciarJuego)
