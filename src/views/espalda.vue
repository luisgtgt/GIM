<template>
    <q-page class="bg-grey-2 q-pb-xl">

        <!-- 1. Encabezado Llamativo con Gradiente -->
        <div class="header-banner bg-primary text-white flex flex-center q-pa-xl shadow-3">
            <div class="text-center">
                <q-icon name="fitness_center" size="4rem" class="q-mb-sm" />
                <h3 class="text-weight-bolder q-ma-none">Rutina de Espalda</h3>
                <p class="text-subtitle1 q-mt-sm opacity-80">Desarrolla amplitud y grosor muscular</p>
            </div>
        </div>

        <!-- 2. Botón Flotante para regresar al inicio (Mejora la UX) -->
        <q-page-sticky position="top-left" :offset="[18, 18]">
            <q-btn fab icon="arrow_back" color="secondary" class="shadow-4" @click="$router.push('/')" glossy>
                <q-tooltip>Volver al inicio</q-tooltip>
            </q-btn>
        </q-page-sticky>

        <!-- 3. Contenedor Principal de los Videos -->
        <div class="q-pa-md max-width-container q-mt-lg">
            <div class="row q-col-gutter-xl">

                <!-- Iteramos sobre la lista de ejercicios automáticamente -->
                <div class="col-12" v-for="(ejercicio, index) in ejercicios" :key="index">
                    <q-card class="my-card shadow-10 rounded-borders overflow-hidden">
                        <div class="row">

                            <!-- Lado del Video (Mitad izquierda en PC, arriba en móvil) -->
                            <div class="col-12 col-md-7 bg-black flex flex-center">
                                <q-video :src="ejercicio.video" :ratio="16 / 9" style="width: 100%; min-height: 280px;" />
                            </div>

                            <!-- Lado de la Descripción (Mitad derecha en PC, abajo en móvil) -->
                            <div class="col-12 col-md-5 q-pa-lg flex column justify-center bg-white">
                                <div class="text-overline text-secondary text-weight-bold">
                                    Ejercicio {{ index + 1 }}
                                </div>
                                <h5 class="text-h5 text-weight-bold q-mt-none q-mb-md text-primary">
                                    {{ ejercicio.titulo }}
                                </h5>
                                <p class="text-body1 text-grey-8 line-height-relaxed">
                                    {{ ejercicio.descripcion }}
                                </p>
                                <q-space />

                                <!-- Nota visual extra -->
                                <div class="row items-center q-mt-md text-grey-6">
                                    <q-icon name="info" size="xs" class="q-mr-xs" />
                                    <span class="text-caption">Mantén una postura correcta en cada repetición</span>
                                </div>
                            </div>

                        </div>
                    </q-card>
                </div>

            </div>
        </div>
    </q-page>
</template>

<script setup>
// Aquí defines tus 5 ejercicios. Solo cambia estos datos para tus otras vistas.
const ejercicios = [
    {
        titulo: 'Dominadas (Pull-ups)',
        video: 'https://www.youtube.com/embed/eGo4IYPNBG4',
        descripcion: 'El ejercicio rey para la amplitud de la espalda. Mantén el core firme, saca el pecho y tira con los codos hacia abajo asegurando un rango de movimiento completo.'
    },
    {
        titulo: 'Remo con Barra',
        video: 'https://www.youtube.com/embed/9efgcAjQe7E',
        descripcion: 'Fundamental para el grosor. Inclina el torso a unos 45 grados, mantén la espalda recta y lleva la barra hacia tu ombligo apretando fuertemente las escápulas.'
    },
    {
        titulo: 'Jalón al Pecho en Polea',
        video: 'https://www.youtube.com/embed/CAwf7n6Luuc',
        descripcion: 'Excelente para quienes aún no dominan las dominadas libres. Evita balancear el torso hacia atrás; el movimiento debe ser estrictamente enfocado en los dorsales.'
    },
    {
        titulo: 'Remo Gironda (Polea Baja)',
        video: 'https://www.youtube.com/embed/GZbfZ033f74',
        descripcion: 'Mantén una ligera flexión en las rodillas y el torso totalmente erguido. Tira del agarre hacia tu abdomen inferior, sintiendo la contracción central.'
    },
    {
        titulo: 'Pullover con Polea Alta',
        video: 'https://www.youtube.com/embed/0QhRj9G4B5Y',
        descripcion: 'Un gran ejercicio de aislamiento. Mantén los brazos ligeramente flexionados pero rígidos, bajando la barra hasta los muslos usando únicamente los dorsales.'
    }
]
</script>

<style scoped>
/* Controlamos el ancho para que no se estire demasiado en pantallas gigantes */
.max-width-container {
    max-width: 1000px;
    margin: 0 auto;
}

/* Efecto curvo y gradiente del banner superior */
.header-banner {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
}

.line-height-relaxed {
    line-height: 1.7;
}

/* Animación sutil al pasar el mouse por encima de la tarjeta */
.my-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.my-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15) !important;
}
</style>