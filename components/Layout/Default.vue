<script setup lang="ts">
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <slot id="header">
      <HeaderDefault />
    </slot>
    <slot id="content" class="flex grow">
      <div class="w-full">

      </div>
    </slot>
  </div>
  <slot id="footer">
    <FooterDefault />
  </slot>
</template>

