<!-- GraphSix.vue -->
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <CurrentChart :currentData="currentData" />
    <VoltageChart :voltageData="voltageData" />
    <PowerFactorChart :powerFactorData="powerFactorData" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useDashboardStore } from '../stores/dashboardStore';
import CurrentChart from './CurrentChart.vue';
import VoltageChart from './VoltageChart.vue';
import PowerFactorChart from './PowerFactorChart.vue';

const store = useDashboardStore();
const { currentData, voltageData, powerFactorData } = storeToRefs(store);

onMounted(() => {
  store.fetchDashboardData();
});
</script>

<style scoped>
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
