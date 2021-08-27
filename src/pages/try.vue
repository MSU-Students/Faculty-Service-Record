<template>
  <div class="q-pa-md">
    <q-table
      card-class="bg-cyan-1"
      separator="cell"
      title="Players"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      columns: [
        {
          name: 'firstname',
          label: 'First Name',
          field: 'firstName',
        },
        {
          name: 'lasttname',
          label: 'Last Name',
          field: 'lastName',
        },
      ],
      rows: [
        {
          firstName: 'Sakuragi',
          lastName: 'Hanamichi',
        },
        {
          firstName: 'Rukawa',
          lastName: 'Kaede',
        },
      ],
    };
  },
};
</script>
