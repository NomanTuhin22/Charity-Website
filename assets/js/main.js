
(function ($) {
    "use strict";

    // data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })
    // data bg about img
    // $("[data-about-bg]").each(function () {
    //     $(this).css("background-image", "url(" + $(this).attr("data-about-bg") + ")")
    // })

    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-vedio').magnificPopup({
        type:'image',
        delegate: 'a',
    });
    // swiper slider

    //tp-fund-slider *
    var swiper = new Swiper(".tp-fund-slider-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".tp-fund-btn-next",
            prevEl: ".tp-fund-btn-prev",
          },
          breakpoints: {
            "768": {
              slidesPerView: 2,
            },
            "1200": {
              slidesPerView: 4,
            }
          },
      });

    //tp-fund-slider *
    var swiper = new Swiper(".tp-text-slide-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centerSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay : 1,
            disableOnInteraction: true
        }
      });
})(jQuery);
