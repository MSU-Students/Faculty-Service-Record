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
          <q-item clickable v-ripple to="Certifying">
            <q-item-section> Hanamichi Sakuragi </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="try">
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
    <div class="q-pb-xl bg-blue-1">
      <q-btn
        push
        color="primary"
        glossy
        label="certify"
        class="float-right q-mx-xl"
        style="width: 200px"
        icon="check"
      />
      <q-btn
        push
        color="red-10"
        glossy
        label="back"
        class="float-right q-mx-xl"
        style="width: 200px"
        to="ChairpersonHomepage"
      />
    </div>
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
<!--
<style>
.bg-image {
  background-image: url(../assets/image/FB_IMG_1627831409221.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>
<style>
.bg-image {
  background-image: url(../assets/image/Luffyy.png);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>
!-->