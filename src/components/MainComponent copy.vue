<template>
  <div class="main-component">
    <div class="machine-cards">
      <MachineCard v-for="(machine, index) in machines" :key="index" :machine="machine" />
    </div>
  </div>
</template>

<script setup>
import MachineCard from "./MachineCard.vue";
import { useMachineStore } from '../stores/machineStore';
import { storeToRefs } from 'pinia';

const machineStore = useMachineStore();
const { machines } = storeToRefs(machineStore);
</script>

<style scoped>
.main-component {
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}

.machine-cards {
  display: flex;
  flex-wrap: wrap;
  margin: -5px; /* Negative margin to counteract child padding */
  width: calc(100% + 10px); /* Compensate for negative margin */
}
</style>
