// src/stores/parameterDataStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useParameterDataStore = defineStore('parameterData', {
  state: () => ({
    data: {
      watts_total: [],
      wh_received: [],
      pf_ave: [],
      pf_r_phase: [],
      pf_y_phase: [],
      pf_b_phase: [],
      current_total: [],
      current_r_phase: [],
      current_y_phase: [],
      current_b_phase: [],
      vll_average: [],
      vry_phase: [],
      vyb_phase: [],
      vbr_phase: [],
    },
    parameterMapping: {
      Power: 'watts_total',
      Energy: 'wh_received',
      'Average Power Factor': 'pf_ave',
      'Power Factor 1': 'pf_r_phase',
      'Power Factor 2': 'pf_y_phase',
      'Power Factor 3': 'pf_b_phase',
      'Average Current': 'current_total',
      'Phase Current (Ir)': 'current_r_phase',
      'Phase Current (Iy)': 'current_y_phase',
      'Phase Current (Ib)': 'current_b_phase',
      'Average Voltage': 'vll_average',
      'Phase Voltage(Ir)': 'vry_phase',
      'Phase Voltage(Iy)': 'vyb_phase',
      'Phase Voltage(Ib)': 'vbr_phase',
    }
  }),
  actions: {
    async fetchData(date, parameter) {
      try {
        const parameterName = this.parameterMapping[parameter];
        if (!parameterName) {
          throw new Error('Invalid parameter');
        }
        const response = await axios.get(`http://172.18.100.88:7001/sensor_data/data_by_date?date=${date}&parameter_name=${parameterName}`);
        this.data[parameterName] = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
});
