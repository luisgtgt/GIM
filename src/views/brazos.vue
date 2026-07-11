<template>
    <div class="vista-brazos">

        <button class="btn-volver" @click="$router.push('/inicio')">
            &#8592; Volver
        </button>

        <div class="layout-dividido">

            <aside class="panel-fijo">
                <div class="contenido-fijo">
                    <span class="etiqueta-fase">FASE 04</span>
                    <h1 class="titulo-principal">Brazos de <br>Acero</h1>
                    <div class="linea-separadora"></div>
                    <p class="subtitulo">
                        Aislamiento total y congestión máxima. Enfócate en la técnica estricta, evita el balanceo y
                        exprime cada contracción para hacer crecer tus bíceps y tríceps.
                    </p>
                </div>
                <div class="bg-decorativo"></div>
            </aside>

            <main class="panel-scroll">
                <div class="contenedor-ejercicios">

                    <article class="tarjeta-ejercicio" v-for="(ejercicio, index) in ejercicios" :key="index">
                        <div class="info-ejercicio">
                            <div class="numero-ejercicio">0{{ index + 1 }} // EJERCICIO</div>
                            <h2 class="nombre-ejercicio">{{ ejercicio.titulo }}</h2>
                            <p class="descripcion-ejercicio">{{ ejercicio.descripcion }}</p>
                        </div>

                        <div class="video-container">
                            <div class="video-wrapper">
                                <iframe :src="ejercicio.video" title="Video de ejercicio" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </article>

                </div>
            </main>

        </div>
    </div>
</template>

<script setup>
// Videos seleccionados con técnica estricta para el desarrollo de brazos
const ejercicios = [
    {
        titulo: 'Curl con Barra Recta',
        video: 'https://www.youtube.com/embed/kwG2ipFRgfo',
        descripcion: 'El constructor de masa por excelencia para el bíceps. Mantén los codos pegados a los costados del torso y no te balancees hacia atrás al subir. Si tienes que usar la espalda baja, estás levantando demasiado peso.'
    },
    {
        titulo: 'Press Francés (Rompecráneos)',
        video: 'https://www.youtube.com/embed/d_KZxkY_0cM',
        descripcion: 'Trabaja la cabeza larga del tríceps. Acuéstate en un banco, lleva la barra Z hacia tu frente o ligeramente por detrás de tu cabeza. Mantén los codos apuntando al techo y no los abras hacia los lados.'
    },
    {
        titulo: 'Curl Martillo con Mancuernas',
        video: 'https://www.youtube.com/embed/zC3nLlEvin4',
        descripcion: 'Desarrolla el músculo braquial y el braquiorradial, lo que empuja el bíceps hacia arriba y da grosor al antebrazo. Agarre neutro (palmas mirándose) y movimiento controlado en todo momento.'
    },
    {
        titulo: 'Extensión de Tríceps en Polea Alta',
        video: 'https://www.youtube.com/embed/2-LAMcpzODU',
        descripcion: 'Aislamiento puro para tríceps. Usa una cuerda para mayor rango de movimiento. Separa las manos al llegar abajo y bloquea los codos por un segundo. Tus brazos de los codos hacia arriba no deben moverse.'
    },
    {
        titulo: 'Curl Predicador o Banco Scott',
        video: 'https://www.youtube.com/embed/fIWP-FRFNm0',
        descripcion: 'Imposibilita hacer trampa. Al tener el brazo apoyado, el bíceps trabaja de forma aislada. Baja de forma controlada y no extiendas el codo al 100% en la parte inferior para evitar lesiones en el tendón.'
    }
]
</script>

<style scoped>
/* =========================================
   VARIABLES Y TEMA BASE (Púrpura/Dark)
========================================= */
.vista-brazos {
    background-color: #0c0a10;
    /* Tono muy oscuro con ligerísimo tinte morado */
    min-height: 100vh;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* =========================================
   BOTÓN DE REGRESO
========================================= */
.btn-volver {
    position: fixed;
    top: 20px;
    right: 20px;
    /* Lo pasamos a la derecha para no chocar con el diseño izquierdo */
    background-color: rgba(157, 78, 221, 0.1);
    color: #c77dff;
    border: 1px solid rgba(157, 78, 221, 0.4);
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 100;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-volver:hover {
    background-color: #9d4edd;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(157, 78, 221, 0.4);
}

/* =========================================
   LAYOUT DIVIDIDO (SPLIT SCREEN)
========================================= */
.layout-dividido {
    display: flex;
    width: 100%;
}

/* --- LADO IZQUIERDO: STICKY --- */
.panel-fijo {
    width: 40%;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 4rem;
    background: linear-gradient(135deg, #100b16 0%, #1a1025 100%);
    border-right: 1px solid rgba(157, 78, 221, 0.15);
    overflow: hidden;
}

.contenido-fijo {
    position: relative;
    z-index: 2;
}

.etiqueta-fase {
    color: #c77dff;
    letter-spacing: 6px;
    font-size: 0.9rem;
    font-weight: 800;
    display: block;
    margin-bottom: 1rem;
}

.titulo-principal {
    font-size: 4.5rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    letter-spacing: 2px;
    color: #fff;
}

.linea-separadora {
    width: 60px;
    height: 5px;
    background-color: #9d4edd;
    margin: 2rem 0;
    box-shadow: 0 0 15px rgba(157, 78, 221, 0.6);
}

.subtitulo {
    font-size: 1.1rem;
    color: #a7a0b3;
    line-height: 1.8;
}

/* Detalle visual de fondo en el panel izquierdo */
.bg-decorativo {
    position: absolute;
    top: -20%;
    left: -20%;
    width: 300px;
    height: 300px;
    background-color: rgba(157, 78, 221, 0.15);
    filter: blur(100px);
    border-radius: 50%;
    z-index: 1;
}

/* --- LADO DERECHO: SCROLL --- */
.panel-scroll {
    width: 60%;
    padding: 4rem 6rem;
    background-color: #0c0a10;
}

.contenedor-ejercicios {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}

/* Tarjeta Minimalista */
.tarjeta-ejercicio {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.numero-ejercicio {
    color: #9d4edd;
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
}

.nombre-ejercicio {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
    color: #ffffff;
}

.descripcion-ejercicio {
    color: #908a99;
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0;
    max-width: 90%;
}

/* Contenedor de Video */
.video-container {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.video-container:hover {
    transform: scale(1.02);
    border-color: rgba(157, 78, 221, 0.4);
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    background: #000;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* =========================================
   DISEÑO RESPONSIVE (MÓVILES Y TABLETS)
========================================= */
@media (max-width: 1024px) {
    .layout-dividido {
        flex-direction: column;
        /* Apila el panel izquierdo arriba del scroll */
    }

    .panel-fijo {
        width: 100%;
        height: auto;
        position: relative;
        /* Deja de ser sticky */
        padding: 6rem 2rem 4rem 2rem;
        border-right: none;
        border-bottom: 1px solid rgba(157, 78, 221, 0.2);
    }

    .titulo-principal {
        font-size: 3.5rem;
    }

    .panel-scroll {
        width: 100%;
        padding: 3rem 1.5rem;
    }

    .descripcion-ejercicio {
        max-width: 100%;
    }

    .btn-volver {
        top: 15px;
        right: 15px;
        background-color: rgba(10, 10, 10, 0.8);
    }
}
</style>