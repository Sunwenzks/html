
(function ($) {
$("#search").autocomplete({
    source: function(request, response) {
      $.getJSON(host + "/product/search",
        {searchString:  request.term},
         function( data ) {
          var responseItems = [];
          $.each(data, function(key, val) {
          responseItems.push(val.name);
          response(responseItems)
        });
      }); 
    },
    classes: {"ui-autocomplete": "submenu"},
    messages: {
      noResults: '',
      results: function() {}
  }
  });})