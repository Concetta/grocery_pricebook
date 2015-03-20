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

$('input[name="generic_name"]').typeahead({hint: false, highlight: true}, {
    name: 'product',
    displayKey: 'name',
    source: products.ttAdapter()
});

$('input[name="search"]').typeahead({hint: false, highlight: true}, {
    name: 'product',
    displayKey: 'name',
    source: products.ttAdapter()
});

var stores = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 100,
    prefetch: {
        ttl: 60,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        url: 'http://zaf-wc.public-grocery-price-book-api.co.za/store_names.json',
        // the json file contains an array of strings, but the Bloodhound
        // suggestion engine expects JavaScript objects so this converts all of
        // those strings
        filter: function(list) {
            return $.map(list, function(store) { return { name: store }; });
        }
    }
});

// kicks off the loading/processing of `local` and `prefetch`
stores.initialize();

// passing in `null` for the `options` arguments will result in the default
// options being used
$('input[name="store"]').typeahead({hint: false, highlight: true}, {
    name: 'store',
    displayKey: 'name',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: stores.ttAdapter()
});


var units = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 100,
    prefetch: {
        ttl: 60,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        url: 'http://zaf-wc.public-grocery-price-book-api.co.za/unit_names.json',
        // the json file contains an array of strings, but the Bloodhound
        // suggestion engine expects JavaScript objects so this converts all of
        // those strings
        filter: function(list) {
            return $.map(list, function(store) { return { name: store }; });
        }
    }
});

// kicks off the loading/processing of `local` and `prefetch`
units.initialize();

// passing in `null` for the `options` arguments will result in the default
// options being used
$('input[name="quanity_unit"]').typeahead({hint: false, highlight: true}, {
    name: 'unit',
    displayKey: 'name',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: units.ttAdapter()
});

var brands = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 100,
    prefetch: {
        ttl: 60,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        url: 'http://zaf-wc.public-grocery-price-book-api.co.za/product_brand_names.json',
        // the json file contains an array of strings, but the Bloodhound
        // suggestion engine expects JavaScript objects so this converts all of
        // those strings
        filter: function(list) {
            return $.map(list, function(store) { return { name: store }; });
        }
    }
});

// kicks off the loading/processing of `local` and `prefetch`
brands.initialize();

// passing in `null` for the `options` arguments will result in the default
// options being used
$('input[name="product_brand_name"]').typeahead({hint: false, highlight: true}, {
    name: 'product_brand_name',
    displayKey: 'name',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: brands.ttAdapter()
});

var locations = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 100,
    prefetch: {
        ttl: 60,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        url: 'http://zaf-wc.public-grocery-price-book-api.co.za/location_names.json',
        // the json file contains an array of strings, but the Bloodhound
        // suggestion engine expects JavaScript objects so this converts all of
        // those strings
        filter: function(list) {
            return $.map(list, function(store) { return { name: store }; });
        }
    }
});

// kicks off the loading/processing of `local` and `prefetch`
locations.initialize();

// passing in `null` for the `options` arguments will result in the default
// options being used
$('input[name="location"]').typeahead({hint: false, highlight: true}, {
    name: 'location',
    displayKey: 'name',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: locations.ttAdapter()
});
