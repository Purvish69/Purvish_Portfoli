<script setup lang="ts">
import { ref } from 'vue';
import Button from '../UI/Button.vue';
import SocialLinks from '../UI/SocialLinks.vue';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitError.value = false;
  errorMessage.value = '';

  try {
    // Send email using EmailJS
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
      },
      PUBLIC_KEY
    );

    // Reset form and show success message
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    submitSuccess.value = true;
  } catch (error) {
    console.error('Error sending email:', error);
    submitError.value = true;
    errorMessage.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
  } finally {
    isSubmitting.value = false;

    // Reset messages after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
      submitError.value = false;
      errorMessage.value = '';
    }, 5000);
  }
};
</script>

<template>
  <section class="contact-section section">
    <div class="container">
      <h2 class="section-title text-center">Contáctame</h2>
      <p class="section-description text-center mb-5">
        ¿Tienes un proyecto en mente o quieres hablar sobre una oportunidad? ¡Ponte en contacto!
      </p>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3>Conectemos</h3>
          <p>
            Actualmente estoy disponible para trabajos freelance, puestos a tiempo completo y proyectos colaborativos. Si tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en escribirme!
          </p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <h4>Email</h4>
                <p>purvishpatelp@gmail.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-text">
                <h4>Teléfono</h4>
                <p>+34 632 682 996</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <h4>Ubicación</h4>
                <p>Barcelona, Espanya</p>
              </div>
            </div>
          </div>
          
          <div class="social-container">
            <h4>Sígueme</h4>
            <SocialLinks />
          </div>
        </div>
        
        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Tu Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required 
                placeholder="Nombre y Apellido"
                :disabled="isSubmitting"
              />
            </div>
            
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required 
                placeholder="tu@ejemplo.com"
                :disabled="isSubmitting"
              />
            </div>
            
            <div class="form-group">
              <label for="subject">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                required 
                placeholder="Consulta sobre proyecto"
                :disabled="isSubmitting"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="5" 
                required 
                placeholder="Cuéntame sobre tu proyecto, dudas o una oportunidad laboral..."
                :disabled="isSubmitting"
              ></textarea>
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              type="submit" 
              :disabled="isSubmitting" 
              class="submit-button"
            >
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Enviar Mensaje</span>
            </Button>
            
            <div v-if="submitSuccess" class="form-message success">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </div>
            
            <div v-if="submitError" class="form-message error">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.contact-section {
  background-color: var(--color-background);
}

.section-description {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-text-secondary);
}

.contact-container {
  display: flex;
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.contact-info {
  flex: 1;
  padding: var(--space-4);
}

.contact-info h3 {
  margin-bottom: var(--space-3);
  position: relative;
  display: inline-block;
}

.contact-info h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-accent);
}

.contact-info > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.contact-details {
  margin-bottom: var(--space-4);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--space-3);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(13, 115, 119, 0.1);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--space-3);
  font-size: 1.25rem;
}

.contact-text h4 {
  margin-bottom: var(--space-1);
  font-size: 1rem;
}

.contact-text p {
  color: var(--color-text-secondary);
  margin-bottom: 0;
}

.social-container h4 {
  margin-bottom: var(--space-3);
}

.contact-form-container {
  flex: 1.2;
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-lg);
}

.form-group {
  margin-bottom: var(--space-3);
}

.form-group label {
  display: block;
  margin-bottom: var(--space-1);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--space-2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
}

.form-group input:disabled,
.form-group textarea:disabled {
  background-color: var(--color-background);
  cursor: not-allowed;
  opacity: 0.7;
}

.submit-button {
  width: 100%;
  margin-top: var(--space-2);
}

.form-message {
  margin-top: var(--space-3);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  text-align: center;
}

.success {
  background-color: rgba(44, 182, 125, 0.1);
  color: var(--color-success);
}

.error {
  background-color: rgba(230, 57, 70, 0.1);
  color: var(--color-error);
}

@media (max-width: 992px) {
  .contact-container {
    flex-direction: column;
  }
  
  .contact-info h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>