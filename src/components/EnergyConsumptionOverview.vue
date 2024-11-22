<template>
  <div class="p-5 flex justify-center">
    <div class="bg-slate-100 shadow-lg flex items-center justify-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-64 sm:h-72">
      <!-- Pie chart will be here -->
      <div ref="chartContainer" class="w-full h-full"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EnergyConsumptionOverview',
  mounted() {
    this.renderChart();
    window.addEventListener('resize', this.onResize); // Add resize event listener
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize); // Remove resize event listener
  },
  methods: {
    renderChart() {
      const chartDom = this.$refs.chartContainer;
      this.myChart = echarts.init(chartDom);
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '10%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '120%'],
            center: ['50%', '92%'],
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 77, name: 'KEB' },
              { value: 23, name: 'Generator' }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    },
    onResize() {
      if (this.myChart) {
        this.myChart.resize(); // Resize chart on window resize
      }
    }
  }
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
