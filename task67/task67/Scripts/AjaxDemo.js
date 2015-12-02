$(document).ready(function () {
    $('#privacyLink').click(function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
        $('#privacy').load(url);
    });
});