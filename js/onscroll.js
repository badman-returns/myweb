$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 10) {
            $("nav").css('background-color', 'white');
            $("nav a").css('color', 'black');
            $("nav").css('padding', '5px');
            $("nav").css('box-shadow', '0px 5px 10px black')

        } else {
            $("nav").css('background-color', 'transparent');
            $("nav a").css('color', 'white');
            $("nav").css('padding-top', '50px')
            $("nav").css('box-shadow', '')
        }
    });
});

