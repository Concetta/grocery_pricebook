var products = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 100,
  prefetch: {
    ttl: 60,
    url: 'http://zaf-wc.public-grocery-price-book-api.co.za/product_generic_names.json',
    filter: function(list) {
      return $.map(list, function(store) { return { name: store }; });
    }
  }
});

products.initialize();

$('input[name="generic_name"]').typeahead({hint: false, highlight: false}, {
  name: 'product',
  displayKey: 'name',
  source: products.ttAdapter()
});

$('input[name="search"]').typeahead({hint: false, highlight: false}, {
  name: 'product',
  displayKey: 'name',
  source: products.ttAdapter()
});