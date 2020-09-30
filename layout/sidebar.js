$(document).ready(function() {
    $.get({
        url: "layout/sidebar.html",
        cache: false
    }).then(function(data) {
        $("#sidebar-content").html(data);
    });
});