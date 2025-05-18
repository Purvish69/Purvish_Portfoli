import { onMounted, onUnmounted } from 'vue';

export const useScrollAnimation = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.scroll-fade');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial visibility
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}; 