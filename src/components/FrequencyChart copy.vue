<!-- FrequencyChart.vue -->
<template>
  <div class="frequency-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center mt-10  ">Frequency</h2>
    <div class="mt-4">
      <p class="font-bold text-teal-400">Frequency : <span>{{ frequency }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrequencyChart',
  props: ['frequencyData'],
  computed: {
    frequency() {
      return this.frequencyData.frequency ?? 'NaN';
    }
  }
};
</script>

<style scoped>
.frequency-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
  height: 350px; /* Set the height to 290px */
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
