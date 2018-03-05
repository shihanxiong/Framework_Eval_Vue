<template>
  <div class="row">
      <Quote v-for="quote in quotes">
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
  }
};
</script>

<style>

</style>


