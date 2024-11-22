<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <EnergyChart :energyData="energyData" />
    <PowerChart :powerData="powerData" />
    <FrequencyChart :frequencyData="frequencyData" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useDashboardStore } from '../stores/dashboardStore';
import EnergyChart from './EnergyChart.vue';
import PowerChart from './PowerChart.vue';
import FrequencyChart from './FrequencyChart.vue';

const store = useDashboardStore();
const { energyData, powerData, frequencyData } = storeToRefs(store);

onMounted(() => {
  store.fetchDashboardData();
});
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
