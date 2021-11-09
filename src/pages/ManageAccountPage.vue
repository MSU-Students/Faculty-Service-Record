<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold text-blue-10">
      <q-icon name="account_circle" style="font-size: 4rem" color="blue-10" />
      Manage Account
    </div>
    <div class="text-h5 text-center text-bold text-italic q-pb-md">
      List of Accounts
    </div>

    <br />

    <q-table
      :rows="facultys"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-left>
        <div class="q-pa-md q-gutter-sm row">
          <q-btn
            @click="onNewFaculty()"
            icon="add"
            color="primary"
            dense
            outline
            >New Faculty</q-btn
          >
        </div>
      </template>
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
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

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="edit"
              size="sm"
              flat
              dense
              @click="onEditFaculty(props.row)"
            />

            <q-btn
              color="red"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteFaculty(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Update Account</div>
                  <div class="text-h6" v-else>New Account</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentFaculty.fname"
                      label="First Name"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentFaculty.mname"
                      label="Middle Name"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentFaculty.lname"
                      label="Last Name"
                    />
                  </div>

                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentFaculty.username"
                      label="Username"
                    />
                  </div>
                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentFaculty.password"
                      label="Password"
                    />
                  </div>

                  <q-select
                    outlined
                    v-model="presentFaculty.type"
                    :options="options"
                    label="Type"
                  />
                  <q-select
                    outlined
                    v-model="presentFaculty.department"
                    :options="option1"
                    label="Department"
                  />
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn label="Cancel" color="red-10" v-close-popup />
                  <q-btn
                    label="Save"
                    color="primary"
                    @click="onSaveFaculty"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-dialog v-model="confirmDelete" persistent>
              <q-card style="width: 300px">
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                  />
                  <span class="q-ml-sm"
                    >Confirm Delete {{ presentFaculty.fname }}?</span
                  >
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="red-10"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn
                    flat
                    label="Confirm"
                    @click="onCofirmDelete"
                    color="primary"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts">
import { IFacultyInfo } from '../store/faculty/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('faculty', ['facultys', 'activeFaculty']),
  },
  methods: {
    ...mapActions('faculty', ['newFaculty', 'editFaculty', 'deleteFaculty']),
  },
})
export default class ManageAccount extends Vue {
  //vuex properties
  facultys!: IFacultyInfo[];
  newFaculty!: (faculty: IFacultyInfo) => Promise<void>;
  editFaculty!: (faculty: IFacultyInfo) => Promise<void>;
  deleteFaculty!: (faculty: IFacultyInfo) => Promise<void>;
  //local
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: (row: IFacultyInfo) => row.fname + row.mname + row.lname,
      format: (val: string) => `${val}`,
    },
    {
      name: 'username',
      align: 'center',
      label: 'Username',
      field: 'username',
    },
    { name: 'password', align: 'center', label: 'Password', field: 'password' },
    {
      name: 'department',
      align: 'center',
      label: 'Department',
      field: 'department',
    },
    { name: 'type', align: 'center', label: 'Type', field: 'type' },
    {
      name: 'dateCreated',
      align: 'center',
      label: 'Date Created',
      field: 'dateCreated',
    },
    {
      name: 'lastLogin',
      align: 'center',
      label: 'Last Login',
      field: 'lastLogin',
    },
    { name: 'action', align: 'center', label: '', field: 'action' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultFaculty: IFacultyInfo = {
    fname: '',
    mname: ' ',
    lname: '',
    username: '',
    password: '',
    type: 'Chairperson',
    department: 'Accountancy',
    dateCreated: '',
    lastLogin: '',
  };
  presentFaculty = { ...this.defaultFaculty };
  filter = '';
  options = ['Faculty', 'Chairperson', 'Employee'];
  option1 = [
    'Computer Studies Department, CIT',
    'Accountancy',
    'Education',
    'Nursing',
    'Public Administration',
  ];

  onNewFaculty() {
    this.presentFaculty = { ...this.defaultFaculty };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditFaculty(faculty: IFacultyInfo) {
    this.presentFaculty = { ...faculty };
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteFaculty(faculty: IFacultyInfo) {
    this.presentFaculty = { ...faculty };
    this.confirmDelete = true;
  }

  async onSaveFaculty() {
    if (!this.editRow) {
      await this.newFaculty(this.presentFaculty);
    } else {
      await this.editFaculty(this.presentFaculty);
    }
  }
  async onCofirmDelete() {
    await this.deleteFaculty(this.presentFaculty);
    this.confirmDelete = false;
  }
}
</script>
