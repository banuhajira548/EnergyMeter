<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <CurrentChart :currentData="machineData?.current" />
    <VoltageChart :voltageData="machineData?.voltage" />
    <PowerFactorChart :powerFactorData="machineData?.powerFactor" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useMachineStore } from '../stores/machineStore';
import CurrentChart from './CurrentChart.vue';
import VoltageChart from './VoltageChart.vue';
import PowerFactorChart from './PowerFactorChart.vue';

const props = defineProps({
  machineId: {
    type: Number,
    required: true
  }
});

const machineStore = useMachineStore();
const machineData = computed(() => machineStore.getMachineData(props.machineId));
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