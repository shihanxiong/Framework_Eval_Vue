<template>
  <el-dialog
    :title="name"
    :visible="visible"
    :show-close="false"
  >
    <el-form @submit="handleSubmit">
      <el-form-item label="Trellis Therapeutic Class Name">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="active" label="Active" />
      </el-form-item>
      <el-form-item label="Date Actived ">
        <el-date-picker v-model="activatedDate" />
      </el-form-item>
      <el-form-item label="Date Deactived ">
        <el-date-picker v-model="deactivatedDate" />
      </el-form-item>
    </el-form>

    <div slot="footer">
      <el-button @click="handleCancel">Cancel</el-button>
      <el-button
        type="primary"
        @click="handleSubmit"
        :loading="therapeuticClass.isSaving"
      >
        Save
      </el-button>
    </div>

  </el-dialog>
</template>

<script>
const SUBMIT_EVENT = 'submit';
const CANCEL_EVENT = 'cancel';
export default {
  components: {},
  props: {
    visible: Boolean,
    therapeuticClass: {},
  },
  data() {
    const {
      name,
      active,
      activatedDate,
      deactivatedDate,
    } = this.therapeuticClass;
    return {
      name,
      active,
      activatedDate,
      deactivatedDate,
    };
  },
  methods: {
    handleCancel() {
      this.$emit(CANCEL_EVENT);
    },
    handleSubmit() {
      const {
        name, active, activatedDate, deactivatedDate,
      } = this;
      this.$emit(SUBMIT_EVENT, {
        name,
        active,
        activatedDate,
        deactivatedDate,
      });
    },
  },
};
</script>

<style>

</style>
