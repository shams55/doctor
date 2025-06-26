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

    $('.symptoms-list .checkinfo').each(function(){
        const spanText = $(this).find('span').text().trim();
        if(spanText.length > 120){

            $(this).css({
            'height': '68px',
            'overflow': 'hidden',
            'transition': 'all 0.3s ease'
        });

            $(this).hover(
                function() {
                    $(this).css('height', '120px');
                    
                },
                function() {
                    $(this).css('height', '68px');
                }
            );
        }
    });


})(jQuery);

