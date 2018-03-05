<template>
  <div class="row">
      <Quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
          {{ quote }}
      </Quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    Quote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("QuoteDeleted", index);
    }
  }
};
</script>

<style>

</style>


