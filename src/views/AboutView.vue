<script setup>
// Não são necessárias importações adicionais para esta view
</script>

<template>
  <div class="min-h-screen">
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Sobre Mim</h1>
        
        <div class="card mb-12">
          <p class="text-lg leading-relaxed">
            Sou desenvolvedor Full Stack com experiência prática em tecnologias como HTML, CSS,
            JavaScript e React.js no front-end, além de PHP no back-end e MySQL como banco de dados.
            Sou um entusiasta da tecnologia, movido por desafios e pela constante busca por aprendizado.
            Tenho facilidade em me adaptar a novas ferramentas e metodologias, e valorizo a construção
            de soluções eficientes e bem estruturadas, tanto no front quanto no back-end.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Experiência Profissional</h2>
            <div class="timeline-item p-5 border-2 border-slate-300 rounded-lg">
              <h3 class="text-xl font-bold text-primary">Desenvolvedor Full Stack Jr</h3>
              <h4 class="text-lg font-medium text-gray-700 mb-2">Spotbizz Tecnology</h4>
              <p class="text-sm text-gray-500 mb-4">Abril 2024 - Junho 2025</p>
              <p class="text-gray-700">
                Atuei como desenvolvedor Full Stack Júnior no desenvolvimento de um sistema ERP, utilizando
                tecnologias como React no front-end e Symfony no back-end. Participei da criação
                de diversas funcionalidades como um chat integrado ao WhatsApp, sistema para criação
                de chatbots, CRUDs diversos e um drive para armazenamento de mídias. Também contribuí
                na construção de uma interface para facilitar o consumo de APIs e webhooks, sempre
                focando em soluções funcionais, organizadas e escaláveis.
              </p>
            </div>
          </div>
          
          <div>
            <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Formação Acadêmica</h2>
            <div class="timeline-item p-5 border-2 border-slate-300 rounded-lg mb-6">
              <h3 class="text-xl font-bold text-primary">Ensino Técnico Integrado ao Médio (Informática)</h3>
              <h4 class="text-lg font-medium text-gray-700 mb-2">ETEC - Antonio Devisate</h4>
              <p class="text-sm text-gray-500 mb-4">2018 - 2020</p>
            </div>
            <div class="timeline-item p-5 border-2 border-slate-300 rounded-lg">
              <h3 class="text-xl font-bold text-primary">Análise e Desenvolvimento de Sistemas</h3>
              <h4 class="text-lg font-medium text-gray-700 mb-2">UNIMAR - Universidade de Marília</h4>
              <p class="text-sm text-gray-500 mb-4">2024 - 2026*</p>
            </div>
          </div>
        </div>
        
        <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Habilidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Linguagens</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span>Python</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>PHP</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>C#</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>JavaScript</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Web</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span>HTML</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>CSS</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>JavaScript</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card p-5 border-2 border-slate-300 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">Frameworks</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span>Symfony (PHP)</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>Dotnet EF (C#)</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 70%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>React (JS)</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span>Vue (JS)</span>
                <div class="w-24 bg-gray-200 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="section-title bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Projetos</h2>
        <div class="grid grid-cols-1 gap-8">
          <div class="card mb-8">
            <h3 class="text-xl font-bold text-primary mb-2">BFS - Basic Financial System</h3>
            <p class="text-gray-700 mb-4">
              Como estudante desenvolvi um sistema web financeiro simples utilizando HTML, CSS,
              JavaScript(front e back-end) e MySQL. O sistema conta com uma interface para cadastro e
              gerenciamento das finanças particulares, podendo registrar movimentações, e obter
              analises como gasto médio por períodos.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">HTML</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">CSS</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">MySQL</span>
            </div>
          </div>
          
          <div class="card mb-8">
            <h3 class="text-xl font-bold text-primary mb-2">Poké - API</h3>
            <p class="text-gray-700 mb-4">
              Desenvolvi um sistema utilizando, HTML, CSS e JavaScript(apenas front-end). baseado na
              pokédex da famosa franquia de jogos Pokémon, um sistema que realiza o consumo de uma API de
              listagem das criaturas presentes no jogo, paginações para exibição em tela, pesquisa por
              nome ou Id, e uma tela especifica de cada um apresentando informações detalhadas de cada
              criatura.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">HTML</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">CSS</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">API</span>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <h3 class="text-xl text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl font-medium mb-4">Outras Habilidades</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Raciocínio Lógico</span>
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Pacote Office Avançado</span>
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Inglês Intermediário</span>
            <span class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Banco de Dados: MySQL</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
