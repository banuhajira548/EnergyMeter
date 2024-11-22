<!-- CurrentChart.vue -->
<template>
  <div class="current-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Current</h2>
    <div class="mt-4">
      <p class="font-bold text-teal-400">Average Current : <span>{{ averageCurrent }}</span></p>
      <p>Phase Current (Ir) : <span>{{ phaseCurrentIr }}</span></p>
      <p>Phase Current (Iy) : <span>{{ phaseCurrentIy }}</span></p>
      <p>Phase Current (Ib) : <span>{{ phaseCurrentIz }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentChart',
  props: ['currentData'],
  computed: {
    averageCurrent() {
      return this.currentData.averageCurrent ?? 'NaN';
    },
    phaseCurrentIr() {
      return this.currentData.phaseCurrentIr ?? 'NaN';
    },
    phaseCurrentIy() {
      return this.currentData.phaseCurrentIy ?? 'NaN';
    },
    phaseCurrentIz() {
      return this.currentData.phaseCurrentIz ?? 'NaN';
    }
  }
};
</script>

<style scoped>
.current-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
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