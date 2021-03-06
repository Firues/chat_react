var $ = require('jquery');

var originWidth = 900;
var originHeight = 800;

var user = {};
var chat = {};

$(document).on('click', ".message", function() {
    if ($(window).width() < originWidth) {
        $('.left-menu').addClass('hide-element');
        $('.nav-expand').toggleClass('open');
    }
    user.userId = $(this).attr('user_id');
    chat.chatId = $(this).attr('chat_id');
    $(this).attr('pagination', 50);
    //add method to delete class unread message
});

// to display chat window on start
var appWidth = $(window).width();
var appHeight = $(window).height();

if (appWidth == originWidth) {
    $('.show-left-menu').show();
} else if (appWidth > originWidth) {
    $('.show-left-menu').show();
} else if (appWidth < originWidth) {
    $('.show-left-menu').hide();
}


$('#app-container-main').height(appHeight - 51);


$('.right-menu-content').height(appHeight - 39 - 52);


$(window).resize(function() {
    var wWidth = $(window).width();
    var wHeight = $(window).height();
    $('.left-menu').height(wHeight - 39);
    $('.right-menu-content').height(wHeight - 39 - 52);
    $('#app-container-main').height(wHeight - 51);
    if (wWidth < 870) {
        $('.left-top').addClass('hide-element');

        $('.left-menu').addClass('hide-element');
        $('.left-menu').addClass('west-cost-custom-width');

        $('.right-top').addClass('right-top-min');

        $('.right-menu').addClass('right-menu-min');

        $('.show-left-menu').show();
        $('.tools-wrapper').css('width', '100%');
    } else if (wWidth >= 900) {
        if ($('.left-top').hasClass('hide-element'))
            $('.left-top').removeClass('hide-element');
        if ($('.left-menu').hasClass('hide-element'))
            $('.left-menu').removeClass('hide-element');
        if ($('.right-top').hasClass('right-top-min'))
            $('.right-top').removeClass('right-top-min');
        if ($('.right-menu').hasClass('right-menu-min'))
            $('.right-menu').removeClass('right-menu-min');
        $('.show-left-menu').hide();
        $('.left-menu').removeClass('west-cost-custom-width');
        $('.tools-wrapper').css('width', '65%');
    }
});

$('.show-left-menu').click(function() {
    $('.left-menu').toggleClass('hide-element');
});
$(".nav-expand").on('click', function(e){

  e.preventDefault();

  $(this).toggleClass('open');

});
