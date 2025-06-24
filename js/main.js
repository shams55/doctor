(function($) {
    "use strict";

    /** ------------------------------------
    * Window loader
    * -------------------------------------*/
  $('#toggleButton').click(function () {
    const content = $('#toggleContent');

    if (content.hasClass('activebtn')) {
        content.slideUp(function () {
            content.removeClass('activebtn');
        });
    } else {
        content.slideDown(function () {
            content.addClass('activebtn');
        });
    }
  });

})(jQuery);

