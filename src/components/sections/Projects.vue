<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../UI/ProjectCard.vue';
import filmGalaxyImg from '../../assets/img/FilmGalaxy.png';
import ilinkerImg from '../../assets/img/ilinker.png';
import buscamina from '../../assets/img/buscamina.png'; 

const projects = ref([
  {
    id: 1,
    title: 'FilmGalaxy',
    description: 'Una pagina web responsiva para compara billetes de peliculas, Esta pagina web esta hecha con Nuxt.js,Laravel 12, Tailwindcss y MySQL',
    image: filmGalaxyImg,
    tags: ['Nuxt.js', 'Laravel', 'MySQL', 'Tailwindcss',],
    liveUrl: 'http://filmgalaxy.daw.inspedralbes.cat/',
    githubUrl: 'https://github.com/inspedralbes/tr3-cinema-24-25-Purvish69'
  },
  {
    id: 2,
    title: 'Buscamina',
    description: 'Una pagina web para jugar Buscamina, Esta pagina web esta hecha con Vue.js.',
    image: buscamina,
    tags: ['vue.js', 'HTML', 'CSS3','javascript'],
    liveUrl: 'https://a23purpatmah.daw.inspedralbes.cat/Buscamines',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'iLinker',
    description: 'Una pagina web para encontrar practicas para los estudiantes que esta estudiando en Grado Superior(GS) o en Universidad. Esta pagina web esta hecha con Next.js, Tailwindcss, Laravel, MySQL y Tailwindcss.',
    image: ilinkerImg,
    tags: ['Next.js', 'Laravel',  'Tailwindcss', 'MySQL', 'Node.js', 'Socket.io'],
    liveUrl: 'http://ilinker.com/',
    githubUrl: 'https://github.com/inspedralbes/prj-final-ilinker'
  }
]);
</script>

<template>
  <section class="projects-section section">
    <div class="container">
      <h2 class="section-title text-center">My Projects</h2>
      <p class="section-description text-center mb-5">
        Esto son algunos de los proyectos que he realizado mientras que estuve estudiando en grado superior.
      </p>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-item"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: var(--color-background);
}

.section-description {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-4);
}

.project-item {
  transition: transform 0.5s;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>