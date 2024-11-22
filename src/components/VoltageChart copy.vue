<!-- VoltageChart.vue -->
<template>
  <div class="voltage-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Voltage</h2>
    <div class="mt-4">
      <p class="font-bold text-teal-400">Average Voltage : <span>{{ averageVoltage }}</span></p>
      <p>Phase Voltage (Ir) : <span>{{ phaseVoltageIr }}</span></p>
      <p>Phase Voltage (Iy) : <span>{{ phaseVoltageIy }}</span></p>
      <p>Phase Voltage (Ib) : <span>{{ phaseVoltageIz }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoltageChart',
  props: ['voltageData'],
  computed: {
    averageVoltage() {
      return this.voltageData.averageVoltage ?? 111;
    },
    phaseVoltageIr() {
      return this.voltageData.phaseVoltageIr ?? 'NaN';
    },
    phaseVoltageIy() {
      return this.voltageData.phaseVoltageIy ?? 'NaN';
    },
    phaseVoltageIz() {
      return this.voltageData.phaseVoltageIz ?? 'NaN';
    }
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
  height: 350px; /* Set the height to 290px */
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
