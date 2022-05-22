<template>
  <div class="pt-14 pb-4">
  <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      chart-id="bar-chart"
      dataset-id-key="label"
      :styles="{cursor: (isChartHovered ? 'pointer': 'default')}"
      :width="400"
      :height="160"
  />
  </div>
</template>
<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import {computed, ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  data: Array,
});

const isChartHovered = ref(false);

const chartData = computed(() => {
  return {
    labels: props.data.map((item) => item.day),
    datasets: [{
      data: props.data.map((item) => item.amount),
      backgroundColor: [
        '#EC775FFF',
        '#EC775FFF',
        '#76B5BCFF',
        '#EC775FFF',
        '#EC775FFF',
        '#EC775FFF',
        '#EC775FFF',
      ],
      hoverBackgroundColor: [
        'rgba(236,119,95,0.8)',
        'rgba(236,119,95,0.8)',
        'rgba(118,181,188,0.8)',
        'rgba(236,119,95,0.8)',
        'rgba(236,119,95,0.8)',
        'rgba(236,119,95,0.8)',
        'rgba(236,119,95,0.8)',
      ],
      borderRadius: 5,
    }],
  };
});

const chartOptions = computed(() => (
    {
      responsive: true,
      onHover: (_, activeElements) => {
        if (activeElements.length === 1) {
          isChartHovered.value = true;
        }
        if (activeElements.length !== 1) {
          isChartHovered.value = false;
        }
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: 'rgb(168 162 158',
          }
        },
        xAxis: {
          display: false,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          caretSize: 0,
          backgroundColor: '#000',
          bodyFont: {
            size: 18,
          },
          xAlign: 'center',
          yAlign: 'center',
          position: 'nearest',
          callbacks: {
            label: (context) => {
              return '$' + context.formattedValue;
            },
            title: () => ''
          },
        },
      }
    }
));

</script>
<script>
export default {
  name: 'BarChart',
}
</script>
