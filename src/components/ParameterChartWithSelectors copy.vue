<template>
  <div class="parameter-chart-with-selectors h-full w-full flex flex-col">
    <div class="header mb-2">
      <h1 class="text-xl font-bold ml-10">Parameter vs Time</h1>
    </div>
    <div class="chart-container flex-grow" style="height: calc(100% - 80px);">
      <div ref="chartRef" style="width: 100%; height: 100%;"></div>
    </div>
    <div class="selectors flex justify-between items-center mt-2" style="height: 40px;">
      <div class="parameter-selector flex items-center">
        <label class="mr-2 text-sm mb-5 ml-4">Parameters:</label>
        <select 
          v-model="selectedParameter"
          @change="updateChart"
          class="bg-navy-blue border border-black rounded p-1 text-sm mb-5"
        >
          <option value="Power">Power</option>
          <option value="Energy">Energy</option>
          <option value="Average Power Factor">Average Power Factor</option>
          <option value="Power Factor 1">Power Factor 1</option>
          <option value="Power Factor 2">Power Factor 2</option>
          <option value="Power Factor 3">Power Factor 3</option>
          <option value="Average Current">Average Current</option>
          <option value="Phase Current (Ir)">Phase Current (Ir)</option>
          <option value="Phase Current (Iy)">Phase Current (Iy)</option>
          <option value="Phase Current (Ib)">Phase Current (Ib)</option>
          <option value="Average Voltage">Average Voltage</option>
          <option value="Phase Voltage(Ir)">Phase Voltage(Ir)</option>
          <option value="Phase Voltage(Iy)">Phase Voltage(Iy)</option>
          <option value="Phase Voltage(Ib)">Phase Voltage(Ib)</option>
        </select>
      </div>
      <div class="date-selector flex items-center">
        <label class="mr-2 text-sm  mb-5">Date:</label>
        <input 
          type="date" 
          v-model="selectedDate"
          @change="updateChart"
          class="bg-navy-blue border border-black rounded p-1 text-sm mr-5 mb-5"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import { useParameterDataStore } from '../stores/parameterDataStore';

export default {
  name: 'ParameterChartWithSelectors',
  props: {
    initialParameter: {
      type: String,
      default: 'Power'
    },
    initialDate: {
      type: String,
      default: () => new Date().toISOString().split('T')[0]
    }
  },
  setup(props) {
    const chartRef = ref(null);
    const chartInstance = ref(null);
    const selectedParameter = ref(props.initialParameter);
    const selectedDate = ref(props.initialDate);
    const store = useParameterDataStore();

    const updateChart = async () => {
      await store.fetchData(selectedDate.value, selectedParameter.value);

      const parameterName = store.parameterMapping[selectedParameter.value];
      const data = store.data[parameterName];

      // Check if data is available
      if (!data || data.length === 0) {
        // Clear the chart or show a message indicating no data is available
        const option = {
          title: {
            text: 'No data available for the selected date',
            left: 'center'
          },
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [],
            type: 'line',
            smooth: true
          }]
        };
        chartInstance.value.setOption(option);
        return;
      }

      const timestamps = data.map(item => new Date(item.timestamp).toLocaleTimeString());
      const values = data.map(item => item.value);

      const option = {
        title: {
          text: `${selectedParameter.value} vs Time`,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => `${params[0].name} : ${params[0].value}`
        },
        xAxis: {
          type: 'category',
          data: timestamps
        },
        yAxis: {
          type: 'value',
          name: selectedParameter.value
        },
        series: [{
          data: values,
          type: 'line',
          smooth: true
        }]
      };

      if (chartInstance.value) {
        chartInstance.value.setOption(option);
      } else {
        console.error('Chart instance is not initialized');
      }
    };

    onMounted(() => {
      if (chartRef.value) {
        chartInstance.value = echarts.init(chartRef.value);
        console.log('Chart instance initialized');
        updateChart();
      } else {
        console.error('Chart reference is not found');
      }
    });

    watch([selectedParameter, selectedDate], () => {
      console.log('Parameters or Date changed');
      updateChart();
    });

    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.dispose();
      }
    });

    return {
      chartRef,
      selectedParameter,
      selectedDate,
      updateChart
    };
  }
};
</script>

<style scoped>
.parameter-chart-with-selectors {
  background-color: #f9f9fa;
}

.bg-navy-blue {
  background-color: #f7f7f8;
  color: rgb(10, 10, 10);
}

select, input {
  max-width: 150px;
}
</style>
