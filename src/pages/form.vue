<template>
  <q-page class="bg-image">
    <q-card class="absolute-center q-pa-lg bg-blue-grey-1" style="width: 25%">
      <div class="text-h5 text-center text-bold q-pb-md">
        FACULTY SERVICE RECORD
      </div>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-select
          filled
          v-model="model"
          :options="options"
          label="Department"
        />

        <div class="text-caption text-weight-light text-red-6">
          *note: Please check again your inputs
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary" to="fsrform" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-md"
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const accept = ref(false);

    return {
      name,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        accept.value = false;
      },
      model: ref(null),
      options: [
        'Computer Studies Department, CIT',
        'Accountancy',
        'Education',
        'Nursing',
        'Public Administration',
      ],
    };
  },
};
</script>
