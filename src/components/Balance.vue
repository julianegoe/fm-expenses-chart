<template>
  <Box class="flex justify-between items-center w-full bg-red p-5">
   <div class="text-cream flex flex-col">
     <div class="text-xs">My balance</div>
     <div class="text-2xl font-bold">$921.48</div>
   </div>
    <div class="flex">
      <div class="relative left-1/4 rounded-full w-8 h-8 border-2 border-cream"></div>
      <div class="rounded-full w-8 h-8 bg-darkBrown"></div>
    </div>
  </Box>
</template>
<script setup>
import Box from './Box.vue';
</script>
<script>
export default {
  name: 'Balance',
}
</script>
