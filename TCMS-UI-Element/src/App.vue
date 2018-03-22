<template>
  <AppLayout>
    <AppHeader slot="header" />
    <AdminView slot="main" />
  </AppLayout>
</template>

<script>
import AppLayout from './components/AppLayout.vue';
import AppHeader from './components/AppHeader.vue';
import AdminView from './components/admin/AdminView.vue';

export default {
  components: {
    AppLayout,
    AppHeader,
    AdminView,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
</style>
