<script setup lang="ts">
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <slot name="header">
      <HeaderDefault />
    </slot>
    <div id="content" class="flex grow">
      <div class="w-full">

      </div>
    </div>
  </div>
  <slot name="footer">
    <FooterDefault />
  </slot>
</template>

