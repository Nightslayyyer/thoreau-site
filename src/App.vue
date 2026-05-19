<script setup>
import { ref } from 'vue'
import AuthorSummary from './components/AuthorSummary.vue'
import Conflicts from './components/Conflicts.vue'
import Historical from './components/Historical.vue'
import WorksCited from './components/WorksCited.vue'

const currentTab = ref('AuthorSummary')

const tabs = {
  AuthorSummary: 'Home & Summary',
  Conflicts: 'Literary Conflicts',
  Historical: 'Historical Connection',
  WorksCited: 'Works Cited'
}
</script>

<template>
  <div class="min-h-screen bg-stone-100 font-sans text-stone-900">
    <header class="bg-emerald-800 text-white shadow-md">
      <div class="max-w-5xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold tracking-tight">Being Henry David</h1>
        <p class="text-emerald-200 mt-2 text-lg">An Interdisciplinary Novel Project</p>
      </div>
      
      <nav class="bg-emerald-900">
        <div class="max-w-5xl mx-auto px-6 flex space-x-4 overflow-x-auto">
          <button 
            v-for="(label, component) in tabs" 
            :key="component"
            @click="currentTab = component"
            class="px-4 py-3 font-medium transition-colors whitespace-nowrap"
            :class="currentTab === component ? 'bg-stone-100 text-emerald-900' : 'text-emerald-100 hover:bg-emerald-700'"
          >
            {{ label }}
          </button>
        </div>
      </nav>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-12">
      <div class="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
        <KeepAlive>
          <component :is="
            currentTab === 'AuthorSummary' ? AuthorSummary :
            currentTab === 'Conflicts' ? Conflicts :
            currentTab === 'Historical' ? Historical : WorksCited
          " />
        </KeepAlive>
      </div>
    </main>

    <footer class="text-center py-8 text-stone-500 text-sm">
      <p>Created by Nicholas Belicka for English III</p>
    </footer>
  </div>
</template>
