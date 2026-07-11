<template>
    <div class="vista-espalda">

        <button class="btn-volver" @click="$router.push('/inicio')">
            &#8592; Volver al inicio
        </button>

        <header class="hero-espalda">
            <div class="hero-content">
                <span class="etiqueta-fase">FASE 01</span>
                <h1 class="titulo-principal">Zona de Espalda</h1>
                <div class="linea-separadora"></div>
                <p class="subtitulo">
                    Desarrolla amplitud, grosor y fuerza. Concéntrate en la retracción escapular y controla la fase
                    excéntrica en cada movimiento.
                </p>
            </div>
        </header>

        <main class="contenedor-ejercicios">

            <article class="tarjeta-ejercicio" v-for="(ejercicio, index) in ejercicios" :key="index">
                <div class="video-container">
                    <iframe :src="ejercicio.video" title="Video de ejercicio" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div class="info-container">
                    <div class="numero-ejercicio">EJERCICIO 0{{ index + 1 }}</div>
                    <h2 class="nombre-ejercicio">{{ ejercicio.titulo }}</h2>
                    <p class="descripcion-ejercicio">{{ ejercicio.descripcion }}</p>
                </div>
            </article>

        </main>
    </div>
</template>

<script setup>
// Matriz de datos con videos reales de YouTube enfocados en técnica correcta
const ejercicios = [
    {
        titulo: 'Dominadas Clásicas',
        video: 'https://www.youtube.com/embed/aVUcaTHtadA',
        descripcion: 'El ejercicio base para la amplitud. Saca el pecho, mantén una ligera inclinación hacia atrás y tira de la barra intentando llevar los codos hacia tus costillas. Evita encoger los hombros.'
    },
    {
        titulo: 'Remo con Barra (Inclinado)',
        video: 'https://www.youtube.com/embed/VBhFIZWMKUs',
        descripcion: 'Constructor masivo de grosor. Inclina el torso casi paralelo al suelo manteniendo la curvatura natural de tu zona lumbar. Tira de la barra hacia tu ombligo apretando las escápulas fuerte arriba.'
    },
    {
        titulo: 'Jalón al Pecho en Polea',
        video: 'https://www.youtube.com/embed/Ln0CZzrlTEw',
        descripcion: 'Excelente para aislamiento. Fija bien las piernas, mantén el pecho alto y tira de la barra hacia la parte superior de tu pecho. Si usas los bíceps para bajar el peso, estás haciéndolo mal; inicia el movimiento desde los dorsales.'
    },
    {
        titulo: 'Remo con Mancuerna (A una mano)',
        video: 'https://www.youtube.com/embed/Pkr1WW3p05A',
        descripcion: 'Ideal para corregir desequilibrios musculares. Apoya una mano en un banco, mantén la espalda paralela al piso y lleva la mancuerna hacia tu cadera (como si la guardaras en el bolsillo) en lugar de subirla recta hacia el pecho.'
    },
    {
        titulo: 'Pullover en Polea Alta',
        video: 'https://www.youtube.com/embed/ESxrBlMSlIk',
        descripcion: 'Un remate perfecto que aísla el dorsal ancho. Mantén una ligera flexión en los codos (rígidos durante todo el movimiento) y empuja la barra recta hacia tus muslos, sintiendo el estiramiento completo al subir.'
    }
]
</script>

<style scoped>
/* =========================================
   ESTILOS BASE Y TEMA OSCURO
========================================= */
.vista-espalda {
    background-color: #0a0a0c;
    min-height: 100vh;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 4rem;
}

/* =========================================
   BOTÓN FLOTANTE DE REGRESO
========================================= */
.btn-volver {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: rgba(20, 20, 25, 0.8);
    color: #f39c12;
    border: 1px solid rgba(243, 156, 18, 0.3);
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 100;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
}

.btn-volver:hover {
    background-color: #f39c12;
    color: #000;
    transform: translateX(-5px);
}

/* =========================================
   CABECERA TEMÁTICA (HERO)
========================================= */
.hero-espalda {
    /* Fondo con una imagen de textura/gimnasio oscura */
    background: linear-gradient(to bottom, rgba(10, 10, 12, 0.4), #0a0a0c),
        url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    padding: 8rem 2rem 4rem 2rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.etiqueta-fase {
    color: #f39c12;
    letter-spacing: 4px;
    font-size: 0.85rem;
    font-weight: 700;
}

.titulo-principal {
    font-size: 4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 1rem 0;
    letter-spacing: 2px;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
}

.linea-separadora {
    width: 60px;
    height: 4px;
    background-color: #f39c12;
    margin: 0 auto 1.5rem auto;
    border-radius: 2px;
}

.subtitulo {
    font-size: 1.1rem;
    color: #a0a0a5;
    line-height: 1.6;
}

/* =========================================
   GRILLA DE EJERCICIOS
========================================= */
.contenedor-ejercicios {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    /* Espacio entre cada ejercicio */
}

.tarjeta-ejercicio {
    display: flex;
    background-color: #121216;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.tarjeta-ejercicio:hover {
    transform: translateY(-5px);
    border-color: rgba(243, 156, 18, 0.3);
}

/* Manejo del Iframe de YouTube */
.video-container {
    flex: 1;
    /* Ocupa la mitad del espacio */
    position: relative;
    min-width: 50%;
    background-color: #000;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Contenido de texto */
.info-container {
    flex: 1;
    /* Ocupa la otra mitad */
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.numero-ejercicio {
    color: #f39c12;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}

.nombre-ejercicio {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
    color: #ffffff;
}

.descripcion-ejercicio {
    color: #9e9ea5;
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0;
}

/* =========================================
   DISEÑO RESPONSIVE (MÓVILES)
========================================= */
@media (max-width: 768px) {
    .titulo-principal {
        font-size: 2.5rem;
    }

    .tarjeta-ejercicio {
        flex-direction: column;
        /* Apila el video arriba y texto abajo en celular */
    }

    .video-container {
        width: 100%;
        padding-top: 56.25%;
        /* Ratio 16:9 estricto para iframes en móvil */
    }

    .info-container {
        padding: 2rem 1.5rem;
    }

    .contenedor-ejercicios {
        padding: 1rem;
    }
}
</style>