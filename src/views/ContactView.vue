<script setup>
import SocialLinks from '../components/SocialLinks.vue';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/GarciaFelipe-1973', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/felipe-garcia', icon: '🔗' }
];
</script>

<template>
  <div class="min-h-screen">
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Contato</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="card">
            <h2 class="section-title">Informações de Contato</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="text-primary text-xl mr-3">📱</span>
                <span>(14) 99154-4532</span>
              </div>
              <div class="flex items-center">
                <span class="text-primary text-xl mr-3">✉️</span>
                <a href="mailto:felipes.garcia1234@gmail.com" class="hover:text-primary transition-colors">
                  felipes.garcia1234@gmail.com
                </a>
              </div>
              <div class="flex items-center">
                <span class="text-primary text-xl mr-3">📍</span>
                <span>Marília, São Paulo</span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium mb-3">Redes Sociais</h3>
                <SocialLinks :links="socialLinks" />
              </div>
            </div>
          </div>
          
          <div class="card">
            <h2 class="section-title text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-lg font-medium">Envie uma Mensagem</h2>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                >
              </div>
              <div>
                <label for="email" class="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu.email@exemplo.com"
                >
              </div>
              <div>
                <label for="subject" class="block text-gray-700 mb-1">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Assunto da mensagem"
                >
              </div>
              <div>
                <label for="message" class="block text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              
              <div class="flex justify-end">
                <button 
                  type="button" 
                  class="btn-primary border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors p-2 rounded-md flex items-center justify-center">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div class="card">
          <h2 class="section-title">Referências Profissionais</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-bold">Osvaldo Jr Paulino</h3>
              <p class="text-gray-700">CEO, Spotbizz Tecnology</p>
              <div class="mt-2 space-y-1">
                <div class="flex items-center">
                  <span class="text-primary mr-2">📱</span>
                  <span>(14) 99665-1408</span>
                </div>
                <div class="flex items-center">
                  <span class="text-primary mr-2">✉️</span>
                  <a href="mailto:osvaldojrpaulino@spotbizz.com" class="hover:text-primary transition-colors">
                    osvaldojrpaulino@spotbizz.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
