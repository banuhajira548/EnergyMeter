<template>
  <div class="frequency-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Frequency</h2>
    <div class="mt-4">
      <p v-if="frequency !== null" class=" text-teal-400">
        Frequency : <span>{{ frequency }}</span>
      </p>
      <p v-else class="font-bold text-teal-400">
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
import { useCurrentStore } from '../stores/useCurrentStore';
import { onMounted, computed } from 'vue';

export default {
  name: 'FrequencyChart',
  setup() {
    const currentStore = useCurrentStore();

    onMounted(() => {
      currentStore.fetchCurrentData();
    });

    const frequency = computed(() => currentStore.frequency);

    return {
      frequency,
    };
  },
};
</script>

<style scoped>
.frequency-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
}
.frequency-chart h2 {
  font-size: 2.125rem;
  font-weight: 600;
}
.frequency-chart p {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.frequency-chart p span {
  color: #14b8a6;
  font-weight: bold;
}
</style>
