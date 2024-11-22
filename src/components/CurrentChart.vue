<template>
  <div class="current-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Current</h2>
    <div class="mt-4">
      <p class=" text-teal-400">Total Current : <span>{{ currentTotal || 'NaN' }}</span></p>
      <p>Phase Current (Ir) : <span>{{ currentRPhase || 'NaN' }}</span></p>
      <p>Phase Current (Iy) : <span>{{ currentYPhase || 'NaN' }}</span></p>
      <p>Phase Current (Ib) : <span>{{ currentBPhase || 'NaN' }}</span></p>
    </div>
  </div>
</template>

<script>
import { useCurrentStore } from '../stores/useCurrentStore';
import { onMounted, onUnmounted, computed, watchEffect } from 'vue';

export default {
  name: 'CurrentChart',
  setup() {
    const currentStore = useCurrentStore();

    const fetchData = () => {
      currentStore.fetchCurrentData();
    };

    onMounted(() => {
      fetchData(); // Initial fetch
      const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

      // Clear the interval when the component is unmounted
      onUnmounted(() => {
        clearInterval(interval);
      });
    });

    // Use computed properties to ensure reactivity
    const currentRPhase = computed(() => currentStore.currentRPhase);
    const currentYPhase = computed(() => currentStore.currentYPhase);
    const currentBPhase = computed(() => currentStore.currentBPhase);
    const currentTotal = computed(() => currentStore.currentTotal);

    // Watch the state changes
    watchEffect(() => {
      console.log("Current values updated:", {
        currentRPhase: currentRPhase.value,
        currentYPhase: currentYPhase.value,
        currentBPhase: currentBPhase.value,
        currentTotal: currentTotal.value,
      });
    });

    return {
      currentRPhase,
      currentYPhase,
      currentBPhase,
      currentTotal,
    };
  },
};
</script>

<style scoped>
.current-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
  height: 350px; 
}
.current-chart h2 {
  font-size: 2.125rem;
  font-weight: 600;
}
.current-chart p {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.current-chart p span {
  color: #14b8a6;
  font-weight: bold;
}
</style>
