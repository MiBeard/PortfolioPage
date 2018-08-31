$(document).ready(function () {

    $("#resume").hide();
    $("#aboutMe").hide();
    $("#projectInfo").hide();
    $("#contactInfo").hide();
    $(".homeButton").hide();

    resumeSection();
    aboutMeSection();
    projectSection();
    contactMeSection();
    homeButton();

});

function resumeSection() {

    $(".resumeButton").click(function () {
        $(".homeButton").toggle();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".projectButton").toggle();
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
        $(".projectButton").toggle();
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
        $(".projectButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });

    $(".contactButton").click(function () {
        $(".homeButton").show();
        $("#contactInfo").toggle();
    });
}

function projectSection() {
    $(".projectButton").click(function () {
        $(".homeButton").toggle();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".projectButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });

    $(".projectButton").click(function () {
        $(".homeButton").show();
        $("#projectInfo").toggle();
    });
}

function homeButton() {
    $(".homeButton").click(function () {
        $("#resume").hide();
        $("#aboutMe").hide();
        $("#projectInfo").hide();
        $("#contactInfo").hide();
        $(".homeButton").hide();
        $(".resumeButton").toggle();
        $(".aboutMeButton").toggle();
        $(".projectButton").toggle();
        $(".contactButton").toggle();
        $("#welcomePage").slideToggle("slow", "swing");
    });
}