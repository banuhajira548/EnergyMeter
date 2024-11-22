// src/stores/dashboardStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useDashboardStore = defineStore('dashboard', () => {
  // State
  const selectedParameter = ref('');
  const selectedDate = ref(new Date().toISOString().split('T')[0]); // Today's date
  const machineData = ref({});

  // Getters (computed properties)
  const getMachineData = computed(() => (machineId) => machineData.value[machineId] || {});

  // Actions
  async function fetchDashboardData(machineId) {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT', {
        params: {
          machineId,
          date: selectedDate.value,
          parameter: selectedParameter.value
        }
      });
      
      // Update the state with the fetched data for the specific machine
      machineData.value = {
        ...machineData.value,
        [machineId]: {
          currentData: response.data.currentData,
          voltageData: response.data.voltageData,
          energyData: response.data.energyData,
          powerData: response.data.powerData,
          frequencyData: response.data.frequencyData,
          powerFactorData: response.data.powerFactorData,
          graphData: response.data.graphData
        }
      };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  }

  function setSelectedParameter(parameter) {
    selectedParameter.value = parameter;
  }

  function setSelectedDate(date) {
    selectedDate.value = date;
  }

  // Machine-specific computed properties
  const averageCurrent = computed(() => (machineId) => 
    getMachineData.value(machineId).currentData?.averageCurrent ?? 'NaN'
  );
  const averageVoltage = computed(() => (machineId) => 
    getMachineData.value(machineId).voltageData?.averageVoltage ?? 'NaN'
  );
  const frequency = computed(() => (machineId) => 
    getMachineData.value(machineId).frequencyData?.frequency ?? 'NaN'
  );
  const averagePowerFactor = computed(() => (machineId) => 
    getMachineData.value(machineId).powerFactorData?.averagePowerFactor ?? 'NaN'
  );

  return {
    // State
    selectedParameter,
    selectedDate,
    machineData,

    // Getters
    getMachineData,
    averageCurrent,
    averageVoltage,
    frequency,
    averagePowerFactor,

    // Actions
    fetchDashboardData,
    setSelectedParameter,
    setSelectedDate,
  };
});