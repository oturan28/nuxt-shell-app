<template>
  <div class="min-h-screen flex flex-col">
    <slot name="header">
      <HeaderDefault />
    </slot>
    <slot id="content" class="flex grow">
      <div class="w-full">

      </div>
    </slot>
  </div>
  <slot name="footer">
    <FooterDefault />
  </slot>
</template>

