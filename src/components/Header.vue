<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const isDarkMode = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode.value.toString());
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    isDarkMode.value = true;
    document.body.classList.add('dark-mode');
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll();
  
  return () => {
    window.removeEventListener('scroll', checkScroll);
  };
});

// Close menu when route changes
watch(() => router.currentRoute.value, () => {
  closeMenu();
});
</script>

<template>
  <header :class="['header', { 'scrolled': isScrolled }]">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span class="logo-text">Portfolio</span>
          </router-link>
        </div>
        
        <nav :class="['nav', { 'active': isMenuOpen }]">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" @click="closeMenu">Proyectos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMenu">Sobre mí</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMenu">Contacto</router-link>
            </li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <button class="theme-toggle" @click="toggleDarkMode" aria-label="Toggle dark mode">
            <span v-if="isDarkMode">🌙</span>
            <span v-else>☀️</span>
          </button>
          
          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
            <span class="menu-icon" :class="{ 'active': isMenuOpen }">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--space-3) 0;
  transition: background-color var(--transition-normal), padding var(--transition-normal), box-shadow var(--transition-normal);
  background-color: transparent;
}

.header.scrolled {
  background-color: var(--color-surface);
  padding: var(--space-2) 0;
  box-shadow: var(--shadow-md);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-text);
  background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: var(--space-4);
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
  position: relative;
  padding: var(--space-1) 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width var(--transition-normal);
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: var(--space-1);
  transition: transform var(--transition-fast);
}

.theme-toggle:hover {
  transform: rotate(15deg);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-1);
}

.menu-icon {
  position: relative;
  width: 24px;
  height: 20px;
}

.bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: all var(--transition-normal);
  left: 0;
}

.bar:nth-child(1) {
  top: 0;
}

.bar:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.bar:nth-child(3) {
  bottom: 0;
}

.menu-icon.active .bar:nth-child(1) {
  transform: rotate(45deg);
  top: 9px;
}

.menu-icon.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.active .bar:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 9px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--color-surface);
    box-shadow: var(--shadow-lg);
    transition: right var(--transition-normal);
    z-index: 1001;
    padding: var(--space-6) var(--space-4);
  }
  
  .nav.active {
    right: 0;
  }
  
  .nav-list {
    flex-direction: column;
    gap: var(--space-5);
  }
  
  .nav-item {
    width: 100%;
  }
  
  .nav-link {
    display: block;
    font-size: 1.25rem;
    padding: var(--space-2) 0;
  }
}
</style>