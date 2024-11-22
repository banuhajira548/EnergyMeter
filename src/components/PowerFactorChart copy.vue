<!-- PowerFactorChart.vue -->
<template>
  <div class="power-factor-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Power Factor</h2>
    <div class="mt-4">
      <p class="font-bold text-teal-400">Average Power Factor : <span>{{ averagePowerFactor }}</span></p>
      <p>Power Factor1 : <span>{{ powerFactor1 }}</span></p>
      <p>Power Factor2 : <span>{{ powerFactor2 }}</span></p>
      <p>Power Factor3 : <span>{{ powerFactor3 }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PowerFactorChart',
  props: ['powerFactorData'],
  computed: {
    averagePowerFactor() {
      return this.powerFactorData.averagePowerFactor ?? 'NaN';
    },
    powerFactor1() {
      return this.powerFactorData.powerFactor1 ?? 'NaN';
    },
    powerFactor2() {
      return this.powerFactorData.powerFactor2 ?? 'NaN';
    },
    powerFactor3() {
      return this.powerFactorData.powerFactor3 ?? 'NaN';
    }
  }
};
</script>

<style scoped>
.power-factor-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
  height: 350px; /* Set the height to 290px */
}
.power-factor-chart h2 {
  font-size: 2.125rem;
  font-weight: 600;
}
.power-factor-chart p {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.power-factor-chart p span {
  color: #14b8a6;
  font-weight: bold;
}
</style>
