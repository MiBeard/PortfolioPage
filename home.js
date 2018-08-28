$(document).ready(function () {

    $("#resume").hide();

    $(".resumeButton").click(function () {
        $(".aboutMeButton").toggle();
        $("#welcomePage").slideToggle("slow","swing");
        $("#pageHeader").slideToggle("slow","swing");
    });

    $(".resumeButton").click(function () {
        $(this).text(function (i, v) {
            return v === 'Home' ? 'Resume' : 'Home'
        })
        $("#resume").toggle();
    });

    $("#aboutMe").hide();

    $(".aboutMeButton").click(function () {
        $(".resumeButton").toggle();
        $("#welcomePage").slideToggle("slow","swing");
        $("#pageHeader").slideToggle("slow","swing");
    });

    $(".aboutMeButton").click(function () {
        $(this).text(function (i, v) {
            return v === 'Home' ? 'About Me' : 'Home'
        })
        $("#aboutMe").toggle();
    });

});