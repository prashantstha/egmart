var transparent = true;
var big_image;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;
$(document).ready(function() {
    // ----------------------------
    //  Activate the Tooltips
    // ----------------------------
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
    // Activate Popovers and set color for popovers
    $('[data-toggle="popover"]').each(function() {
        color_class = $(this).data('color');
        $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    });
    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
    // ----------------------------
    // Activate bootstrapSwitch
    // ----------------------------
    $('.bootstrap-switch').each(function() {
        $this = $(this);
        data_on_label = $this.data('on-label') || '';
        data_off_label = $this.data('off-label') || '';
        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });
    // ----------------------------
    // Activate Carousel
    // ----------------------------
    $('.carousel').carousel({
        interval: 4000
    });
    // ----------------------------
    // Activate niceselect
    // ----------------------------
    if ($('select').length) {
        $('select').niceSelect();
    }
    // ----------------------------
    // date picker
    // ----------------------------
    $('.date-picker').each(function() {
        $(this).datepicker({
            templates: {
                leftArrow: '<i class="now-ui-icons arrows-1_minimal-left"></i>',
                rightArrow: '<i class="now-ui-icons arrows-1_minimal-right"></i>'
            }
        }).on('show', function() {
            $('.datepicker').addClass('open');
            datepicker_color = $(this).data('datepicker-color');
            if (datepicker_color.length != 0) {
                $('.datepicker').addClass('datepicker-' + datepicker_color + '');
            }
        }).on('hide', function() {
            $('.datepicker').removeClass('open');
        });
    });
    // ----------------------------
    // Hide Promotion Banner on click
    // ----------------------------
    $('.header-offer-close').click(function() {
        $('#header-offer').stop().slideUp(500);
    });
    // ----------------------------
    // Fixed Header on scroll
    // ----------------------------
    $(window).scroll(function() {
        var sticky = $('.header-content'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('sticky-header');
        else sticky.removeClass('sticky-header');
    });
    // ----------------------------
    // Header icon and mini cart Toggle
    // ----------------------------
    $('.header-icons ul li.account').click(function() {
        $(this).parent().parent().find('.toggle-content.account').toggle();
    });
    $('.header-icons ul li.mini-cart').click(function() {
        $(this).parent().parent().find('.toggle-content.mini-cart-content').toggle();
    });
    $('.close-mini-cart').click(function() {
        $(this).parent().hide();
    });
    // ----------------------------
    // Footer Widget Toggle
    // ----------------------------
    $winWdith = jQuery(window).width();
    if ($winWdith < 768) {
        $('.widget-title').click(function() {
            $(this).toggleClass('open');
            $(this).next().toggle();
        });
    }
    // ----------------------------
    // Home Page Banner
    // ----------------------------
    $('.home-main-banner').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        items: 1
    });
    // ----------------------------
    // Steal Deals
    // ----------------------------
    if ($("#steal-deals").length) {
        $('#steal-deals').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4,
                }
            }
        });
    }
    // ----------------------------
    // Featured Products
    // ----------------------------
    if ($("#featured-products").length) {
        $('#featured-products').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4,
                }
            }
        });
    }
    // ----------------------------
    // Featured Products
    // ----------------------------
    if ($("#cat-collection").length) {
        $('#cat-collection').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 6,
                },
                1024: {
                    items: 8,
                }
            }
        });
    }
    if ($("#cake-latest").length) {
        $('#cake-latest').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 6,
                },
                1024: {
                    items: 8,
                }
            }
        });
    }
    if ($("#cat-cake-gift").length) {
        $('#cat-cake-gift').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            dots: false,
            autoplayHoverPause: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 6,
                },
                1024: {
                    items: 8,
                }
            }
        });
    }
    // -------------------------------------
    // category tab toggle in mobile
    // -------------------------------------
    $('.tab-opener').click(function() {
        $(this).toggleClass('open');
        $(this).next().toggle();
    });
});
// ----------------------
// Increment button
// ----------------------
$('.btn-number').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {
            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }
        } else if (type == 'plus') {
            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function() {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});
