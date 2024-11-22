<template>
  <div class="energy-consumption-overview">
    <div class="meter bg-slate-100 shadow-lg">
      <div class="chart-container"><EnergyPerDay /></div>
    </div>
    <div class="meter bg-slate-100 shadow-lg">
      <div class="chart-container"><Isolationtransformer /></div>
    </div>
    <div class="meter bg-slate-100 shadow-lg">
      <div class="chart-container"><EnergyPerHour /></div>
    </div>
  </div>
</template>

<script>
import EnergyPerDay from './EnergyPerDay.vue';
import Isolationtransformer from './Isolationtransformer.vue';
import EnergyPerHour from './EnergyPerHour.vue';

export default {
  name: 'EnergyConsumptionOverview',
  components: {
    EnergyPerDay,
    Isolationtransformer,
    EnergyPerHour
  }
};
</script>

<style scoped>
.energy-consumption-overview {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.meter {
  border-radius: 8px;
  flex: 1 1 30%; /* Grow to fill available space, initial width 30% */
  height: 280px;
  margin: 10px;
}

.chart-container {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .meter {
    flex: 1 1 100%; /* Take full width on small screens */
    margin: 10px 0; /* Add vertical margin between stacked items */
  }
}
</style>
