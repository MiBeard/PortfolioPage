$(document).ready(function () {

    $("#resume").hide();

    $("button").click(function () {

        $("#welcomePage").slideToggle();
    });

    $("button").click(function () {
        $(this).text(function (i, v) {
            return v === 'Home' ? 'Resume' : 'Home'
        })
        $("#resume").toggle();
    });

});