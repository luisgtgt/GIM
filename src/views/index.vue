<template>
    <q-page class="main-bg q-py-xl q-px-md">

        <div class="text-center q-mb-xl q-mt-md">
            <q-icon name="fitness_center" size="3.5rem" color="warning" class="q-mb-sm drop-shadow" />
            <h1 class="text-h2 text-weight-light text-uppercase tracking-wide q-ma-none text-white">
                GymApp <span class="text-weight-bolder text-warning">Pro</span>
            </h1>
            <p class="text-subtitle2 text-grey-5 q-mt-md tracking-medium text-uppercase">
                Selecciona tu enfoque de entrenamiento
            </p>
        </div>

        <div class="row q-col-gutter-lg justify-center q-mx-auto" style="max-width: 1200px;">

            <div class="col-12 col-md-6">
                <q-card class="elegant-card cursor-pointer" flat @click="$router.push('/espalda')">
                    <div class="card-bg"
                        style="background-image: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80');">

                        <div class="custom-overlay flex column justify-end q-pa-xl absolute-full">
                            <div class="text-overline text-warning tracking-wide q-mb-xs text-weight-bold">
                                01 &nbsp; // &nbsp; FASE
                            </div>
                            <h3 class="text-h4 text-weight-bolder text-uppercase q-ma-none title-glow text-white">
                                Espalda
                            </h3>
                            <div class="hover-text text-grey-4 q-mt-md row items-center text-subtitle1">
                                Iniciar Rutina <q-icon name="arrow_right_alt" size="sm" class="q-ml-sm text-warning" />
                            </div>
                        </div>

                    </div>
                </q-card>
            </div>

            <div class="col-12 col-md-6">
                <q-card class="elegant-card cursor-pointer" flat @click="$router.push('/torso-frontal')">
                    <div class="card-bg"
                        style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80');">

                        <div class="custom-overlay flex column justify-end q-pa-xl absolute-full">
                            <div class="text-overline text-warning tracking-wide q-mb-xs text-weight-bold">
                                02 &nbsp; // &nbsp; FASE
                            </div>
                            <h3 class="text-h4 text-weight-bolder text-uppercase q-ma-none title-glow text-white">
                                Pecho / Abdomen
                            </h3>
                            <div class="hover-text text-grey-4 q-mt-md row items-center text-subtitle1">
                                Iniciar Rutina <q-icon name="arrow_right_alt" size="sm" class="q-ml-sm text-warning" />
                            </div>
                        </div>

                    </div>
                </q-card>
            </div>

            <div class="col-12 col-md-6">
                <q-card class="elegant-card cursor-pointer" flat @click="$router.push('/piernas')">
                    <div class="card-bg"
                        style="background-image: url('https://us.123rf.com/450wm/samuelperales/samuelperales2107/samuelperales210700131/172445247-foto-de-estudio-de-la-parte-inferior-de-las-piernas-de-un-hombre-fuerte-con-fondo-negro.jpg?ver=6');">

                        <div class="custom-overlay flex column justify-end q-pa-xl absolute-full">
                            <div class="text-overline text-warning tracking-wide q-mb-xs text-weight-bold">
                                03 &nbsp; // &nbsp; FASE
                            </div>
                            <h3 class="text-h4 text-weight-bolder text-uppercase q-ma-none title-glow text-white">
                                Piernas
                            </h3>
                            <div class="hover-text text-grey-4 q-mt-md row items-center text-subtitle1">
                                Iniciar Rutina <q-icon name="arrow_right_alt" size="sm" class="q-ml-sm text-warning" />
                            </div>
                        </div>

                    </div>
                </q-card>
            </div>

            <div class="col-12 col-md-6">
                <q-card class="elegant-card cursor-pointer" flat @click="$router.push('/brazos')">
                    <div class="card-bg"
                        style="background-image: url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80');">

                        <div class="custom-overlay flex column justify-end q-pa-xl absolute-full">
                            <div class="text-overline text-warning tracking-wide q-mb-xs text-weight-bold">
                                04 &nbsp; // &nbsp; FASE
                            </div>
                            <h3 class="text-h4 text-weight-bolder text-uppercase q-ma-none title-glow text-white">
                                Brazos
                            </h3>
                            <div class="hover-text text-grey-4 q-mt-md row items-center text-subtitle1">
                                Iniciar Rutina <q-icon name="arrow_right_alt" size="sm" class="q-ml-sm text-warning" />
                            </div>
                        </div>

                    </div>
                </q-card>
            </div>

        </div>
    </q-page>
</template>

<style scoped>
/* Fondo general */
.main-bg {
    background-color: #08080a;
    min-height: 100vh;
}

.tracking-wide {
    letter-spacing: 5px;
}

.tracking-medium {
    letter-spacing: 2px;
}

.drop-shadow {
    filter: drop-shadow(0 0 10px rgba(242, 192, 55, 0.4));
}

.title-glow {
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.9);
}

/* CONTENEDOR INFALIBLE DE IMAGEN */
/* Garantiza que la tarjeta mida 320px SÍ o SÍ, cargue o no la foto */
.card-bg {
    height: 320px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-color: #1a1a24;
    /* Color de fondo por si la foto no carga */
    position: relative;
    transition: transform 0.6s ease;
}

/* Tarjeta contenedora */
.elegant-card {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent;
    transition: all 0.4s ease;
}

.elegant-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
    border-color: rgba(242, 192, 55, 0.5);
}

.elegant-card:hover .card-bg {
    transform: scale(1.05);
}

/* Overlay que ocupa siempre el 100% de los 320px */
.custom-overlay {
    background: linear-gradient(to bottom, transparent 0%, rgba(8, 8, 10, 0.98) 100%);
    pointer-events: none;
    /* Para que el clic pase a la tarjeta */
}

/* Texto oculto */
.hover-text {
    opacity: 0;
    transform: translateX(-15px);
    transition: all 0.4s ease;
}

.elegant-card:hover .hover-text {
    opacity: 1;
    transform: translateX(0);
}
</style>