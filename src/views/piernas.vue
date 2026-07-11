<template>
    <div class="vista-piernas">

        <button class="btn-volver" @click="$router.push('/inicio')">
            &#8592; Volver al inicio
        </button>

        <header class="hero-piernas">
            <div class="hero-content">
                <span class="etiqueta-fase">FASE 03</span>
                <h1 class="titulo-principal">Tren Inferior</h1>
                <div class="linea-separadora"></div>
                <p class="subtitulo">
                    La base de un físico poderoso. Construye fuerza brutal en tus cuádriceps, desarrolla isquiotibiales
                    de acero y maximiza la potencia de tus glúteos y gemelos.
                </p>
            </div>
        </header>

        <main class="timeline-container">
            <div class="timeline">

                <article class="timeline-item" v-for="(ejercicio, index) in ejercicios" :key="index">
                    <div class="timeline-dot"></div>

                    <div class="timeline-content panel-neón">
                        <div class="info-container">
                            <div class="numero-ejercicio">EJERCICIO 0{{ index + 1 }}</div>
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
                    </div>
                </article>

            </div>
        </main>
    </div>
</template>

<script setup>
// Videos reales y verificados enfocados en técnica de hipertrofia
const ejercicios = [
    {
        titulo: 'Sentadilla Libre',
        video: 'https://www.youtube.com/embed/o5Q_AZW6fzw',
        descripcion: 'El rey indiscutible del tren inferior. Mantén la espalda firme, el core apretado y baja empujando ligeramente las rodillas hacia afuera en dirección a la punta de tus pies. Rompe el paralelo si tu movilidad lo permite.'
    },
    {
        titulo: 'Sentadilla Búlgara',
        video: 'https://www.youtube.com/embed/6d6HlPWgAUs',
        descripcion: 'Un ejercicio unilateral destructor de piernas. Apoya un pie en un banco atrás. Si quieres enfocar cuádriceps, mantén el torso recto; si quieres enfocar glúteos, inclina ligeramente el torso hacia adelante.'
    },
    {
        titulo: 'Peso Muerto Rumano (RDL)',
        video: 'https://www.youtube.com/embed/1wSotyy6qzM',
        descripcion: 'Fundamental para isquios y glúteos. El movimiento es una bisagra de cadera pura. Empuja el glúteo hacia atrás manteniendo las piernas casi rectas (ligera flexión). No bajes más allá de donde tu cadera deje de ir hacia atrás.'
    },
    {
        titulo: 'Prensa de Piernas a 45°',
        video: 'https://www.youtube.com/embed/4wrJgdeokU4',
        descripcion: 'Excelente para mover cargas altas de forma segura. Apoya toda la espalda y la cabeza en el respaldo. Coloca los pies al ancho de los hombros y nunca bloquees las rodillas bruscamente al final de la extensión.'
    },
    {
        titulo: 'Elevación de Talones (Gemelos)',
        video: 'https://www.youtube.com/embed/yyoubmNCDk4',
        descripcion: 'El secreto para unos gemelos grandes es el rango de movimiento completo y la pausa. Sube de forma explosiva, aguanta un segundo arriba, y baja lentamente sintiendo el máximo estiramiento del tendón de Aquiles.'
    }
]
</script>

<style scoped>
/* =========================================
   VARIABLES Y TEMA BASE
========================================= */
.vista-piernas {
    background-color: #050914;
    /* Azul oscuro casi negro */
    min-height: 100vh;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 6rem;
}

/* =========================================
   BOTÓN DE REGRESO (Cian Neón)
========================================= */
.btn-volver {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: rgba(0, 240, 255, 0.1);
    color: #00f0ff;
    border: 1px solid rgba(0, 240, 255, 0.4);
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 100;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.btn-volver:hover {
    background-color: #00f0ff;
    color: #000;
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.6);
}

/* =========================================
   CABECERA (HERO)
========================================= */
.hero-piernas {
    background: linear-gradient(to bottom, rgba(5, 9, 20, 0.7), #050914),
        url('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    padding: 8rem 2rem 5rem 2rem;
    text-align: center;
}

.etiqueta-fase {
    color: #00f0ff;
    letter-spacing: 5px;
    font-size: 0.95rem;
    font-weight: 800;
    display: block;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
}

.titulo-principal {
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 3px;
}

.linea-separadora {
    width: 100px;
    height: 4px;
    background-color: #00f0ff;
    margin: 1.5rem auto;
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.8);
}

.subtitulo {
    font-size: 1.15rem;
    color: #8b9bb4;
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
}

/* =========================================
   LÍNEA DE TIEMPO (TIMELINE)
========================================= */
.timeline-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
}

.timeline {
    position: relative;
}

/* La línea central brillante */
.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: rgba(0, 240, 255, 0.2);
    transform: translateX(-50%);
    border-radius: 2px;
}

/* Elementos de la línea de tiempo */
.timeline-item {
    position: relative;
    width: 50%;
    padding: 2rem 3rem;
    box-sizing: border-box;
}

/* Lado izquierdo vs Lado derecho */
.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

/* El punto central (Nodo) */
.timeline-dot {
    position: absolute;
    top: 50%;
    right: -10px;
    /* Para impares */
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #00f0ff;
    border-radius: 50%;
    box-shadow: 0 0 15px #00f0ff, 0 0 30px #00f0ff;
    z-index: 2;
}

.timeline-item:nth-child(even) .timeline-dot {
    left: -10px;
    /* Para pares */
}

/* Contenedor tipo Tarjeta Neón */
.timeline-content {
    background: #0b1120;
    border: 1px solid rgba(0, 240, 255, 0.15);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease, border-color 0.4s ease;
}

.timeline-item:hover .timeline-content {
    transform: translateY(-5px);
    border-color: rgba(0, 240, 255, 0.6);
    box-shadow: 0 15px 40px rgba(0, 240, 255, 0.1);
}

/* Textos internos */
.info-container {
    padding: 2rem;
}

.numero-ejercicio {
    color: #00f0ff;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}

.nombre-ejercicio {
    font-size: 1.7rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
    color: #ffffff;
}

.descripcion-ejercicio {
    color: #a0b0c0;
    line-height: 1.6;
    font-size: 1rem;
    margin: 0;
}

/* Contenedor de Video */
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
@media (max-width: 900px) {
    .titulo-principal {
        font-size: 2.8rem;
    }

    .timeline::before {
        left: 20px;
        /* Mueve la línea central a la izquierda */
    }

    .timeline-item {
        width: 100%;
        padding: 1.5rem 0 1.5rem 3rem;
        left: 0 !important;
    }

    .timeline-dot {
        left: 10px !important;
    }

    .info-container {
        padding: 1.5rem;
    }
}
</style>