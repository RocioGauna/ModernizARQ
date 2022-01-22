const productos = [{id: 1, titulo: "DIRECCIÓN DE OBRA", texto: "Profesionales de la construccion daran directivas a la hora de llevar a cabo un proyecto. Los mismos sera responsables de la secuencia de las tareas", textoAl: "a realizar, de interpretar la documentacion y velaran por que las mismas tengan resultados eficientes, seguros y que respondan a lo proyectado utilizando los materiales adecuados.", link: "PROYECTOS", link1: "<a href='quinchoalberdi.html'>QUINCHO ALBERDI</a><a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl: "btnCardCheck1", classCard:"card1"},

    {id: 2, titulo: "PROYECTO", texto: "Es toda la documentación gráfica y escrita necesaria para la ejecución de una obra de arquitectura", textoAl:"Incluye planos, esquemas, detalles técnicos, montajes e información precisa para que sea fundamental, para obtener una construcción sólida y bien acabada, tanto desde lo estético, estructural y de todos los servicios.", link: "PROYECTOS", link1: "<a href='quinchoalberdi.html'>QUINCHO ALBERDI</a><a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl: "btnCardCheck2", classCard:"card2"},

    {id: 3, titulo: "CROQUIS / ANTEPROYECTO", texto: "Consiste en un quema sencillo de plantas y volumetria, en el cual se expresan las ideas y formas básicas de un proyecto", textoAl: "Se concentra en distribución y confección de espacios, planos y volúmenes. No se expresan cuestiones constructivas, ni de terminaciones.", link: "PROYECTOS", link1: "<a href='quinchoalberdi.html'>QUINCHO ALBERDI</a><a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl: "btnCardCheck3", classCard:"card3"},

    {id: 4, titulo: "OBRA LLAVE EN MANO", texto: "Se denomina así a la ejecución total de una obra con todos los rubros y resoluciones necesarias", textoAl: "Esto conlleva la gestión y provisión de materiales, mano de obra y habilitaciones que la totalidad de la edificación requiera desde el inicio al final del proceso.", link: "PROYECTOS", link1: "<a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl:"btnCardCheck4", classCard: "card4"},

    {id: 5, titulo: "CONSTRUCCIÓN", texto: "Es la ejecución propiamente dicha de los proyectados. Consiste en respetar la documentación de manera fiel y precisa", textoAl:"velando por la seguridad de las personas intervinientes. Los resultados deben ser satisfactorios y cumplir con el encargo.", link: "PROYECTOS", link1: "<a href='quinchoalberdi.html'>QUINCHO ALBERDI</a><a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl: "btnCardCheck5", classCard: "card5"},

    {id: 6, titulo: "DOCUMENTACIÓN MUNICIPAL", texto: "Es la adecuación de una construcción (obra) o proyecto bajo normas y leyes vigentes", textoAl: "Resulta fundamental para la habilitación de la ejecución de las mismas, el correcto cobro de impuestos, el registrar el inmueble para sus propietarios y poder determinar el valor económico del mismo.", link: "PROYECTOS", link1: "<a href='sansebastian.html'>CASA SAN SEBASTIAN</a>", forLbl:"btnCardCheck6", classCard: "card6"},

    {id: 7, titulo: "REMODELACIÓN / RESTAURACIÓN ", texto: "Consiste en adaptar un espacio o bien, la totalidad de la edificación a los nuevos requerimientos del cliente", textoAl:"para satisfacer sus necesidades técnicas y estéticas.", link: "PROYECTOS", link1: "<a href='sansebastian.html'>CASA SAN SEBASTIAN</a><a href='12deoctubre.html'>BAÑO 12 DE OCTUBRE</a><a href='sanlorenzobaño.html'>BAÑO SAN LORENZO</a><a href='sanlorenzovivienda.html'>VIVIENDA SAN LORENZO</a>", forLbl:"btnCardCheck7", classCard:"card7"},

    {id: 8, titulo: "AMPLIACIÓN", texto: "Es una intervención constructiva que consiste en agregar espacios a una edificación ", textoAl:"o bien dar mayor superficie a alguno de ellos", link: "PROYECTOS", link1: "<a href='12deoctubre.html'>BAÑO 12 DE OCTUBRE</a>", forLbl: "btnCardCheck8", classCard: "card8"}
]

const carritoArray = [];
const productosJSON = JSON.stringify(productos);
localStorage.setItem("productos", productosJSON);
const productosParse = JSON.parse(localStorage.getItem("productos"));


for (const producto of productos) {
    let contCard = document.createElement("div");
    contCard.innerHTML = `
    <div class=${producto.classCard} id="card">
        <div class="contenedorTxt">
            <div class="txtH3">
                <h3>${producto.titulo}</h3>
            </div>
            <div class="contCardDescrip">
                <div class="contDescrip">
                    <div class="contTxtCard">
                        <p class="cardTxt">${producto.texto}</p>
                        <p class="cardTxtAl">${producto.textoAl}</p>
                    </div>                    
                    <div class="cardTxtAl contLinks">
                        <a href="/HTML/proyectos.html" style="color: #F2B138">${producto.link}</a>
                        <a>${producto.link1}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="btn-ver">
            <label for=${producto.forLbl} class="verMas">VER MAS</label>
        </div>

        <div class="borderDi">
            <!-- bordes card izquierda y derecha-->
        </div>

        <div class="borderAa">
            <!-- bordes card arriba y abajo-->
        </div>
    </div>                    
    `;
    document.getElementById("contenedorCards").appendChild(contCard);
}

let btnVerMas = document.querySelector('#btnVerMas');
let card = document.querySelector('#card');

btnVerMas.addEventListener('click', function (){
    if(card.classList.contains('card1')){
        card.classList.remove('card1');
    } else {
        card.classList.add('card1')
    }
});