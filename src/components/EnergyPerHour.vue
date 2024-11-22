<template>
  <div class="energy-consumption-overview">
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EnergyConsumptionOverview',
  data() {
    return {
      chart: null,
      categories: this.initCategories(),
      categories2: this.initCategories2(),
      data: this.generateRandomData(10, 1000),
      data2: this.generateRandomData2(10),
      count: 11,
    };
  },
  mounted() {
    this.initChart();
    this.startDataUpdate();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartContainer);
      const option = {
        title: {
          text: 'Energy/Hour',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          top: '6%'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: this.categories
          },
          {
            type: 'category',
            boundaryGap: true,
            data: this.categories2
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: 'Price',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: 'Order',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: 'Dynamic Bar',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: this.data
          },
          {
            name: 'Dynamic Line',
            type: 'line',
            data: this.data2
          }
        ]
      };
      this.chart.setOption(option);
    },
    startDataUpdate() {
      setInterval(() => {
        const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');

        this.data.shift();
        this.data.push(Math.round(Math.random() * 1000));

        this.data2.shift();
        this.data2.push(+(Math.random() * 10 + 5).toFixed(1));

        this.categories.shift();
        this.categories.push(axisData);

        this.categories2.shift();
        this.categories2.push(this.count++);

        this.chart.setOption({
          xAxis: [
            {
              data: this.categories
            },
            {
              data: this.categories2
            }
          ],
          series: [
            {
              data: this.data
            },
            {
              data: this.data2
            }
          ]
        });
      }, 2100);
    },
    initCategories() {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }
      return res;
    },
    initCategories2() {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(10 - len - 1);
      }
      return res;
    },
    generateRandomData(count, max) {
      let res = [];
      while (count--) {
        res.push(Math.round(Math.random() * max));
      }
      return res;
    },
    generateRandomData2(count) {
      let res = [];
      while (count--) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
      }
      return res;
    }
  }
};
</script>

<style scoped>
.energy-consumption-overview {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}

.chart-container {
  height: 100%;
  width: 100%;
}
</style>
