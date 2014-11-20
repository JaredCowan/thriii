var DraggablePortlet = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }
            
            $( ".column" ).sortable({
              connectWith: ".column",
              items: ".panel",
              opacity: 0.8,
              coneHelperSize: false,
              forcePlaceholderSize: false,
              handle: ".panel-heading",
              tolerance: "pointer",
              cancel: ".portlet-toggle",
              placeholder: "sortable-box-placeholder ui-corner-all"
            });
         
            $( ".panel" )
              .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
              .find( ".panel-heading" )
                .addClass( "ui-widget-header ui-corner-all" )
                .prepend( "<i class='fa fa-toggle-up portlet-toggle'></i>");
         
            $( ".portlet-toggle" ).click(function() {
              var icon = $( this );
              icon.toggleClass( "fa fa-toggle-up fa fa-toggle-down" );
              icon.closest( ".panel" ).find( ".panel-body" ).toggle();
            });

            $(".column").disableSelection();

        }

    };

}();
$(".panel-heading").prepend("<i class='fa fa-ellipsis-v'></i> <i class='fa fa-ellipsis-v'></i> ");
// $( ".column" ).append("<div class='panel drag-placeholder'></div>");


