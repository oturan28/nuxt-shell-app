<script setup lang="ts">
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <HeaderDefault />
    <slot id="content" class="flex grow">
      <div class="w-full">

      </div>
    </slot>
  </div>
  <FooterDefault />
</template>

