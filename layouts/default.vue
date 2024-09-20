<template>
  <div class="min-h-screen flex flex-col">
  <HeaderFunnel />
    <slot id="content" class="flex grow">
      <div class="w-full">

      </div>
    </slot>
  </div>
  <FooterFunnel />
</template>
<script setup lang="ts">
import HeaderFunnel from "~/components/Header/HeaderFunnel.vue";
import FooterFunnel from "~/components/Footer/FooterFunnel.vue";
</script>
