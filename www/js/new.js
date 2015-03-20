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
        $('#create_form').submit(function (e) {
            e.preventDefault();
            var params = $("#create_form").serialize().replace(/[^&]+=\.?(?:&|$)/g, '');
            $.post("http://zaf-wc.public-grocery-price-book-api.co.za/entries.json", params).done(function () {
                $('#create_form').trigger('reset');
            })
                .error(function () {
                    alert('Error!');
                });
        });
    }
}