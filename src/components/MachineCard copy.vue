<template>
  <div class="machine-card" @click="navigateToMachine(machine)">
    <div class="machine-content">
      <img :src="machine.image" alt="Machine Photo" class="machine-photo" />
      <div class="machine-details">
        <b>{{ machine.name }}</b>
        <p>{{ machine.Location }} SMDDC</p>
        <p>{{ machine.energyConsumption }} kWh</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMachineStore } from '../stores/machineStore';
import { useRouter } from 'vue-router';

export default {
  name: "MachineCard",
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const machineStore = useMachineStore();
    const router = useRouter();

    const navigateToMachine = (machine) => {
      machineStore.setSelectedMachine(machine);
      router.push({ name: 'MachineDetail', params: { id: machine.id } });
    };

    return { navigateToMachine };
  },
};
</script>

<style scoped>
.machine-card {
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
}

.machine-content {
  height: 150px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.machine-content:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 0px 40px rgba(0, 0, 0, 0.2);
}

.machine-photo {
  width: 45%;
  height: 90%;
  object-fit: contain;
  margin-right: 8px;
}

.machine-details {
  flex-grow: 1;
  overflow: hidden;
}

b {
  font-size: 16px;
  margin-bottom: 4px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p {
  margin: 2px 0;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1200px) {
  .machine-card {
    width: 33.33%;
  }
}

@media (max-width: 992px) {
  .machine-card {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .machine-card {
    width: 100%;
  }
}
</style>