<!-- PowerChart.vue -->
<template>
  <div class="bg-white dark:bg-zinc-800 rounded-lg p-0"> <!-- Removed padding -->
    <h1 class="text-lg font-semibold text-zinc-900 dark:text-white p-2 m-0">Power</h1> <!-- Removed margin -->
    <div class="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'PowerChart',
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el.querySelector('.chart-container'));
      const option = {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'], // Adjust center to better fit within the container
            radius: '100%', // Make the gauge radius take full container width
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
              length: 10, // Reduced length to fit better
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 10, // Reduced distance to fit better
              color: '#999',
              fontSize: 12 // Adjust font size for better visibility
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 15, // Adjust anchor size for better visibility
              itemStyle: {
                borderWidth: 8 // Adjust border width for better visibility
              }
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 44, // Adjust font size for better visibility
              offsetCenter: [0, '6    0%'] // Adjust position to fit better
            },
            data: [
              {
                value: 50
              }
            ]
          }
        ]
      };
      this.chart.setOption(option);
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 290px; /* Adjust height to ensure the gauge is fully visible */
  position: relative;
  overflow: hidden; /* Ensure no overflow */
}
</style>
