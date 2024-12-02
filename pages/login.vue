<script setup lang="ts">
const { user } = useUserSession()

</script>

<template>
  <div class="justify-center">
    <a href="/api/auth/github" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Login with github
    </a>
  </div>

</template>
