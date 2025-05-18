<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project: any) => {
      return project.title && project.image && project.description;
    }
  }
});
</script>

<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <div class="project-overlay">
        <div class="project-actions">
          <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="project-link" v-if="project.liveUrl">
            Live Demo
          </a>
          <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="project-link" v-if="project.githubUrl">
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tags">
        <span class="project-tag" v-for="(tag, index) in project.tags" :key="index">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 34, 56, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: var(--space-2);
}

.project-link {
  background-color: var(--color-accent);
  color: white;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: background-color 0.2s, transform 0.2s;
}

.project-link:hover {
  background-color: var(--color-accent-light);
  color: white;
  transform: translateY(-2px);
}

.project-content {
  padding: var(--space-4);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: var(--space-2);
  color: var(--color-text);
}

.project-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: auto;
}

.project-tag {
  background-color: rgba(13, 115, 119, 0.1);
  color: var(--color-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
}
</style>