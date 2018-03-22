// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import Vue from 'vue';

import '../theme/index.css';
import App from './App.vue';

import store from './store/store';

Vue.use(Element, { locale });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
