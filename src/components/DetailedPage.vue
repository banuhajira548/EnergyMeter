<template>
  <div class="machine p-2" v-if="selectedMachine">
    <div class="machine-content flex flex-col sm:flex-row items-start bg-white rounded p-4">
      <img :src="selectedMachine.image" :alt="selectedMachine.name + ' Photo'" class="machine-photo w-full sm:w-1/4 h-auto sm:h-54 mb-4 sm:mb-0 sm:mr-4 mt-8" />
      <div class="machine-details flex-grow text-left sm:pl-4 mb-4 sm:mb-0 mt-40">
        <b class="text-lg">{{ selectedMachine.name }}</b>
        <!-- <p class="text-sm">{{ selectedMachine.Location }} SMDDC</p>
        <p class="text-sm">{{ selectedMachine.energyConsumption }} kWh </p> -->
      </div>
      <div class="chart-container w-full sm:w-2/3 h-80">
        <ParameterChartWithSelectors 
          :initialParameter="initialParameter"
          :initialDate="initialDate"
          :machineId="selectedMachine.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useMachineStore } from '../stores/machineStore';
import { storeToRefs } from 'pinia';
import ParameterChartWithSelectors from './ParameterChartWithSelectors.vue';

export default {
  name: 'DetailedPage',
  components: { ParameterChartWithSelectors },
  setup() {
    const machineStore = useMachineStore();
    const { selectedMachine } = storeToRefs(machineStore);

    const initialDate = ref(new Date().toISOString().split('T')[0]);
    const initialParameter = ref('Power');

    onMounted(() => {
      if (selectedMachine.value) {
        machineStore.fetchMachineData(selectedMachine.value.id, initialDate.value, initialParameter.value);
      }
    });

    watch(selectedMachine, (newMachine) => {
      if (newMachine) {
        machineStore.fetchMachineData(newMachine.id, initialDate.value, initialParameter.value);
      }
    });

    return {
      selectedMachine,
      initialDate,
      initialParameter,
    };
  },
};
</script>

<style scoped>
.machine-details {
  overflow-wrap: break-word;
}

.chart-container {
  min-height: 400px;
}
</style>