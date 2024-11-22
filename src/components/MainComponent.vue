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
  width: 100%; /* Adjusted to 100% */
  box-sizing: border-box;
}

.machine-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px; /* Adds space between cards */
}

.machine-cards > * {
  flex-basis: calc(50% - 5px); /* Two cards per row */
  max-width: calc(50% - 5px);
  box-sizing: border-box;
}
</style>