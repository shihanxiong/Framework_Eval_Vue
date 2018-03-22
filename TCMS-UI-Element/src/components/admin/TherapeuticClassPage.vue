<template>
  <div class="container">
    <el-row type="flex" justify="space-between" align="center">
      <h1>Trellis Therapeutic Classes</h1>
        <el-button type="primary">Add Class</el-button>
    </el-row>
    <el-row type="flex" justify="start" align="center">
      <el-checkbox v-model="showInactive" label="Show Inactive" />
      <el-button icon="el-icon-refresh" @click="fetchTherapeuticClasses"/>
    </el-row>
  <el-table
    :data="filteredTherapeuticClasses"
    v-loading="areTherapeuticClassesLoading"
    @row-click="selectTherapeuticClass"
  >
    <el-table-column
      prop="name"
      label="Name"
      sortable
    />
  </el-table>
  <EditTherapeuticClassDialog
    v-if="selectedTherapeuticClass"
    :visible="!!selectedTherapeuticClassId"
    :therapeuticClass="selectedTherapeuticClass"
    @cancel="selectedTherapeuticClassId = null"
    @submit="updateTherapeuticClass"
  />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EditTherapeuticClassDialog from './EditTherapeuticClassDialog.vue';

export default {
  components: {
    EditTherapeuticClassDialog,
  },
  created() {
    this.fetchTherapeuticClasses();
  },
  data() {
    return {
      showInactive: false,
      selectedTherapeuticClassId: null,
    };
  },
  computed: {
    ...mapGetters(['areTherapeuticClassesLoading']),
    ...mapGetters({
      therapeuticClasses: 'getTherapeuticClasses',
    }),
    filteredTherapeuticClasses() {
      return this.therapeuticClasses.filter(({ active }) => this.showInactive || active);
    },
    selectedTherapeuticClass() {
      return this.therapeuticClasses.find(({ id }) => id === this.selectedTherapeuticClassId);
    },
  },
  methods: {
    ...mapActions(['fetchTherapeuticClasses']),
    selectTherapeuticClass({ id }) {
      this.selectedTherapeuticClassId = id;
    },
    updateTherapeuticClass(therapeuticClassFields) {
      this.$store
        .dispatch('updateTherapeuticClass', {
          id: this.selectedTherapeuticClassId,
          fields: therapeuticClassFields,
        })
        .then(() => {
          if (!this.selectedTherapeuticClass.failedToSaveError) {
            this.selectedTherapeuticClassId = null;
          } else {
            this.$message({
              showClose: true,
              message: `Failed to save Trellis Therapeutic Class: ${
                this.selectedTherapeuticClass.name
              }`,
              type: 'error',
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

</style>
