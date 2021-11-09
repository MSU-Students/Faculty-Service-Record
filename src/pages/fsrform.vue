<template>
  <q-page class="bg-blue-1">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon name="account_circle" style="font-size: 4rem" />
        Faculty Service Record (FSR)
      </div>

      <div class="q-pa-md">
        <div class="q-gutter-md row float-right q-na-xl">
          <q-select
            label="Month"
            outline
            transition-show="scale"
            transition-hide="scale"
            filled
            v-model="model1"
            :options="options2"
            style="width: 250px"
          />
          <q-select
            label="Year"
            outline
            transition-show="scale"
            transition-hide="scale"
            filled
            v-model="model"
            :options="options1"
            style="width: 250px"
          />
        </div>
      </div>
      <div class="q-pt-xl">
        <q-table
          separator="cell"
          title="NUMBER OF HOURS"
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-bottom
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
                <q-popup-edit
                  v-model="props.row.instruction_class"
                  title="no. of hours"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model="props.row.instruction_class"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </q-td>
              <q-td key="consultation_activities" :props="props">
                {{ props.row.consultation_activities }}
                <q-popup-edit
                  v-model="props.row.consultation_activities"
                  title="no. of hours"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model="props.row.consultation_activities"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </q-td>
              <q-td key="community_institutional" :props="props">
                {{ props.row.community_institutional }}
                <q-popup-edit
                  v-model="props.row.community_institutional"
                  title="no. of hours"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model="props.row.community_institutional"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </q-td>
              <q-td key="hours" :props="props">
                {{ props.row.hours }}
                <q-popup-edit
                  v-model="props.row.hour"
                  title="no. of hours"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model="props.row.hours"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </q-td>
              <q-td
                key="absent_onleave_officialbusiness_undertime"
                :props="props"
              >
                {{ props.row.absent_onleave_officialbusiness_undertime }}
                <q-popup-edit
                  v-model="props.row.absent_onleave_officialbusiness_undertime"
                  title="no. of hours"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model="
                      props.row.absent_onleave_officialbusiness_undertime
                    "
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div class="text-h6 q-pa-md row">
        TOTAL OF HOURS: <q-input outlined v-model="text" style="width: 75px" />
      </div>
      <q-btn
        push
        color="primary"
        glossy
        label="Submit"
        class="float-right q-mx-xl"
        style="width: 200px"
        to="view_fsr"
      />
      <q-btn
        push
        color="red-10"
        glossy
        label="Reset"
        class="float-right q-mx-xl"
        style="width: 200px"
      />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
const columns = [
  {
    name: 'no',
    label: 'no.',
    align: 'center'
  },
  {
    name: 'name',
    label: 'Day',
    align: 'center'
  },
  {
    name: 'instruction_class',
    align: 'center',
    label: 'Instruction Class',
    field: 'instruction_class'
  },
  {
    name: 'consultation_activities',
    align: 'center',
    label: 'Consultation Activities',
    field: 'consultation_activities'
  },
  {
    name: 'community_institutional',
    align: 'center',
    label: 'Community or Institutional',
    field: 'community_institutional'
  },
  {
    name: 'hours',
    align: 'center',
    label: 'Hours',
    field: 'hours'
  },
  {
    name: 'absent_onleave_officialbusiness_undertime',
    align: 'center',
    label: 'Absent, On Leave, Official Business, Undertime',
    field: 'absent_onleave_officialbusiness_undertime'
  }
];
const rows = [
  {
    no: 1,
    name: 'Monday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: ''
  },
  {
    no: 2,
    name: 'Tuesday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: ''
  },
  {
    no: 3,
    name: 'Wednesday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: ''
  },
  {
    no: 4,
    name: 'Thursday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: ''
  },
  {
    no: 5,
    name: 'Friday',
    instruction_class: '',
    consultation_activities: '',
    community_institutional: '',
    hours: '',
    absent_onleave_officialbusiness_undertime: ''
  }
];

export default {
  setup() {
    return {
      rows: ref(rows),
      columns,
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
        'December'
      ],
      options1: ['2019', '2020', '2021', '2022', '2023', '2024', '2025']
    };
  }
};
</script>
