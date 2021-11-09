<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon name="computer" style="font-size: 5rem" />
      Computer Studies Department, CIT
    </div>
    <br />
    <q-table
      title="NAMES OF FACULTY"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      hide-bottom
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-lg row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
              <q-btn
                outline
                color="blue"
                label="view"
                size="md"
                class="q-ml-sm"
                to="ClientViewFSR"
              />
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <br />
    <q-btn
      push
      glossy
      color="red-10"
      label="Back"
      class="float-right q-mx-xl"
      style="width: 200px"
      to="homepage_client"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  name: string;
}
@Options({})
export default class FacultyList extends Vue {
  columns = [
    {
      name: 'no',
      label: '',
      align: 'left',
      field: 'no',
    },
    {
      name: 'name',
      required: true,
      label: 'Firstname',
      align: 'left',
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'middlename',
      align: 'left',
      label: 'Middle Name',
      field: 'middlename',
    },
    {
      name: 'lastname',
      align: 'left',
      label: 'Lastname',
      field: 'lastname',
    },
  ];
  rows = [
    {
      no: '1.',
      name: 'Sakuragi',
      middlename: 'Abdulrahim',
      lastname: 'Hanamichi',
    },
    {
      no: '2.',
      name: 'Rukawa',
      middlename: 'Carim',
      lastname: 'Kaede',
    },
    {
      no: '3.',
      name: 'Maki',
      middlename: 'Ampuan',
      lastname: 'Sinichi',
    },
    {
      no: '4.',
      name: 'Akagi',
      middlename: 'Panganting',
      lastname: 'Takenori',
    },
    {
      no: '5.',
      name: 'Mitsui',
      middlename: 'Maruhom',
      lastname: 'Hisashi',
    },
  ];
  filter = '';
  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
