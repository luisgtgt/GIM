<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra de navegación superior -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-icon name="fitness_center" class="q-mr-sm" />
          GymApp Pro
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Contenedor donde se inyectan las vistas (index, espalda, brazos, etc.) -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// La lógica global iría aquí, de momento no necesitamos nada
</script>