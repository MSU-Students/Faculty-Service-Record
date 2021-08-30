<template>
  <div class="q-pa-md">
    <div class="q-pt-md">
      <q-btn
        icon="add"
        color="primary"
        dense
        outline
        @click="show_dialog = true"
        >click here!!!</q-btn
      >
      <div class="q-gutter-md row float-right q-na-sm">
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

    <div class="q-pa-md"></div>
    <q-table
      separator="cell"
      title="NUMBER OF HOURS"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="no" :props="props">
            {{ props.row.no }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="instruction_class" :props="props">
            {{ props.row.instruction_class }}
          </q-td>
          <q-td key="consultation_activities" :props="props">
            {{ props.row.consultation_activities }}
          </q-td>
          <q-td key="community_institutional" :props="props">
            {{ props.row.community_institutional }}
          </q-td>
          <q-td key="hours" :props="props">
            {{ props.row.hours }}
          </q-td>
          <q-td key="absent_onleave_officialbusiness_undertime" :props="props">
            {{ props.row.absent_onleave_officialbusiness_undertime }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="show_dialog">
      <q-card style="width: 600px">
        <q-card-selection>
          <span class="text-h6">NUMBER OF HOURS</span>
        </q-card-selection>
        <q-card-selection>
          <q-input
            v-model="number_of_hours"
            label="Instruction Class"
            dense
            outlined
            class="q-ma-sm"
          ></q-input>
          <q-input
            v-model="number_of_hours"
            label="Consultation Activities"
            dense
            outlined
            class="q-ma-sm"
          ></q-input>
          <q-input
            v-model="number_of_hours"
            label="Community or Institutional"
            dense
            outlined
            class="q-ma-sm"
          ></q-input>
          <q-input
            v-model="number_of_hours"
            label="Hours"
            dense
            outlined
            class="q-ma-sm"
          ></q-input>
          <q-input
            v-model="number_of_hours"
            label="Absent, On Leave, Official Business, Undertime"
            dense
            outlined
            class="q-ma-sm"
          ></q-input>
        </q-card-selection>

        <q-card-selection>
          <q-btn
            label="Cancel"
            color="secondary"
            dense
            outline
            class="float-right q-ma-sm"
            @click="show_dialog = false"
          ></q-btn>
          <q-btn
            label="Submit"
            color="primary"
            dense
            outline
            class="float-right q-ma-sm"
            @click="show_dialog = true"
          ></q-btn>
        </q-card-selection>
      </q-card>
    </q-dialog>
  </div>
  <div class="text-h6 q-pa-md row">
    TOTAL: <q-input outlined v-model="text" style="width: 75px" />
  </div>

  <q-btn
    push
    color="primary"
    label="Submit"
    class="float-right q-mx-xl"
    style="width: 200px"
  />
</template>

<script>
const columns = [
  {
    name: 'no',
    label: 'no.',
    align: 'center',
  },
  {
    name: 'name',
    label: 'Day',
    align: 'center',
  },
  {
    name: 'instruction_class',
    align: 'center',
    label: 'Instruction Class',
    field: 'instruction_class',
  },
  {
    name: 'consultation_activities',
    align: 'center',
    label: 'Consultation Activities',
    field: 'consultation_activities',
  },
  {
    name: 'community_institutional',
    align: 'center',
    label: 'Community or Institutional',
    field: 'community_institutional',
  },
  {
    name: 'hours',
    align: 'center',
    label: 'Hours',
    field: 'hours',
  },
  {
    name: 'absent_onleave_officialbusiness_undertime',
    align: 'center',
    label: 'Absent, On Leave, Official Business, Undertime',
    field: 'absent_onleave_officialbusiness_undertime',
  },
];
const rows = [
  {
    no: 1,
    name: 'Monday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: '',
  },
  {
    no: 2,
    name: 'Tuesday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: '',
  },
  {
    no: 3,
    name: 'Wednesday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: '',
  },
  {
    no: 4,
    name: 'Thursday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: '',
  },
  {
    no: 5,
    name: 'Friday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: '',
  },
];
import { ref } from 'vue';
export default {
  data() {
    return {
      show_dialog: false,
      number_of_hours: '',
      columns,
      rows,
      model: ref(null),
      model1: ref(null),
      text: ref(''),
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
