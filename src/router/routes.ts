import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'form', component: () => import('pages/form.vue') },
      { path: 'try1', component: () => import('pages/try1.vue') },
      { path: 'try', component: () => import('pages/try.vue') },
      { path: 'fsrform', component: () => import('src/pages/fsrform.vue') }
     
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
