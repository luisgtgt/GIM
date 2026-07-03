<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra de navegación superior -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// La lógica global iría aquí, de momento no necesitamos nada
</script>