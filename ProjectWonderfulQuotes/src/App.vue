<template>
    <div class="container">
      <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></Header>
      <NewQuote @QuoteAdded="newQuote"></NewQuote>
      <QuoteGrid :quotes="quotes" @QuoteDeleted="deleteQuote"></QuoteGrid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a Quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete Quotes first!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteGrid: QuoteGrid,
    NewQuote: NewQuote,
    Header: Header
  }
};
</script>

<style>

</style>
