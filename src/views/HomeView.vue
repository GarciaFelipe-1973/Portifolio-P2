<script setup>
import SocialLinks from '../components/SocialLinks.vue';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/GarciaFelipe-1973', icon: '🔗' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/felipe-garcia', icon: '🔗' }
];
</script>

<template>
  <div class="min-h-screen">
    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <div class="w-64 h-64 mx-auto md:mx-0 bg-white rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img src="../assets/images/profile.jpg" alt="Profile Picture" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="md:w-1/2 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Olá sou Felipe Garcia</h1>
            <h2 class="text-2xl md:text-3xl font-light mb-6">Desenvolvedor Full Stack JR</h2>
            <p class="text-lg mb-8">
              Entusiasta da tecnologia, movido por desafios e pela constante busca por aprendizado.
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <RouterLink to="/about" class="bg-white text-primary px-6 py-2 rounded-md hover:bg-transparent border border-white hover:text-white transition-colors">
                Sobre mim
              </RouterLink>
              <RouterLink to="/contact" class="bg-white text-primary px-6 py-2 rounded-md hover:bg-transparent border border-white hover:text-white transition-colors">
                Contato
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Habilidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Linguagens</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>Python</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>PHP</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>C#</span>
              </li>
            </ul>
          </div>
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Web</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>HTML</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>CSS</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>JavaScript</span>
              </li>
            </ul>
          </div>
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Frameworks</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>Symfony (PHP)</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>Dotnet EF (C#)</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>React (JS)</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2">🔹</span>
                <span>Vue (JS)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Projetos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="text-xl font-bold text-primary mb-2">BFS - Basic Financial System</h3>
            <p class="text-gray-700 mb-4">
              Sistema web financeiro simples utilizando HTML, CSS, JavaScript e MySQL. 
              Interface para cadastro e gerenciamento das finanças particulares, com registro 
              de movimentações e análises como gasto médio por períodos.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">HTML</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">CSS</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">MySQL</span>
            </div>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold text-primary mb-2">Poké - API</h3>
            <p class="text-gray-700 mb-4">
              Sistema baseado na pokédex da franquia Pokémon, utilizando HTML, CSS e JavaScript. 
              Realiza o consumo de uma API de listagem das criaturas, com paginações, pesquisa por 
              nome ou Id, e tela específica com informações detalhadas de cada criatura.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">HTML</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">CSS</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">API</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium">Ficou Interessado?</h2>
        <p class="text-lg mb-4">Estou sempre aberto a novas oportunidades e colaborações.</p>
        <h3 class="text-lg bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-2">Conecte-se comigo</h3>
        <div class="flex justify-center">
          <SocialLinks :links="socialLinks" />
        </div>
      </div>
    </section>
  </div>
</template>
