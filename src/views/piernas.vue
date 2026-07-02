<template>
    <q-page class="q-pa-md max-width-container">
        <!-- Botón Volver -->
        <div class="q-mb-md">
            <q-btn flat icon="arrow_back" label="Volver al menú" color="primary" @click="$router.push('/')" />
        </div>

        <!-- Título -->
        <h4 class="text-weight-bold text-center q-mt-none q-mb-lg text-primary">
            Rutina de Espalda
        </h4>

        <!-- Video de YouTube Responsivo -->
        <q-card flat bordered class="overflow-hidden q-mb-lg rounded-borders bg-black">
            <q-video src="https://www.youtube.com/embed/S_8q0sK6l34" :ratio="16 / 9" />
        </q-card>

        <!-- Explicación -->
        <q-card flat bordered class="bg-grey-1">
            <q-card-section>
                <div class="text-h6 text-secondary q-mb-sm">Instrucciones de ejecución:</div>
                <p class="text-body1 line-height-relaxed q-mb-none">
                    Mantén la espalda recta en todo momento. Concéntrate en juntar las escápulas al tirar del peso y
                    controla la fase excéntrica (bajada) del movimiento para maximizar la hipertrofia.
                </p>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
// El script queda limpio usando setup. El enrutamiento y la lógica de vista es simple.
</script>

<style scoped>
.max-width-container {
    max-width: 800px;
    margin: 0 auto;
}

.line-height-relaxed {
    line-height: 1.6;
}
</style>