<template>
  <q-layout
    view="hHh Lpr lff"
    container
    style="height: 750px"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Faculty Service Record (FSR)</q-toolbar-title>
        <q-btn
          flat
          label="Home"
          icon="home"
          class="float-right q-ms-sm"
          style="width: 200px"
          to="homepage_client"
        />
        <q-btn
          flat
          label="Logout"
          icon="logout"
          class="float-right q-ms-sm"
          style="width: 200px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="250"
      bordered
      :breakpoint="500"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="ClientViewFSR">
            <q-item-section> Hanamichi Sakuragi </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="try1">
            <q-item-section> Kaede Rukawa </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Miyagi Ryota </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Hisashi Mitsui </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Sinichi Maki </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
