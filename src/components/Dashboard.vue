<template>
    <div class="dashboard">
      <EnergyConsumptionOverview />
      <RowTwo/>
      <MainComponent/>
    </div>
  </template>
  
  <script>
  // import EnergyConsumptionOverview from './EnergyConsumptionOverview.vue';
  // import RowTwo from './RowTwo.vue';
  import MainComponent from './MainComponent.vue';

  export default {
    name: 'Dashboard',
    components: {
      // EnergyConsumptionOverview,
      // RowTwo,
      MainComponent,
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    flex-wrap: wrap;
    height: 802px;
  }

 
  </style>
  