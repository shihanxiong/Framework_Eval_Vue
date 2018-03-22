<template>
  <div>
      <ul v-for="customer in getCustomers" :key="customer.id">
          <li>
              {{ customer.name }}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {},
  props: [],
  created() {
    this.fetchCustomers();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getCustomers']),
  },
  watch: {},
  methods: {
    ...mapActions(['fetchCustomers']),
  },
};
</script>

<style scoped>

</style>
