<template>
    <div class="container">
      <QuoteGrid :quotes="quotes"></QuoteGrid>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";

export default {
  data: function() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10
    };
  },
  components: {
    QuoteGrid: QuoteGrid
  }
};
</script>

<style>

</style>
