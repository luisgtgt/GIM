<template>
    <div class="vista-login">
        <!-- Capa oscura sobre la imagen de fondo -->
        <div class="overlay"></div>

        <main class="contenedor-login">
            <!-- Panel de Cristal -->
            <div class="panel-cristal">

                <!-- Logo y Título -->
                <div class="encabezado-login">
                    <div class="icono-logo">
                        <!-- Usamos un SVG simple para no depender de librerías externas -->
                        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="2"
                            fill="none" stroke-linecap="round" stroke-linejoin="round" class="icono-oro">
                            <path d="M6.5 6.5h11"></path>
                            <path d="M6.5 17.5h11"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <path d="M9 4v16"></path>
                            <path d="M15 4v16"></path>
                        </svg>
                    </div>
                    <h1 class="titulo">GymApp <span class="texto-oro">Pro</span></h1>
                    <p class="subtitulo">Supera tus límites hoy.</p>
                </div>

                <!-- Formulario -->
                <form @submit.prevent="ingresar" class="formulario">
                    <div class="grupo-input">
                        <label for="usuario">Usuario o Email</label>
                        <input type="text" id="usuario" placeholder="ejemplo@correo.com" required autocomplete="off" />
                    </div>

                    <div class="grupo-input">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" placeholder="••••••••" required />
                    </div>

                    <button type="submit" class="btn-ingresar">
                        Iniciar Sesión
                    </button>
                </form>

                <div class="pie-login">
                    <a href="#" class="enlace">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Función que se ejecuta al enviar el formulario
const ingresar = () => {
    // Aquí en el futuro puedes validar contraseñas con una base de datos.
    // Por ahora, simplemente redirigimos al menú principal.
    router.push('/inicio')
}
</script>

<style scoped>
/* Fondo de pantalla completa */
.vista-login {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Filtro oscuro para resaltar el panel */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(8, 8, 10, 0.9) 0%, rgba(8, 8, 10, 0.6) 100%);
    z-index: 1;
}

/* Contenedor central */
.contenedor-login {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 420px;
    padding: 2rem;
}

/* Efecto Glassmorphism */
.panel-cristal {
    background: rgba(20, 20, 25, 0.7);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 3rem 2.5rem;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
}

/* Encabezado */
.encabezado-login {
    text-align: center;
    margin-bottom: 2.5rem;
}

.icono-oro {
    color: #f39c12;
    filter: drop-shadow(0 0 8px rgba(243, 156, 18, 0.5));
    margin-bottom: 1rem;
}

.titulo {
    color: #ffffff;
    font-size: 2.2rem;
    font-weight: 300;
    margin: 0 0 0.5rem 0;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.texto-oro {
    font-weight: 900;
    color: #f39c12;
}

.subtitulo {
    color: #a0a0a5;
    font-size: 0.95rem;
    margin: 0;
    letter-spacing: 1px;
}

/* Formulario */
.formulario {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.grupo-input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.grupo-input label {
    color: #dcdce0;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.grupo-input input {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

.grupo-input input:focus {
    border-color: #f39c12;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(243, 156, 18, 0.2);
}

.grupo-input input::placeholder {
    color: #666;
}

/* Botón */
.btn-ingresar {
    margin-top: 1rem;
    background: #f39c12;
    color: #000;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-ingresar:hover {
    background: #f1c40f;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(243, 156, 18, 0.4);
}

/* Pie */
.pie-login {
    margin-top: 2rem;
    text-align: center;
}

.enlace {
    color: #888;
    font-size: 0.85rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.enlace:hover {
    color: #f39c12;
}
</style>