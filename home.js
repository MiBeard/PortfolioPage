$(document).ready(function () {

    $("#resume").hide();

    $("#aboutMe").hide();

    buttonHover();
    resumeSection();
    aboutMeSection();

});

function buttonHover() {
    $("button").hover(function () {
        $(this).css("background-color", "#111e33");
        $(this).css("color", "#f1f894");

    }, function () {
        $(this).css("background-color", "#e0e2c3");
        $(this).css("color", "#111e33");
    });
}

function resumeSection() {
    $(".resumeButton").click(function () {
        $(".aboutMeButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
        $("#myHeader").slideToggle("slow", "swing");
    });

    $(".resumeButton").click(function () {
        $(this).text(function (i, v) {
            return v === 'Home' ? 'Resume' : 'Home'
        })
        $("#resume").toggle();
    });
}

function aboutMeSection() {

    $(".aboutMeButton").click(function () {
        $(".resumeButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
        $("#myHeader").slideToggle("slow", "swing");
    });

    $(".aboutMeButton").click(function () {
        $(this).text(function (i, v) {
            return v === 'Home' ? 'About Me' : 'Home'
        })
        $("#aboutMe").toggle();
    });

}