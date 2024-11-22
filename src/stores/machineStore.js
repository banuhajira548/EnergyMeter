// stores/machineStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMachineStore = defineStore('machine', {
  state: () => ({
    selectedMachine: JSON.parse(localStorage.getItem('selectedMachine')) || null,
    machines: [
      { id: 1, name: "Mazak H-400", Location: 1, energyConsumption: 5, image: "../src/assets/machine_1.png" },
      { id: 2, name: "HMT Stallion 200", Location: 5, energyConsumption: 10, image: "../src/assets/machine_2.png" },
      { id: 3, name: "HMT VTC 800", Location: 1, energyConsumption: 5, image: "../src/assets/machine_3.png" },
      { id: 4, name: "Schaublin", Location: 2, energyConsumption: 4, image: "../src/assets/machine_4.png" },
    ],
    machineData: {}
  }),
  actions: {
    setSelectedMachine(machine) {
      this.selectedMachine = machine;
      localStorage.setItem('selectedMachine', JSON.stringify(machine));
    },
    selectMachineById(machineId) {
      const machine = this.machines.find(m => m.id === machineId);
      if (machine) {
        this.setSelectedMachine(machine);
      }
    },
    async fetchMachineData(machineId, date, parameter) {
      try {
        const response = await axios.get(`http://172.18.100.88:7001/sensor_data/machine/${machineId}`, {
          params: { date, parameter }
        });
        this.machineData = {
          ...this.machineData,
          [machineId]: response.data
        };
      } catch (error) {
        console.error('Error fetching machine data:', error);
      }
    }
  },
  getters: {
    getMachineData: (state) => (machineId) => {
      return state.machineData[machineId] || null;
    }
  }
});