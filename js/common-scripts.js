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
    
    $(document).ready(function(){$("#sidebar").niceScroll({styler:"fb",cursorcolor:"#8cd600", cursorwidth: '9', cursorborderradius: '0px', background: '#323232', spacebarenabled:false,  cursorborder: '', zindex: '9000'});});
    $(document).ready(function(){$("html").niceScroll({styler:"fb",cursorcolor:"#8cd600", cursorwidth: '9', cursorborderradius: '0px', background: '#323232', spacebarenabled:false,  cursorborder: '', zindex: '9000'});});

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
              , duration: 700
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

    // $("input:checkbox").click(function() {
    //     var actualTime = "";
    //     $(this).parent().toggleClass("highlight");
    // });

    $('#select-all').click(function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

// custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var $value = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: $value
            }, 2000)
        })
    }

}()



;(function($) {
    "use strict";

var _url  = window.location.href.indexOf("index.html")
  , _path = window.location.pathname == "/thriii/";

if (_url != -1 || _path) {
    //  sticky nav
    $( window ).on('scroll load', function() {
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
    $( window ).on('scroll load', function() {
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
  } // Close if

    // fixed back-to-top link
    var $topLink      = $(".back-to-top") // Set variable of element
      , $windowHeight = $(window).innerHeight() - 130; // Get the height of window
    $topLink.hide(); // Initially hide element

    $(window).on("scroll", function(e) { // Spy on scroll position to show/hide element
        var $windowPos = $(window).scrollTop();
        if ($windowPos > $windowHeight) {
            $topLink.show();
        } else {
            $topLink.hide();
        }
    }) // Close

}( jQuery ));




var Script = function () {


    //checkbox and radio btn

    var d = document;
    var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
    var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };
    onload = function() {

        var body = gebtn(d,'body')[0];
        body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';

        if (!d.getElementById || !d.createTextNode) return;
        var ls = gebtn(d,'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label_') == -1) continue;
            var inp = gebtn(l,'input')[0];
            if (l.className == 'label_check') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
                l.onclick = check_it;
            };
            if (l.className == 'label_radio') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
                l.onclick = turn_radio;
            };
        };
    };
    var check_it = function() {
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_check c_off' || (!safari && inp.checked)) {
            this.className = 'label_check c_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_check c_off';
            if (safari) inp.click();
        };
    };
    var turn_radio = function() {
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_radio r_off' || inp.checked) {
            var ls = gebtn(this.parentNode,'label');
            for (var i = 0; i < ls.length; i++) {
                var l = ls[i];
                if (l.className.indexOf('label_radio') == -1)  continue;
                l.className = 'label_radio r_off';
            };
            this.className = 'label_radio r_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_radio r_off';
            if (safari) inp.click();
        };
    };



    $(function() {

        // Tags Input
        $(".tagsinput").tagsInput();

        // Switch
        $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();

    });



    //color picker

    $('.cp1').colorpicker({
        format: 'hex'
    });
    $('.cp2').colorpicker();


    //date picker

    if (top.location != location) {
        top.location.href = document.location.href ;
    }
    $(function(){
        window.prettyPrint && prettyPrint();
        $('#dp1').datepicker({
            format: 'mm-dd-yyyy'
        });
        $('#dp2').datepicker();
        $('#dp3').datepicker();
        $('#dp3').datepicker();
        $('#dpYears').datepicker();
        $('#dpMonths').datepicker();


        var startDate = new Date(2012,1,20);
        var endDate = new Date(2012,1,25);
        $('#dp4').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() > endDate.valueOf()){
                    $('#alert').show().find('strong').text('The start date can not be greater then the end date');
                } else {
                    $('#alert').hide();
                    startDate = new Date(ev.date);
                    $('#startDate').text($('#dp4').data('date'));
                }
                $('#dp4').datepicker('hide');
            });
        $('#dp5').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() < startDate.valueOf()){
                    $('#alert').show().find('strong').text('The end date can not be less then the start date');
                } else {
                    $('#alert').hide();
                    endDate = new Date(ev.date);
                    $('#endDate').text($('#dp5').data('date'));
                }
                $('#dp5').datepicker('hide');
            });

        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = $('#dpd1').datepicker({
            onRender: function(date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                if (ev.date.valueOf() > checkout.date.valueOf()) {
                    var newDate = new Date(ev.date)
                    newDate.setDate(newDate.getDate() + 1);
                    checkout.setValue(newDate);
                }
                checkin.hide();
                $('#dpd2')[0].focus();
            }).data('datepicker');
        var checkout = $('#dpd2').datepicker({
            onRender: function(date) {
                return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                checkout.hide();
            }).data('datepicker');
    });



    //daterange picker

    $('#reservation').daterangepicker();

    $('#reportrange').daterangepicker(
        {
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({ days: -6 }), 'today'],
                'Last 30 Days': [Date.today().add({ days: -29 }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({ months: -1 }), Date.today().moveToFirstDayOfMonth().add({ days: -1 })]
            },
            opens: 'left',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({ days: -29 }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2013',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },
        function(start, end) {
            $('#reportrange span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        }
    );

    //Set the initial state of the picker label
    $('#reportrange span').html(Date.today().add({ days: -29 }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));

}();