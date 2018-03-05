<template>
    <div class="container">
      <NewQuote @QuoteAdded="newQuote"></NewQuote>
      <QuoteGrid :quotes="quotes"></QuoteGrid>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  data: function() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    }
  },
  components: {
    QuoteGrid: QuoteGrid,
    NewQuote: NewQuote
  }
};
</script>

<style>

</style>
