$(document).ready(function () {

    $("#contactMe").hide();
    $("#resume").hide();
    $("#aboutMe").hide();
    $(".homeButton").hide();

    resumeSection();
    aboutMeSection();
    contactMeSection();
    homeButton();

});

function resumeSection() {

    $(".resumeButton").click(function () {
        $(".homeButton").toggle();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });

    $(".resumeButton").click(function () {
        $(".homeButton").show();
        $("#resume").toggle();
    });
}

function aboutMeSection() {

    $(".aboutMeButton").click(function () {
        $(".homeButton").toggle();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });

    $(".aboutMeButton").click(function () {
        $(".homeButton").show();
        $("#aboutMe").toggle();
    });
}

function contactMeSection() {

    $(".contactButton").click(function () {
        $(".homeButton").toggle();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });

    $(".contactButton").click(function () {
        $(".homeButton").show();
        $("#contactMe").toggle();
    });
}

function homeButton() {
    $(".homeButton").click(function () {
        $("#resume").hide();
        $("#aboutMe").hide();
        $("#contactMe").hide();
        $(".homeButton").hide();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });
}