<!-- MachineDetail.vue -->
<template>
  <div class="machine-detail" v-if="selectedMachine">
    <DetailedPage/>
    <div class="flex flex-col flex-1 p-13">
      <div class="flex items-center justify-between">
      </div>
      
      <BackButton/>

      <div class="mb-3">
        <GraphThree />
      </div>
      
      <GraphSix />
    </div>
  </div>
</template>

<script setup>
import { useMachineStore } from '../stores/machineStore';
import { storeToRefs } from 'pinia';
import DetailedPage from './DetailedPage.vue';
import BackButton from './BackButton.vue';
import GraphThree from './GraphThree.vue';
import GraphSix from './GraphSix.vue';

const machineStore = useMachineStore();
const { selectedMachine } = storeToRefs(machineStore);
</script>

<style scoped>
.machine-detail {
  background-color: rgb(245, 245, 245);
  height: 1190px;
}
.status-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 5px;
}
.status-button.on {
  background-color: green;
}
.status-button.off {
  background-color: red;
}
</style>
