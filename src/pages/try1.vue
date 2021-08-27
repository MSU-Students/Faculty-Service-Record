<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select filled v-model="model1" :options="options2" label="month" />
      <q-select filled v-model="model" :options="options1" label="year" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref(null),
      model1: ref(null),
      options2: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      options1: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    };
  },
};
</script>
