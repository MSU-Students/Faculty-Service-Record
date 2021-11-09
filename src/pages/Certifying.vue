<template>
  <q-page class="bg-blue-1">
    <div class="q-pa-md">
      <div class="text-h6 q-pb-md">
        Name: Hanamichi Sakuragi
       <!-- <q-img
          src="../assets/image/FB_IMG_1627831409221.jpg"
          style="height: 140px; max-width: 150px"
          class="float-right q-mx-xl"
        >
        </q-img>
      !-->
      </div>
      <div class="text-h6 q-pb-md">Department: Computer Studies</div>
      <div class="text-h6 q-pb-md">Chairperson: Coach Ansai</div>
      <br />
      <div class="q-gutter-sm row">
        <div class="text-h6 q-pr-lg">Month: October</div>
        <div class="text-h6 q-px-xl">Year: 2021</div>
      </div>
      <div class="q-pt-md">
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
              <q-td
                key="absent_onleave_officialbusiness_undertime"
                :props="props"
              >
                {{ props.row.absent_onleave_officialbusiness_undertime }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
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
    instruction_class: '8',
    consultation_activities: '5',
    community_institutional: '8',
    hours: '8',
    absent_onleave_officialbusiness_undertime: '8',
  },
  {
    no: 2,
    name: 'Tuesday',
    instruction_class: '4',
    consultation_activities: '8',
    community_institutional: '3',
    hours: '8',
    absent_onleave_officialbusiness_undertime: '6',
  },
  {
    no: 3,
    name: 'Wednesday',
    instruction_class: '5',
    consultation_activities: '2',
    community_institutional: '5',
    hours: '8',
    absent_onleave_officialbusiness_undertime: '5',
  },
  {
    no: 4,
    name: 'Thursday',
    instruction_class: '8',
    consultation_activities: '5',
    community_institutional: '7',
    hours: '8',
    absent_onleave_officialbusiness_undertime: '5',
  },
  {
    no: 5,
    name: 'Friday',
    instruction_class: '9',
    consultation_activities: '6',
    community_institutional: '7',
    hours: '5',
    absent_onleave_officialbusiness_undertime: '8',
  },
];

export default {
  setup() {
    return {
      rows: ref(rows),
      columns,
      model: ref(null),
      model1: ref(null),
      text: ref(''),
    };
  },
};
</script>
