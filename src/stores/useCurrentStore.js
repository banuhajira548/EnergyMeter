// stores/useCurrentStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCurrentStore = defineStore('current', {
  state: () => ({
    // Reactive state properties for storing fetched sensor data
    wattsRPhase: null,
    wattsYPhase: null,
    wattsBPhase: null,
    currentRPhase: null,
    currentYPhase: null,
    currentBPhase: null,
    pfAve: null,
    vllAverage: null,
    currentTotal: null,
    pfRPhase: null,
    vryPhase: null,
    varRPhase: null,
    pfYPhase: null,
    vybPhase: null,
    pfBPhase: null,
    vbrPhase: null,
    vaTotal: null,
    vlnAverage: null,
    frequency: null,
    varTotal: null,
    vaRPhase: null,
    vRPhase: null,
    whReceived: null,
    vaYPhase: null,
    vYPhase: null,
    vaBPhase: null,
    vBPhase: null,
    timestamp: null,
    wattsTotal: null, // Added wattsTotal to the state
  }),

  actions: {
    // Fetches the most recent sensor data from the backend
    async fetchCurrentData() {
      try {
        const response = await axios.get('http://172.18.100.88:7001/sensor_data/recent');
        const data = response.data;

        console.log('Fetched data:', data); // Check the data being fetched

        // Update state properties with fetched data
        this.wattsRPhase = data.watts_r_phase;
        this.wattsYPhase = data.watts_y_phase;
        this.wattsBPhase = data.watts_b_phase;
        this.currentRPhase = data.current_r_phase;
        this.currentYPhase = data.current_y_phase;
        this.currentBPhase = data.current_b_phase;
        this.pfAve = data.pf_ave;
        this.vllAverage = data.vll_average;
        this.currentTotal = data.current_total;
        this.pfRPhase = data.pf_r_phase;
        this.vryPhase = data.vry_phase;
        this.varRPhase = data.var_r_phase;
        this.pfYPhase = data.pf_y_phase;
        this.vybPhase = data.vyb_phase;
        this.pfBPhase = data.pf_b_phase;
        this.vbrPhase = data.vbr_phase;
        this.vaTotal = data.va_total;
        this.vlnAverage = data.vln_average;
        this.frequency = data.frequency;
        this.varTotal = data.var_total;
        this.vaRPhase = data.va_r_phase;
        this.vRPhase = data.v_r_phase;
        this.whReceived = data.wh_received;
        this.vaYPhase = data.va_y_phase;
        this.vYPhase = data.v_y_phase;
        this.vaBPhase = data.va_b_phase;
        this.vBPhase = data.v_b_phase;
        this.wattsTotal = data.watts_total; // Added this line to include watts_total
        this.timestamp = data.timestamp;
      } catch (error) {
        console.error('Failed to fetch current data:', error);
      }
    },
  },
});
