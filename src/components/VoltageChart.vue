<!-- VoltageChart.vue  -->
<template>
  <div class="voltage-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Voltage</h2>
    <div class="mt-4">
      <p class="text-teal-400">Average : <span>{{ vllAverage || 'NaN' }}</span></p>
      <p v-if="vryPhase !== null" class="blue-900">
        Phase Voltage (Ir) : <span>{{ vryPhase }}</span>
      </p>
      <p v-if="vybPhase !== null" class="blue-900">
        Phase Voltage (Iy) : <span>{{ vybPhase }}</span>
      </p>
      <p v-if="vbrPhase !== null" class="blue-900">
        Phase Voltage (Ib) : <span>{{ vbrPhase }}</span>
      </p>
      <p v-if="isLoading" class="font-bold text-teal-400">
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

export default {
  name: 'VoltageChart',
  props: ['machineId'],
  setup(props) {
    const vllAverage = ref(null);
    const vryPhase = ref(null);
    const vybPhase = ref(null);
    const vbrPhase = ref(null);
    const isLoading = ref(true);

    let intervalId;

    const fetchVoltageData = async () => {
      try {
        const response = await axios.get('http://172.18.100.88:7001/sensor_data/recent');
        const data = response.data;
        
        vllAverage.value = data.vll_average;
        vryPhase.value = data.vry_phase;
        vybPhase.value = data.vyb_phase;
        vbrPhase.value = data.vbr_phase;
        
        isLoading.value = false;
      } catch (error) {
        console.error('Error fetching voltage data:', error);
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchVoltageData();
      intervalId = setInterval(fetchVoltageData, 5000); // Fetch data every 5 seconds
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      vllAverage,
      vryPhase,
      vybPhase,
      vbrPhase,
      isLoading
    };
  }
};
</script>

<style scoped>
.voltage-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
}
.voltage-chart h2 {
  font-size: 2.125rem;
  font-weight: 600;
}
.voltage-chart p {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.voltage-chart p span {
  color: #14b8a6;
  font-weight: bold;
}
</style>
