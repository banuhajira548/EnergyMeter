<template>
  <div class="bg-white dark:bg-zinc-800 rounded-lg p-0">
    <h2 class="text-xl font-semibold text-zinc-900 dark:text-white p-2 m-0">Power</h2>
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { useCurrentStore } from '../stores/useCurrentStore';
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue';

export default {
  name: 'PowerChart',
  setup() {
    const currentStore = useCurrentStore();
    const chartContainer = ref(null);
    let chart = null;

    const initChart = () => {
      if (chartContainer.value) {
        chart = echarts.init(chartContainer.value);
        const option = {
          series: [
            {
              type: 'gauge',
              center: ['50%', '50%'], // Move the gauge center upwards
              radius: '100%',
              progress: {
                show: true,
                width: 18
              },
              axisLine: {
                lineStyle: {
                  width: 18
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                length: 10,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 12
              },
              anchor: {
                show: true,
                showAbove: true,
                size: 15,
                itemStyle: {
                  borderWidth: 8
                }
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                fontSize: 44,
                offsetCenter: [0, '80%'], // Move the value display lower
                formatter: (value) => {
                  // Format the detail value to show the value with unit
                  return `${value.toFixed(0)} kW`; // Display value with unit kW
                }
              },
              data: [
                {
                  value: (currentStore.wattsTotal || 0) // Set the initial value
                }
              ],
              min: 500, // Minimum value for the gauge
              max: 5000, // Maximum value for the gauge
              splitNumber: 10, // Number of splits
            }
          ]
        };
        chart.setOption(option);
      }
    };

    const handleResize = () => {
      if (chart) {
        chart.resize();
      }
    };

    onMounted(async () => {
      await currentStore.fetchCurrentData();
      nextTick().then(() => {
        initChart();
        window.addEventListener('resize', handleResize);
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
      if (chart) {
        chart.dispose();
      }
    });

    watch(() => currentStore.wattsTotal, (newValue) => {
      if (chart) {
        chart.setOption({
          series: [{
            data: [{ value: newValue || 0 }] // Update the gauge value
          }]
        });
      }
    });

    return {
      chartContainer
    };
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px; /* Maintain the height to ensure the gauge fits well */
  position: relative;
}
</style>
