import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Index', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'form', component: () => import('pages/form.vue') },
      {
        path: 'ChairpersonHomepage',
        component: () => import('pages/ChairpersonHomepage.vue'),
      },
      {
        path: 'FacultyList',
        component: () => import('pages/FacultyList.vue'),
      },
      {
        path: 'ManageAccountPage',
        component: () => import('pages/ManageAccountPage.vue'),
      },
      {
        path: 'homepage_client',
        component: () => import('pages/homepage_client.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      {
        path: 'ClientViewFSR',
        component: () => import('pages/ClientViewFSR.vue'),
      },
      { path: 'try1', component: () => import('pages/try1.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/FacultyLayout.vue'),
    children: [
      { path: 'fsrform', component: () => import('pages/fsrform.vue') },
      { path: 'view_fsr', component: () => import('pages/view_fsr.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/toolbarchairpersonLayout.vue'),
    children: [
      { path: 'Certifying', component: () => import('pages/Certifying.vue') },
      { path: 'try', component: () => import('pages/try.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
