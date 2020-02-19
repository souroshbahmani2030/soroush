// -------- start ----- porogress --------------
$(window).scroll(function() {
    var top1 = $(window).scrollTop();
    if (top1 > 500) {
        setInterval(function() {
            $("#pp1").css("width", "100%");
        }, 10)
        setInterval(function() {
            $("#pp2").css("width", "95%");
        }, 10)
        setInterval(function() {
            $("#pp3").css("width", "90%");
        }, 10)
        setInterval(function() {
            $("#pp4").css("width", "80%");
        }, 10)
        setInterval(function() {
            $("#pp5").css("width", "100%");
        }, 10)
        setInterval(function() {
            $("#pp6").css("width", "60%");
        }, 10)
    }
});