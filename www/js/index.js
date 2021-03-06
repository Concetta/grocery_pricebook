var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        $.ajax({url: "http://zaf-wc.public-grocery-price-book-api.co.za/entries.json"}).done(update_entries);
        $('#search_form').submit(function (e) {
            e.preventDefault();
            var params = $("#search_form").serialize().replace(/[^&]+=\.?(?:&|$)/g, '');
            $.get("http://zaf-wc.public-grocery-price-book-api.co.za/entries.json", params)
                .done(update_entries)
                .error(function () {
                    alert('Error!');
                });
        });
    }
};

function update_entries(entries) {
    $('#entries').empty();
    $.each(entries, function (_i, entry) {
        var content = '<b>' + entry.generic_name + '</b>';
        content += '<table class="table">';
        content += '<thead>';
        content += "<td>Brand Name</td>";
        content += "<td>Store</td>";
        content += "<td>Sets</td>";
        content += '<td> Price Per ' + entry.quanity_unit + '</td>';
        content += '</thead>';
        content += '<tbody>';

        $.each(entry.prices, function (_j, price) {
            var new_row = "";
            new_row += "<td>" + price.product_brand_name + "</td>";
            new_row += "<td>" + price.store + "</td>";
            new_row += "<td>" + price.sets_of + "</td>";
            new_row += "<td>" + (Math.round((price.total_price / price.quanity) * 100) / 100) + "</td>";
            content += '<tr>' + new_row + '</tr>';
        });
        content += '</tbody></table>';
        $('#entries').append(content);
    });
}
