<!-- MachineDetail.vue -->
<template>
  <div class="machine-detail bg-gray-100 min-h-screen p-2 sm:p-4" v-if="selectedMachine">
    <BackButton class="mb-2 sm:mb-4"/>
    
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <DetailedPage class="mb-4"/>
      
      <div class="p-3 sm:p-4">
        <h2 class="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
          Machine Analytics
        </h2>
        
        <div class="space-y-4">
          <div class="bg-gray-50 rounded-lg p-3 sm:p-4">
            <!-- <h3 class="text-lg font-semibold mb-2 text-gray-700">
              Power Metrics
            </h3> -->
            <GraphThree :machineId="selectedMachine.id" />
          </div>
          
          <div class="bg-gray-50 rounded-lg p-3 sm:p-4">
            <!-- <h3 class="text-lg font-semibold mb-2 text-gray-700">
              Electrical Parameters
            </h3> -->
            <GraphSix :machineId="selectedMachine.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMachineStore } from '../stores/machineStore';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import DetailedPage from './DetailedPage.vue';
import BackButton from './BackButton.vue';
import GraphThree from './GraphThree.vue';
import GraphSix from './GraphSix.vue';

const machineStore = useMachineStore();
const { selectedMachine } = storeToRefs(machineStore);

onMounted(() => {
  if (selectedMachine.value) {
    machineStore.fetchMachineData(selectedMachine.value.id, new Date().toISOString().split('T')[0], 'all');
  }
});

watch(selectedMachine, (newMachine) => {
  if (newMachine) {
    machineStore.fetchMachineData(newMachine.id, new Date().toISOString().split('T')[0], 'all');
  }
});
</script>

<style scoped>
.machine-detail {
  transition: all 0.3s ease;
}

@media (min-width: 640px) {
  .machine-detail {
    padding: 1.5rem;
  }
}
</style>