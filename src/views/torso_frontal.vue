<template>
    <div class="vista-pecho-abdomen">

        <button class="btn-volver" @click="$router.push('/inicio')">
            &#8592; Volver al inicio
        </button>

        <header class="hero-pecho">
            <div class="hero-content">
                <span class="etiqueta-fase">FASE 02</span>
                <h1 class="titulo-principal">Torso Frontal</h1>
                <div class="linea-separadora"></div>
                <p class="subtitulo">
                    Potencia en cada empuje y máxima estabilidad en el core. Trabaja el pectoral mayor, la porción
                    clavicular y esculpe la pared abdominal.
                </p>
            </div>
        </header>

        <main class="contenedor-ejercicios">

            <article class="tarjeta-ejercicio" v-for="(ejercicio, index) in ejercicios" :key="index">
                <div class="video-container">
                    <div class="video-wrapper">
                        <iframe :src="ejercicio.video" title="Video de ejercicio" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>

                <div class="info-container panel-cristal">
                    <div class="numero-ejercicio">EJERCICIO 0{{ index + 1 }}</div>
                    <h2 class="nombre-ejercicio">{{ ejercicio.titulo }}</h2>
                    <p class="descripcion-ejercicio">{{ ejercicio.descripcion }}</p>
                </div>
            </article>

        </main>
    </div>
</template>

<script setup>
// Matriz de 5 ejercicios combinados (3 de Pecho, 2 de Abdomen) con enlaces reales
const ejercicios = [
    {
        titulo: 'Press de Banca Plano',
        video: 'https://www.youtube.com/embed/rT7DgCr-3pg',
        descripcion: 'El rey de los ejercicios de empuje. Planta bien los pies en el suelo, haz una retracción escapular (junta los omóplatos) y baja la barra de forma controlada hasta la parte media de tu esternón.'
    },
    {
        titulo: 'Press Inclinado con Mancuernas',
        video: 'https://www.youtube.com/watch?v=MkMf308jXww',
        descripcion: 'Enfocado en la porción clavicular (pecho superior). Ajusta el banco a unos 30-45 grados. Las mancuernas permiten un mayor rango de movimiento y corrigen desequilibrios de fuerza entre ambos brazos.'
    },
    {
        titulo: 'Cruces en Polea Alta',
        video: 'https://www.youtube.com/embed/Iwe6AmxVf7o',
        descripcion: 'Aislamiento puro para hipertrofia. Mantén el torso ligeramente inclinado hacia adelante y estable. El movimiento debe ser como si intentaras abrazar un árbol, apretando el pecho al máximo al juntar las manos.'
    },
    {
        titulo: 'Crunch Abdominal en Polea',
        video: 'https://www.youtube.com/embed/2EPF-U2iF2s',
        descripcion: 'Un ejercicio brutal para dar grosor al abdomen. Arrodíllate dando la espalda a la polea y usa tus abdominales para flexionar la columna. No jales con los brazos ni uses el peso de tu cadera.'
    },
    {
        titulo: 'Elevación de Piernas Colgado',
        video: 'https://www.youtube.com/embed/7FqgN1DNgAE',
        descripcion: 'Trabajo intenso para el abdomen inferior y el core. Cuélgate de una barra y eleva las piernas hasta formar un ángulo de 90 grados. Si es muy difícil, empieza elevando solo las rodillas. Evita balancearte.'
    }
]
</script>

