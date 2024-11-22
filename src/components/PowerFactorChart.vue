<!-- PowerFactorChart.vue  -->
<template>
  <div class="power-factor-chart bg-blue-900 text-white rounded-lg p-4">
    <h2 class="text-lg font-semibold text-center">Power Factor</h2>
    <div class="mt-4">
      <p v-if="averagePowerFactor !== null" class=" text-teal-400">
        Average Power Factor : <span>{{ averagePowerFactor }}</span>
      </p>
     
      <p v-if="pfRPhase !== null" class="blue-900">
        Power Factor 1 : <span>{{ pfRPhase }}</span>
      </p>
      <p v-if="pfYPhase !== null" class="blue-900">
        Power Factor 2 : <span>{{ pfYPhase }}</span>
      </p>
      <p v-if="pfBPhase !== null" class="blue-900">
       Power Factor 3 : <span>{{ pfBPhase }}</span>
      </p>

      <p v-else class="font-bold text-teal-400">
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
import { useCurrentStore } from '../stores/useCurrentStore';
import { onMounted, computed } from 'vue';

export default {
  name: 'PowerFactorChart',
  setup() {
    const currentStore = useCurrentStore();

    onMounted(() => {
      currentStore.fetchCurrentData();
    });

    const averagePowerFactor = computed(() => currentStore.pfAve);
    const pfBPhase = computed(() => currentStore.pfBPhase);
    const pfRPhase = computed(() => currentStore.pfRPhase);
    const pfYPhase = computed(() => currentStore.pfYPhase);

    return {
      averagePowerFactor,
      pfBPhase,
      pfRPhase,
      pfYPhase,
    };
  },
};
</script>

<style scoped>
.power-factor-chart {
  background-color: white;
  color: #1e3a8a;
  border-radius: 0.5rem;
  padding: 4rem;
  text-align: center;
  height: 350px;
}
.power-factor-chart h2 {
  font-size: 2.125rem;
  font-weight: 600;
}
.power-factor-chart p {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.power-factor-chart p span {
  color: #14b8a6;
  font-weight: bold;
}
</style>
