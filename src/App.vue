<template>
  <section class="mx-4" id="app">
    <div class="flex flex-col gap-4 max-w-md justify-center items-center mx-auto mt-20">
      <Balance />
      <Box class="w-full bg-paleOrange">
        <SpendingStats>
          <template #chart>
            <BarChart :data="chartData" />
          </template>
        </SpendingStats>
      </Box>
    </div>
  </section>
</template>

<script setup>
import Box from './components/Box.vue';
import SpendingStats from './components/SpendingStats.vue';
import BarChart from "./components/BarChart.vue";
import Balance from './components/Balance.vue';

const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
]

</script>
