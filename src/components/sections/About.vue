<script setup lang="ts">
import { ref } from 'vue';
import SkillBar from '../UI/SkillBar.vue';
import Button from '../UI/Button.vue';
import { useRouter } from 'vue-router';
import profileImg from '../../assets/img/IMG_6550.jpg';

const router = useRouter();

const irAContacto = () => {
  router.push('/contact');
};

const habilidades = [
  { name: 'HTML/CSS', percentage: 90, color: '#E34F26' },
  { name: 'JavaScript', percentage: 80, color: '#F7DF1E' },
  { name: 'Vue.js', percentage: 85, color: '#4FC08D' },
  { name: 'React/Next.js', percentage: 70, color: '#61DAFB' },
  { name: 'Node.js', percentage: 50, color: '#339933' },
  { name: 'Laravel', percentage: 80, color: '#FF2D20' },
  { name: 'Nuxt.js', percentage: 80, color: '#00DC82' },
  { name: 'Next.js', percentage: 70, color: '#432695' },
  { name: 'Diseño UI/UX', percentage: 85, color: '#FF6B6B' }
];

// Experiencias comentadas como solicitado
type Experiencia = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiencias = ref<Experiencia[]>([
  /*
  {
    title: 'Desarrollador Full Stack',
    company: 'Empresa Ejemplo',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web responsivas utilizando tecnologías modernas como Vue.js, Nuxt, Next.js, Laravel y Node.js.'
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Otra Empresa',
    period: '2021 - 2023',
    description: 'Creación de interfaces de usuario modernas y responsivas utilizando Vue.js y React.'
  }
  */
]);

const educacion = ref([
  {
    degree: 'CFGSenvolupament d\'Aplicacions Web',
    institution: 'Institut Pedralbes',
    period: '2023 - Actualidad',
    description: 'Formación profesional en desarrollo de aplicaciones web con tecnologías modernas.'
  },
  {
    degree: 'Batxillerat',
    institution: 'Instituto Mila i Fontanal',
    period: '2021 - 2023',
    description: 'Bachillerato con enfoque en tecnología y ciencias.'
  }
]);
</script>

<template>
  <section class="about-section section">
    <div class="container">
      <h2 class="section-title text-center">Sobre Mí</h2>
      
      <div class="about-content">
        <div class="about-image">
          <img :src="profileImg" alt="Perfil" />
        </div>
        
        <div class="about-text">
          <h3>Quién Soy</h3>
          <p>
            Soy un desarrollador Full Stack apasionado por la creación de páginas web responsivas, únicas y creativas con tecnologías modernas y avanzadas. 
          </p>
          <p>
            Tengo experiencia trabajando con diversos frameworks y tecnologías como Vue.js, Nuxt.js, Next.js, Laravel, Node.js, y más. Mi enfoque principal es ser un buen programador y constantemente aprender nuevas tecnologías para mantenerme actualizado en el mundo del desarrollo web.
          </p>
          
          <div class="about-stats">
            <div class="stat">
              <span class="stat-number">8+</span>
              <span class="stat-label">Tecnologías Dominadas</span>
            </div>
            <div class="stat">
              <span class="stat-number">6+</span>
              <span class="stat-label">Proyectos Completados</span>
            </div>
            <!-- <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Compromiso</span>
            </div> -->
          </div>
          
          <Button variant="primary" @click="irAContacto">Contáctame</Button>
        </div>
      </div>
      
      <div class="skills-section">
        <h3 class="sub-title">Mis Habilidades</h3>
        <div class="skills-container">
          <SkillBar 
            v-for="habilidad in habilidades" 
            :key="habilidad.name" 
            :name="habilidad.name" 
            :percentage="habilidad.percentage" 
            :color="habilidad.color"
          />
        </div>
      </div>
      
      <div class="timeline-section">
        <div class="timeline-container">
          <!-- Sección de experiencia comentada pero dejamos el contenedor -->
          <div class="timeline-column" v-if="experiencias.length > 0">
            <h3 class="sub-title">Experiencia</h3>
            <div class="timeline">
              <div 
                v-for="(item, index) in experiencias" 
                :key="index"
                class="timeline-item"
              >
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="timeline-title">{{ item.title }}</h4>
                  <div class="timeline-period">
                    <span class="company">{{ item.company }}</span>
                    <span class="period">{{ item.period }}</span>
                  </div>
                  <p class="timeline-description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-column">
            <h3 class="sub-title">Educación</h3>
            <div class="timeline">
              <div 
                v-for="(item, index) in educacion" 
                :key="index"
                class="timeline-item"
              >
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="timeline-title">{{ item.degree }}</h4>
                  <div class="timeline-period">
                    <span class="company">{{ item.institution }}</span>
                    <span class="period">{{ item.period }}</span>
                  </div>
                  <p class="timeline-description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.about-section {
  background-color: var(--color-background);
}

.about-content {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

.about-image {
  flex: 1;
  position: relative;
}

.about-image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about-text {
  flex: 1;
}

.about-text h3 {
  margin-bottom: var(--space-3);
  position: relative;
  display: inline-block;
}

.about-text h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-accent);
}

.about-text p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.about-stats {
  display: flex;
  justify-content: space-between;
  margin: var(--space-4) 0;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: var(--space-1);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.skills-section {
  margin-bottom: var(--space-6);
}

.sub-title {
  margin-bottom: var(--space-4);
  position: relative;
  display: inline-block;
}

.sub-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-accent);
}

.skills-container {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-section {
  margin-top: var(--space-6);
}

.timeline-container {
  display: flex;
  gap: var(--space-6);
}

.timeline-column {
  flex: 1;
}

.timeline {
  position: relative;
  padding-left: var(--space-4);
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7px;
  width: 2px;
  background-color: rgba(13, 115, 119, 0.2);
}

.timeline-item {
  position: relative;
  padding-bottom: var(--space-4);
}

.timeline-marker {
  position: absolute;
  left: -37px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  border: 2px solid white;
  z-index: 1;
}

.timeline-content {
  background-color: var(--color-surface);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.timeline-title {
  margin-bottom: var(--space-1);
  font-size: 1.1rem;
}

.timeline-period {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-2);
  font-size: 0.875rem;
}

.company {
  font-weight: 500;
  color: var(--color-secondary);
}

.period {
  color: var(--color-text-secondary);
}

.timeline-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
  
  .about-text h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .sub-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .sub-title,
  .about-text h3 {
    display: block;
    text-align: center;
  }
  
  .timeline-container {
    flex-direction: column;
  }
}
</style>
