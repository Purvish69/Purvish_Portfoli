<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useScrollAnimation } from './utils/scrollAnimations';
import './assets/styles/animations.css';

interface RouteMeta {
  transition?: string;
}

// Initialize scroll animations
useScrollAnimation();
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
  background-color: var(--color-background);
  color: var(--color-text);
}

main {
  flex: 1;
}

/* Global transition styles */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Global animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Global hover effects */
a, button {
  transition: all 0.3s ease;
}

a:hover, button:hover {
  transform: translateY(-2px);
}

/* Global focus styles */
:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Global selection styles */
::selection {
  background-color: var(--color-accent);
  color: white;
}
</style>