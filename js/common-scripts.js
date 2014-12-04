/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});
$(function () {
  eval($('#code').text());
  // prettyPrint();
});

var Script = function () {

//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });


//    nicescroll
    
    $(document).ready(function(){$("#sidebar").niceScroll({styler:"fb",cursorcolor:"#000", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '9000'});});
    $(document).ready(function(){$("html").niceScroll({styler:"fb",cursorcolor:"#000", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '9000'});});

//    sidebar toggle

    // $(function() {
    //     function responsiveView() {
    //         var wSize = $(window).width();
    //         if (wSize <= 768) {
    //             $('#container').addClass('sidebar-close');
    //             $('#sidebar > ul').hide();
    //         }

    //         if (wSize > 768) {
    //             $('#container').removeClass('sidebar-close');
    //             $('#sidebar > ul').show();
    //         }
    //     }
    //     $(window).on('load', responsiveView);
    //     $(window).on('resize', responsiveView);
    // });

    // $('.fa-bars').click(function () {
    //     if ($('#sidebar > ul').is(":visible") === true) {
    //         $('#main-content').css({
    //             'margin-left': '0px'
    //         });
    //         $('#sidebar').css({
    //             'margin-left': '-210px'
    //         });
    //         $('#sidebar > ul').hide();
    //         $("#container").addClass("sidebar-closed");
    //     } else {
    //         $('#main-content').css({
    //             'margin-left': '210px'
    //         });
    //         $('#sidebar > ul').show();
    //         $('#sidebar').css({
    //             'margin-left': '0'
    //         });
    //         $("#container").removeClass("sidebar-closed");
    //     }
    // });


// widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });

//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();

//    slider
    // $(function(){
    //     setTimeout(function() {
    //        jQuery('.right').trigger('click');
    //     }, 1000);
    // }())

    $(function() {
        var thriiiCarousel = $(".thriii__landing--slider .carousel");
        thriiiCarousel.each(function(){
            $(this).carousel({
                interval: 4000
              , keyboard: false 
              , pause: false
            });
        });
    })

//    bxslider

    $('.bxslider').show();
    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 276,
        slideMargin: 20
    });

    $('.dropdown-menu').on('click', function(e) {
      if($(this).hasClass('dropdown-menu-form')) {
        e.stopPropagation();
      }
    });

    $("input:checkbox").click(function() {
        var actualTime = "";
        $(this).parent().toggleClass("highlight");
    });

    $('#select-all').click(function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }

}()



;(function($) {
    "use strict";

//  sticky nav
    $( window ).on('scroll', function() {
        var nav      = $( ".thriii__landing--nav" )
          , nav_cont = $( ".thriii__landing" ).innerHeight() - $(window).scrollTop()
          , nav_pos  = nav.offset().top - $( window ).scrollTop();

        if (nav_pos < 1 && nav_cont < nav.innerHeight()) {
            nav.addClass("thriii__landing--nav--stuck");
        } else if (nav_cont > nav.innerHeight()) {
            nav.removeClass("thriii__landing--nav--stuck");
        }
    }) //  END sticky nav
 

//  scroll to page section on click
    $( '.thriii__landing--nav--item a' ).on('click', function(e) {
        e.preventDefault();
        var el      = $( this ).attr( 'href' )
          , el_pos  = $( el ).offset().top
          , win_pos = $( window ).scrollTop()
          , o       = $( el ).offset().top - win_pos - $( ".thriii__landing--nav" ).innerHeight()
          , current = window.location.hash
          , el_scroll_to;
        if ( el === "#sales-orders" ) {
            el_scroll_to = el_pos;
        } else {
            el_scroll_to = el_pos - 100;
        }

        $( 'html, body' ).animate({
            scrollTop: el_scroll_to
          }, 800
        )
          window.location.name = el;
    }) //  END scroll to section on click

    // Custom Scrollspy
    $( window ).on('scroll', function() {
        var $nav           = $('.thriii__landing--nav--item')
          , $windowheight  = $(window).scrollTop() + 130
          , $el1height     = $("#sales-orders").height()
          , $el1pos        = $("#sales-orders").position().top
          , $el2height     = $("#warehousing").height()
          , $el2pos        = $("#warehousing").position().top
          , $el3height     = $("#payments").height()
          , $el3pos        = $("#payments").position().top
          , $el4height     = $("#shipping").height()
          , $el4pos        = $("#shipping").position().top;

        if ($windowheight < $el1pos) {
            $nav.removeClass('active')
        } else {
            if (($el1pos <= $windowheight)) {
                $nav.removeClass('active')
                $('.sales').addClass('active')
            }
            if (($el2pos <= $windowheight) ) {
                $nav.removeClass('active')
                $('.warehouse').addClass('active')
            }
            if (($el3pos <= $windowheight)) {
                $nav.removeClass('active')
                $('.payments').addClass('active')
            }
            if ($el4pos <= $windowheight) {
                $nav.removeClass('active')
                $('.shipping').addClass('active')
            }
        }
    }) // End Scrollspy

}( jQuery ));