<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        label="Month"
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="model1"
        :options="options2"
        style="width: 250px"
      />

      <q-select
        label="Year"
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="model"
        :options="options1"
        style="width: 250px"
      />
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
