<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 100
  },
  color: {
    type: String,
    default: null
  }
});

const barRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  useIntersectionObserver(
    barRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !isVisible.value) {
        isVisible.value = true;
      }
    },
    { threshold: 0.2 }
  );
});

const barColor = ref(props.color || 'var(--color-secondary)');
</script>

<template>
  <div class="skill-bar-container">
    <div class="skill-info">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-percentage">{{ percentage }}%</span>
    </div>
    <div class="skill-bar" ref="barRef">
      <div 
        class="fill" 
        :class="{ 'animate': isVisible }" 
        :style="{ 
          width: isVisible ? `${percentage}%` : '0%',
          backgroundColor: barColor
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.skill-bar-container {
  margin-bottom: var(--space-3);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-1);
}

.skill-name {
  font-weight: 500;
  color: var(--color-text);
}

.skill-percentage {
  font-weight: 500;
  color: var(--color-secondary);
}

.skill-bar {
  background-color: rgba(0, 0, 0, 0.1);
  height: 8px;
  border-radius: var(--radius-full);
  overflow: hidden;
}

.fill {
  height: 100%;
  width: 0%;
  border-radius: var(--radius-full);
  transition: width 1.5s ease-out;
}

.animate {
  animation: fillBar 1.5s ease-out forwards;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
}
</style>