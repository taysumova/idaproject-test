$('.nav-menu__item').click(function (e) {
    $('.nav-menu__item').removeClass("nav-menu__item_active");
    $(e.currentTarget).addClass("nav-menu__item_active");
});

// для мобильного меню
$('#nav-menu_mobile').click(function() {
    $('.menu__closed').toggle();
    $('.menu__opened').toggleClass('visible');
});