<template>
  <div class="q-pa-md">
    <q-btn
      flat
      label="Logout"
      icon="logout"
      class="float-right q-ms-sm text-h6"
      style="width: 200px length:50px"
    />
    <div class="text-h4 text-bold">
      <q-icon name="school" style="font-size: 5rem" />
      Departments
    </div>
    <div class="q-gutter-sm flex flex-center row">
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat color="teal" icon="folder" to="FacultyList" />
        <br />
        Computer Studies
      </div>
      <div class="text-h6 text-center q-px-sx">
        <q-btn size="55px" flat stack color="primary" icon="folder" />
        <br />
        Nursing
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="secondary" icon="folder" />
        <br />
        Sports
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="amber" icon="folder" />
        <br />
        Accountancy
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="brown-5" icon="folder" />
        <br />
        Education
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="deep-orange" icon="folder" />
        <br />
        Public Administration
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="purple" icon="folder" />
        <br />
        Engineering
      </div>
      <div class="text-h6 text-center q-px-xs">
        <q-btn size="55px" flat stack color="black" icon="folder" />
        <br />
        Agriculture
      </div>
    </div>
  </div>
</template>
