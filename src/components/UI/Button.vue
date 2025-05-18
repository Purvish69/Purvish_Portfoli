<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default', // default, primary, accent
    validator: (value: string) => ['default', 'primary', 'accent', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  }
});

const buttonClasses = computed(() => {
  return {
    'custom-button': true,
    [`variant-${props.variant}`]: true,
    [`size-${props.size}`]: true,
    'block': props.block,
    'disabled': props.disabled,
    'btn-hover': true
  };
});

const isLink = computed(() => !!props.href);

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>

<template>
  <a 
    v-if="isLink" 
    :href="href" 
    :target="target"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot></slot>
  </a>
  <button 
    v-else 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.variant-default {
  background-color: var(--color-primary);
  color: white;
}

.variant-default:hover:not(.disabled) {
  background-color: var(--color-primary-light);
}

.variant-primary {
  background-color: var(--color-secondary);
  color: white;
}

.variant-primary:hover:not(.disabled) {
  background-color: var(--color-secondary-light);
}

.variant-accent {
  background-color: var(--color-accent);
  color: white;
}

.variant-accent:hover:not(.disabled) {
  background-color: var(--color-accent-light);
}

.variant-outline {
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.variant-outline:hover:not(.disabled) {
  background-color: var(--color-primary);
  color: white;
}

.size-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.size-md {
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
}

.size-lg {
  padding: 0.875rem 1.75rem;
  font-size: 1.125rem;
}

.block {
  display: flex;
  width: 100%;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.custom-button:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-button:active:not(.disabled) {
  transform: translateY(0);
}
</style>