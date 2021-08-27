<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <div class="q-gutter-md">
          <q-card
            class="absolute-center q-pa-lg bg-deep-purple-1"
            style="width: 30%"
          >
            <div class="text-h5 text-center text-bold q-pa-md">
              Login to continue
            </div>

            <q-input square filled v-model="text" label="Enter your username" />

            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              hint="Enter your password"
              class="q-pt-md"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-option-group
              v-model="group"
              :options="options"
              color="black"
              inline
              class="q-pt-md flex flex-center"
            />
            <div class="text-caption text-weight-light text-red-6 q-pb-md">
              *note: Please check again your inputs
            </div>
            <q-btn
              color="blue"
              glossy
              label="Login"
              style="width: 100%"
              to="form"
            />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),

      group: ref('op1'),

      options: [
        {
          label: 'Faculty',
          value: 'op1',
        },
        {
          label: 'Employee',
          value: 'op2',
        },
        {
          label: 'Chairperson',
          value: 'op3',
        },
      ],
    };
  },
};
</script>
