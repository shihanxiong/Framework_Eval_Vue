<template>
  <el-container>

    <el-aside width="200px">
      <el-menu mode="vertical" height="100%">
        <el-menu-item index="gtd"
          @click="selectedComponent = 'GlobalTargetedDrugsPage'">GTD</el-menu-item>
        <el-menu-item index="ttc"
          @click="selectedComponent = 'TherapeuticClassPage'">TTC</el-menu-item>
        <el-menu-item index="customers"
          @click="selectedComponent = 'CustomersPage'">Customers</el-menu-item>
        <el-menu-item index="invoicing"
          @click="selectedComponent = 'InvoicingPage'">Invoicing</el-menu-item>
        <el-menu-item index="users"
          @click="selectedComponent = 'UsersPage'">Users</el-menu-item>
      </el-menu>
    </el-aside>

    <el-main class="main">
      <keep-alive>
        <component :is="selectedComponent">
        </component>
      </keep-alive>
    </el-main>

  </el-container>

</template>

<script>
import GlobalTargetedDrugsPage from './GlobalTargetedDrugsPage.vue';
import TherapeuticClassPage from './TherapeuticClassPage.vue';
import CustomersPage from './CustomersPage.vue';
import InvoicingPage from './InvoicingPage.vue';
import UsersPage from './UsersPage.vue';

export default {
  data() {
    return {
      selectedComponent: 'TherapeuticClassPage',
    };
  },
  components: {
    GlobalTargetedDrugsPage,
    TherapeuticClassPage,
    CustomersPage,
    InvoicingPage,
    UsersPage,
  },
};
</script>

<style scoped>
.el-container {
  display: flex;
}

.main {
  padding-top: 0;
}
</style>
