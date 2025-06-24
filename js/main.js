(function($) {
    "use strict";

    /** ------------------------------------
    * Window loader
    * -------------------------------------*/
  $('#toggleButton').on('click', function () {
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
$('#toggleButton2').on('click', function () {
    const content = $('#toggleContent2');
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

document.querySelectorAll('a').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
    })
})



})(jQuery);