$(".input-number").keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});
// --------------------------------
// FOOTER WIDGET TOGGLE IN MOBILE
// --------------------------------
$(window).on('resize', function() {
    // Footer Widget Toggle
    $winWdith = jQuery(window).width();
    if ($winWdith < 768) {
        $('.widget-title').click(function() {
            $(this).toggleClass('open');
            $(this).next().toggle();
        });
    }
});
// --------------------------
// breakpoint and up
// --------------------------
$(window).resize(function() {
    if ($(window).width() >= 980) {
        // when you hover a toggle show its dropdown menu
        $(".navbar .dropdown-toggle").hover(function() {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show");
        });
        // hide the menu when the mouse leaves the dropdown
        $(".navbar .dropdown-menu").mouseleave(function() {
            $(this).removeClass("show");
        });
        // do something here
    }
});
// ------------------------------------------------------
// OFF CANVAS MOBILE MENU
// ------------------------------------------------------
$(document).on('click', '.nav-toggle', function() {
    $toggle = $(this);
    $toggle.toggleClass('toggled');
    $toggle.find('.fal').toggleClass('fa-times');
    $('html').toggleClass('nav-open');
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
        $('html').removeClass('nav-open');
        $toggle.removeClass('toggled');
        $('.nav-toggle .fal').removeClass('fa-times');
        $('#bodyClick').remove();
    });
    // if (esewa.misc.navbar_menu_visible == 1) {
    //     $('html').removeClass('nav-open');
    //     esewa.misc.navbar_menu_visible = 0;
    //     $('#bodyClick').remove();
    //     setTimeout(function() {
    //         $toggle.removeClass('toggled');
    //     }, 550);
    // } else {
    //     setTimeout(function() {
    //         $toggle.addClass('toggled');
    //     }, 580);
    //     div = '<div id="bodyClick"></div>';
    //     $(div).appendTo('body').click(function() {
    //         $('html').removeClass('nav-open');
    //         esewa.misc.navbar_menu_visible = 0;
    //         setTimeout(function() {
    //             $toggle.removeClass('toggled');
    //             $('#bodyClick').remove();
    //         }, 550);
    //     });
    //     $('html').addClass('nav-open');
    //     esewa.misc.navbar_menu_visible = 1;
    // }
});
esewa = {
    misc: {
        navbar_menu_visible: 0
    },
}
// ------------------------------------------------------
// added width in sub menu container of vertical menu
// ------------------------------------------------------
$(window).bind("load", function() {
    $navbarWidth = $('.navbar-collapse').width();
    $v_megacontentWidth = $('.v-megemenu-content').outerWidth();
    $fullWidht = $navbarWidth - $v_megacontentWidth;
    if ($(window).width() >= 992) {
        $('.v-megemenu-content .hasChild.megamenu .full-width').css({
            'width': $fullWidht
        });
    }
});
$(window).resize(function() {
    $navbarWidth = $('.navbar-collapse').width();
    $v_megacontentWidth = $('.v-megemenu-content').outerWidth();
    $fullWidht = $navbarWidth - $v_megacontentWidth;
    if ($(window).width() >= 992) {
        $('.v-megemenu-content .hasChild.megamenu .full-width').css({
            'width': $fullWidht
        });
    } else {
        $('.v-megemenu-content .hasChild.megamenu .full-width').css({
            'width': ''
        });
    }
});
// -------------------------
// Sub menu toggle
// -------------------------
$(".vertical-menu .menu-title").click(function() {
    $(this).next().slideToggle("slow");
});
menuToggle();
$(window).resize(function() {
    menuToggle();
});

function menuToggle() {
    if ($(window).width() <= 991) {
        $('.hasChild a').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.next().hasClass('show')) {
                $this.parent().removeClass('open');
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li').removeClass('open');
                $this.parent().parent().find('li .full-width').removeClass('show');
                $this.parent().parent().find('li .full-width').slideUp(350);
                // for level 3
                $this.parent().parent().find('li .submenu').removeClass('show');
                $this.parent().parent().find('li .submenu').slideUp(350);
                $this.parent().toggleClass('open');
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });
    } else {
        $('.hasChild a').unbind('click');
    }
}