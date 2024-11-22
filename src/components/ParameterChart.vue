<template>
  <div class="para-vs-time h-full w-full">
    <div class="header flex justify-between items-center mb-2">
      <h1 class="text-xl font-bold">Parameter vs Time</h1>
    </div>
    
    <div v-if="chartData && chartData.length > 0" class="chart-container h-full w-full">
      <div ref="chart" class="h-full w-full"></div>
    </div>
    <div v-else class="flex items-center justify-center h-full">
      <p>No data available for the selected parameter.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import * as echarts from 'echarts';
import { useMachineStore } from '../stores/machineStore';

export default {
  name: 'ParameterChart',
  props: ['selectedParameter', 'selectedDate', 'machineId'],
  setup(props) {
    const chart = ref(null);
    const chartInstance = ref(null);
    const chartData = ref([]);
    const machineStore = useMachineStore();

    const updateChartData = async () => {
      await machineStore.fetchMachineData(props.machineId, props.selectedDate, props.selectedParameter);
      const data = machineStore.getMachineData(props.machineId);
      
      if (data && data[props.selectedParameter]) {
        chartData.value = data[props.selectedParameter].map(item => ({
          name: new Date(item.timestamp).toLocaleTimeString(),
          value: item.value
        }));
      } else {
        chartData.value = [];
      }

      if (chartInstance.value) {
        chartInstance.value.setOption({
          xAxis: {
            data: chartData.value.map(item => item.name),
          },
          series: [
            {
              data: chartData.value.map(item => item.value)
            }
          ],
          yAxis: {
            name: props.selectedParameter
          }
        });
      }
    };
    onMounted(async () => {
      updateChartData();

      await nextTick();

      chartInstance.value = echarts.init(chart.value);
      initializeChart();

      setInterval(() => {
        updateChartData();
      }, 1000);
    });

    watch(() => props.selectedParameter, updateChartData);

    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.dispose();
      }
    });
    

    // ... (rest of the setup function remains similar, calling updateChartData instead of generateRandomData) ...

    return {
      chart,
      chartData
    };
  }
};
</script>



<style scoped>
.para-vs-time {
  background-color: #f9f9fa;
}

.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