<style scoped>
/* =========================================
   VARIABLES Y TEMA BASE
========================================= */
.vista-pecho-abdomen {
    /* Fondo oscuro con un sutil patrón de líneas diagonales de alta tecnología */
    background: repeating-linear-gradient(45deg,
            #08080a,
            #08080a 10px,
            #0a0a0d 10px,
            #0a0a0d 20px);
    min-height: 100vh;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 5rem;
}

/* =========================================
   BOTÓN DE REGRESO (Color Escarlata)
========================================= */
.btn-volver {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: rgba(230, 57, 70, 0.1);
    color: #e63946;
    /* Rojo de acento */
    border: 1px solid rgba(230, 57, 70, 0.3);
    padding: 10px 20px;
    border-radius: 4px;
    /* Bordes cuadrados para aspecto más agresivo */
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
    background-color: #e63946;
    color: #fff;
    transform: translateX(-5px);
}

/* =========================================
   CABECERA DIAGONAL (HERO)
========================================= */
.hero-pecho {
    background: linear-gradient(to right, rgba(10, 10, 12, 0.9), rgba(230, 57, 70, 0.2)),
        url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    padding: 8rem 2rem 6rem 2rem;
    text-align: left;
    /* El secreto: clip-path corta el div en diagonal */
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    margin-bottom: 4rem;
}

.hero-content {
    max-width: 1000px;
    margin: 0 auto;
}

.etiqueta-fase {
    color: #e63946;
    letter-spacing: 5px;
    font-size: 0.9rem;
    font-weight: 800;
    display: block;
    margin-bottom: 0.5rem;
}

.titulo-principal {
    font-size: 4.5rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 1px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
}

.linea-separadora {
    width: 80px;
    height: 5px;
    background-color: #e63946;
    margin: 1.5rem 0;
    box-shadow: 0 0 10px rgba(230, 57, 70, 0.6);
}

.subtitulo {
    font-size: 1.15rem;
    color: #dcdce0;
    line-height: 1.6;
    max-width: 600px;
}

/* =========================================
   DISEÑO CSS GRID SUPERPUESTO (OVERLAP)
========================================= */
.contenedor-ejercicios {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    /* Gran separación para el efecto flotante */
}

.tarjeta-ejercicio {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
}

/* Control del video */
.video-container {
    grid-column: 1 / 9;
    /* El video ocupa 8 de las 12 columnas */
    grid-row: 1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    /* Mantiene proporción 16:9 estricta */
    height: 0;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Control del Texto (Panel Cristal) */
.info-container {
    grid-column: 7 / 13;
    /* Empieza en la col 7, superponiéndose al video */
    grid-row: 1;
    z-index: 2;
    /* Asegura que el texto esté por encima del video */
    padding: 3rem;
    border-left: 4px solid #e63946;
    /* Acento lateral rojo */
}

/* Efecto Glassmorphism */
.panel-cristal {
    background: rgba(18, 18, 22, 0.85);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.6);
}

/* ===== MAGIA: ALTERNAR POSICIONES ===== */
/* Si la tarjeta es PAR, invertimos quién va a la izquierda y quién a la derecha */
.tarjeta-ejercicio:nth-child(even) .video-container {
    grid-column: 5 / 13;
}

.tarjeta-ejercicio:nth-child(even) .info-container {
    grid-column: 1 / 7;
    border-left: none;
    border-right: 4px solid #e63946;
    text-align: right;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.6);
}

/* Textos internos */
.numero-ejercicio {
    color: #e63946;
    font-weight: 800;
    letter-spacing: 3px;
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
}

.nombre-ejercicio {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
    color: #ffffff;
    line-height: 1.1;
}

.descripcion-ejercicio {
    color: #b0b0b8;
    line-height: 1.8;
    font-size: 1.05rem;
    margin: 0;
}

/* =========================================
DISEÑO RESPONSIVE (MÓVILES)
========================================= */
@media (max-width: 900px) {

    /* En tablets y móviles, quitamos el efecto overlap y volvemos a apilar */
    .hero-pecho {
        padding: 6rem 1.5rem 4rem 1.5rem;
        clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    }

    .titulo-principal {
        font-size: 3rem;
    }

    .tarjeta-ejercicio {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .video-container {
        width: 100%;
        grid-column: auto;
        border-radius: 8px 8px 0 0;
    }

    .info-container,
    .tarjeta-ejercicio:nth-child(even) .info-container {
        width: 100%;
        grid-column: auto;
        padding: 2rem;
        border-left: none;
        border-right: none;
        border-top: 4px solid #e63946;
        border-radius: 0 0 8px 8px;
        text-align: left;
        margin-top: -10px;
        /* Para fusionarse visualmente con el video */
    }
}
</style>