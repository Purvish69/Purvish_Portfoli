<script setup lang="ts">
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/Purvish69',
    icon: '📂'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/purvish-patel-0359bb304/',
    icon: '💼'
  },
  {
    name: 'Twitter',
    url: 'twitter.com',
    icon: '🐦'
  },
  {
    name: 'Instagram',
    url: 'instagram.com',
    icon: '📷'
  }
];
</script>

<template>
  <div class="social-links">
    <a 
      v-for="(link, index) in links" 
      :key="index" 
      :href="link.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="social-link"
      :aria-label="link.name"
    >
      <span class="icon">{{ link.icon }}</span>
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), background-color var(--transition-normal);
}

.social-link:hover {
  transform: translateY(-3px);
  background-color: var(--color-primary-light);
  color: white;
}

.icon {
  font-size: 1.25rem;
}
</style>