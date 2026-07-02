<template>
    <q-page class="q-pa-md">
        <h4 class="text-center q-mt-none q-mb-lg text-primary text-weight-bold">
            Selecciona tu Grupo Muscular
        </h4>

        <div class="row q-col-gutter-lg justify-center max-width-container">
            <!-- Opción 1: Espalda -->
            <div class="col-12 col-sm-6">
                <q-card class="cursor-pointer hover-effect" @click="$router.push('/espalda')">
                    <q-card-section class="bg-dark text-white text-center q-py-xl">
                        <div class="text-h5">1 - Ejercicios de Espalda</div>
                    </q-card-section>
                </q-card>
            </div>

            <!-- Opción 2: Pecho y Abdomen (torso_frontal) -->
            <div class="col-12 col-sm-6">
                <q-card class="cursor-pointer hover-effect" @click="$router.push('/torso-frontal')">
                    <q-card-section class="bg-dark text-white text-center q-py-xl">
                        <div class="text-h5">2 - Pecho y Abdomen</div>
                    </q-card-section>
                </q-card>
            </div>

            <!-- Opción 3: Piernas -->
            <div class="col-12 col-sm-6">
                <q-card class="cursor-pointer hover-effect" @click="$router.push('/piernas')">
                    <q-card-section class="bg-dark text-white text-center q-py-xl">
                        <div class="text-h5">3 - Piernas</div>
                    </q-card-section>
                </q-card>
            </div>

            <!-- Opción 4: Brazos -->
            <div class="col-12 col-sm-6">
                <q-card class="cursor-pointer hover-effect" @click="$router.push('/brazos')">
                    <q-card-section class="bg-dark text-white text-center q-py-xl">
                        <div class="text-h5">4 - Brazos</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
// En este caso, el enrutamiento se maneja directamente en el template con $router.push
</script>

<style scoped>
.max-width-container {
    max-width: 900px;
    margin: 0 auto;
}

.hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>