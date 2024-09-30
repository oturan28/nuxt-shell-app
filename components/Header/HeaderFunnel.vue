<script setup lang="ts">
const props = defineProps<{
  isAuthenticated?: boolean
}>()

const isAuthenticatedCopy = ref(props.isAuthenticated)
</script>
<template>
  <header class="border-b border-neutral-300 sticky top-0 z-10 bg-white h-[58px]">
    <div class="w-full max-w-7xl mx-auto py-4 px-4 xl:px-2.5 flex items-center justify-between">
      <a class="print:hidden hover:bg-inherit" href="/public" title="Anwalt suchen und finden bei anwalt.de">
        <img src="https://www.anwalt.de/img/anwalt.de-logo.svg" class="img-fluid" width="130" height="25" alt="Anwalt suchen und finden bei anwalt.de">
      </a>
      <div @click="isAuthenticatedCopy = !isAuthenticatedCopy" class="flex items-center">
        <svg class="inline-block w-auto h-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
          <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"></path>
        </svg>
        <p>lsöadkölaskdlöaskdölsk</p>
        <p>lsöadkölaskdlöaskdölsk</p>
        <p>lsöadkölaskdlöaskdölsk</p>
        <p>lsöadkölaskdlöaskdölsk</p>
        <span v-if="isAuthenticatedCopy" class="text-neutral-500 ml-2 hidden sm:inline anw-text-p1">logged in</span>
        <span v-if="!isAuthenticatedCopy" class="text-neutral-500 ml-2 hidden sm:inline anw-text-p1">logged out</span>
      </div>
    </div>
  </header>
</template>
