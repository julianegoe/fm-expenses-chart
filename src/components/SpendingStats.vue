<template>
  <h1 class="text-2xl font-bold">Spending - Last 7 days</h1>
  <slot name="chart" />
  <hr class="border-1 border-cream">
  <div class="flex gap-32 justify-between items-end pt-4">
    <div class="flex flex-col justify-between items-start">
      <div class="text-xs text-stone-400">Total this month</div>
      <div class="text-3xl font-bold">$478.33</div>
    </div>
    <div class="flex flex-col justify-between items-end">
      <div class="text-sm font-bold">+2.4%</div>
      <div class="text-xs text-stone-400">from last month</div>
    </div>
  </div>
</template>
<script setup>

</script>
