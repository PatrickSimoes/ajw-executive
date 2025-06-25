<template>
  <footer class="bg-black border-t border-amber-500/20 py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <img src="../assets/MainLogo-sem-fundo.png" alt="AJW Executive" class="h-12 w-12" />
            <div class="text-white">
              <h3 class="text-xl font-bold">AJW</h3>
              <p class="text-sm text-amber-400">EXECUTIVE</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            A AJW Executive é uma empresa especializada em transporte executivo de alto padrão, oferecendo serviços
            personalizados com foco em pontualidade, conforto e segurança.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Serviços</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#services" class="hover:text-amber-400 transition-colors">Transfer Aeroporto</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">City Tour</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">Transporte Corporativo</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">Eventos Especiais</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Contato</h4>
          <ul class="space-y-2 text-gray-300">
            <li>(11) 99999-9999</li>
            <li>contato@ajwexecutive.com.br</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-amber-500/20 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          © {{ currentYear }}<a href="https://github.com/PatrickSimoes" target="_blank" rel="noopener noreferrer"
            class="text-amber-400 ml-2">Patrick Simões</a>. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
