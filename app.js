$(document).ready(function() {
    $(".toggleNav").click(function() {
        $(".openNav").toggleClass("hidden");
        $(".closeNav").toggleClass("hidden");
        $(".navList").toggleClass("h-0");
        $(".navList").toggleClass("h-52");
        $(".toggleNav").toggleClass("border-2");
    }) 
})