<template>
  <q-page class="bg-image">
    <div class="q-gutter-md row items-start">
      <div class="q-gutter-md">
        <q-card class="absolute-center q-pa-lg" style="width: 30%">
          <div class="text-h5 text-center text-bold q-pb-md">
            Login to continue
          </div>

          <q-input square filled v-model="text" label="Enter your username" />

          <q-input
            v-model="password"
            label="Enter your password"
            filled
            :type="isPwd ? 'password' : 'text'"
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

          <div class="q-pt-lg flex flex-center">
            You are logging in as:
            <div class="q-ma-xs"></div>
            <strong>{{ color }}</strong>
          </div>
          <div class="q-gutter-sm q-pt-md">
            <q-radio
              keep-color
              v-model="color"
              val="Faculty"
              label="Faculty"
              color="teal"
            />
            <q-radio
              keep-color
              v-model="color"
              val="Employee"
              label="Employee"
              color="orange"
            />
            <q-radio
              keep-color
              v-model="color"
              val="Chairperson"
              label="Chairperson"
              color="red"
            />
          </div>

          <div class="text-caption text-weight-light text-red-6 q-pa-md">
            *note: Please check again your inputs
          </div>
          <q-btn
            push
            color="blue"
            glossy
            label="LOGIN"
            style="width: 100%"
            to="form"
          />
        </q-card>
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
      color: ref(''),

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
