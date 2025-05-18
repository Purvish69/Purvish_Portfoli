<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

interface RouteMeta {
  transition?: string;
}
</script>

<template>
  <div class="app">
    <Header />
    
    <main>
      <RouterView v-slot="{ Component, route }">
        <transition :name="(route.meta as RouteMeta).transition || 'fade'" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    
    <Footer />
  </div>
</template>

<style>
@import './styles/global.css';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>