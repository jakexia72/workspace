$(document).ready(function() {

    $('.sideBar-item').click(function() {
        console.log("clicked");
        $('.sideBar-item').removeClass("active");
        $(this).addClass("active");
        var index = $(".sideBar-item").index(this)
        $(".content").css('display', 'none');
        var show = $(".content").get(index)
        $(show).css('display', 'block');
        // $(".content").get(index).css('disp', 'visible');
    });

});