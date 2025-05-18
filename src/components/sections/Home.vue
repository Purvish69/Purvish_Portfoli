<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "../UI/Button.vue";
// import SocialLinks from '../UI/SocialLinks.vue';
import { useRouter } from "vue-router";
import profileImg from '../../assets/img/IMG_6550.jpg';

const router = useRouter();
const isLoaded = ref(false);

const navigateToContact = () => {
  router.push("/contact");
};

const navigateToProjects = () => {
  router.push("/projects");
};

const typewriterText = ref("");
const fullText = "Desarrollador Full Stack";
let charIndex = 0;

const typeWriter = () => {
  if (charIndex < fullText.length) {
    typewriterText.value += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
};

onMounted(() => {
  isLoaded.value = true;
  setTimeout(typeWriter, 500);
});
</script>

<template>
  <section class="home-section">
    <div class="container">
      <div class="hero">
        <div class="hero-content" :class="{ visible: isLoaded }">
          <h1 class="hero-title">
            <span class="greeting">Hola </span><br />
            <span class="name">Purvish Patel</span>
          </h1>
          <h2 class="hero-subtitle">
            <span class="typewriter">{{ typewriterText }}</span>
            <span class="cursor">|</span>
          </h2>
          <p class="hero-description">
            Soy Desarrollador Full Stack especializado en crear sitios web
            modernos, optimizados y con tecnologías nuevas.
          </p>
          <div class="hero-actions">
            <Button variant="primary" size="lg" @click="navigateToProjects"
              >View Projects</Button
            >
            <Button variant="outline" size="lg" @click="navigateToContact"
              >Contact Me</Button
            >
          </div>
          <!-- <div class="hero-social">
            <span class="social-text">Find me on:</span>
            <SocialLinks />
          </div> -->
        </div>
        <div class="hero-image" :class="{ visible: isLoaded }">
          <div class="image-container">
            <img
              :src="profileImg"
              alt="Portrait"
              class="portrait"
            />
            <div class="floating-shape shape-1"></div>
            <div class="floating-shape shape-2"></div>
            <div class="floating-shape shape-3"></div>
          </div>
        </div>
      </div>

      <div class="home-features">
        <div
          class="feature"
          v-for="(feature, index) in [
            'Frontend Development',
            'Backend Development',
            'UI/UX Design',
          ]"
          :key="index"
        >
          <div class="feature-icon">{{ ["💻", "📱", "🔧"][index] }}</div>
          <h3 class="feature-title">{{ feature }}</h3>
          <p class="feature-description">
            {{
              [
                "Desarrollo interfaces web responsivas y dinámicas con HTML, CSS, JavaScript y frameworks modernos como Vue.js, React, Next.js y Nuxt.js.",
                "Desarrollo de sistemas backend robustos y escalables con Laravel, Node.js. Implementación de bases de datos y gestión de autenticación.",
                "Diseño interfaces intuitivas, atractivas y centradas en el usuario para mejorar la experiencia de navegación con ayuda de herramientas como Tailwindcss.",
              ][index]
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  padding-top: calc(var(--space-6) + 60px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-7) 0;
}

.hero-content {
  flex: 1;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.greeting {
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 1.5rem;
}

.name {
  background: linear-gradient(
    135deg,
    var(--color-secondary),
    var(--color-accent)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.5rem;
}

.hero-title {
  margin-bottom: var(--space-3);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: var(--space-4);
  height: 2.5rem;
  display: flex;
  align-items: center;
}

.typewriter {
  color: var(--color-secondary);
}

.cursor {
  margin-left: 2px;
  font-weight: 100;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-5);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.hero-social {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.social-text {
  font-weight: 500;
  color: var(--color-text-secondary);
}

.hero-image {
  flex: 1;
  position: relative;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
}

.hero-image.visible {
  opacity: 1;
  transform: translateX(0);
}

.image-container {
  position: relative;
  padding-bottom: 120%;
}

.portrait {
  position: absolute;
  width: 80%;
  height: auto;
  border-radius: var(--radius-lg);
  object-fit: cover;
  box-shadow: var(--shadow-elevated);
  z-index: 2;
}

.floating-shape {
  position: absolute;
  border-radius: var(--radius-md);
  z-index: 1;
}

.shape-1 {
  width: 100px;
  height: 100px;
  background-color: var(--color-secondary);
  top: 20%;
  right: 10%;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 80px;
  height: 80px;
  background-color: var(--color-accent);
  bottom: 15%;
  left: 5%;
  animation: float 8s ease-in-out infinite 1s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  background-color: var(--color-primary-light);
  top: 70%;
  right: 15%;
  animation: float 7s ease-in-out infinite 0.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

.home-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  padding: var(--space-6) 0;
}

.feature {
  background-color: var(--color-surface);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal),
    box-shadow var(--transition-normal);
  text-align: center;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-3);
  background: var(--color-background);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  margin: 0 auto var(--space-3);
}

.feature-title {
  margin-bottom: var(--space-2);
  font-size: 1.25rem;
}

.feature-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    gap: var(--space-5);
  }

  .hero-image {
    width: 80%;
    max-width: 400px;
  }

  .image-container {
    padding-bottom: 100%;
  }

  .portrait {
    width: 100%;
    left: 0;
    right: 0;
    margin: auto;
  }

  .hero-social,
  .hero-actions {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .home-features {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
</style>
