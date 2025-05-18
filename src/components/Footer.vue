<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-logo">
            <span class="logo-text">Portfolio</span>
          </div>
          <p class="footer-tagline">Mi portafolio de desarrollo web</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-group">
            <h4 class="footer-heading">Links</h4>
            <ul class="footer-nav">
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/projects">Proyectos</router-link></li>
              <li><router-link to="/about">Sobre mí</router-link></li>
              <li><router-link to="/contact">Contacto</router-link></li>
            </ul>
          </div>
          
          <div class="footer-group">
            <h4 class="footer-heading">Connect</h4>
            <ul class="footer-nav">
              <li><a href="https://github.com/Purvish69" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/purvish-patel-0359bb304/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ year }} Portfolio. Reservados todos los derechos.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-6) 0 var(--space-3);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-5);
}

.footer-info {
  max-width: 350px;
}

.footer-logo {
  margin-bottom: var(--space-2);
}

.logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-3);
}

.footer-links {
  display: flex;
  gap: var(--space-6);
}

.footer-heading {
  color: white;
  margin-bottom: var(--space-3);
  font-size: 1.1rem;
  position: relative;
}

.footer-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 30px;
  height: 2px;
  background-color: var(--color-accent);
}

.footer-nav {
  list-style: none;
}

.footer-nav li {
  margin-bottom: var(--space-2);
}

.footer-nav a {
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-fast);
}

.footer-nav a:hover {
  color: white;
}

.footer-bottom {
  padding-top: var(--space-3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
}

.footer-bottom-links {
  display: flex;
  gap: var(--space-3);
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: var(--space-5);
  }
  
  .footer-info {
    max-width: 100%;
  }
  
  .footer-links {
    width: 100%;
    justify-content: space-between;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: var(--space-2);
  }
}
</style>