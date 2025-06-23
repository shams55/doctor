(function($) {
    "use strict";

    /** ------------------------------------
    * Window loader
    * -------------------------------------*/

    $(window).on("load", function () {
      $('.loading-wrap').fadeOut();
    });
    
    /** ------------------------------------
    * Stellarnav
    * -------------------------------------*/

    /** ------------------------------------
    * Magnificpopup video
    * -------------------------------------*/


    /** ------------------------------------
    * Lightbox
    * -------------------------------------*/
  


    /** ------------------------------------
    * StickyHeader
    * -------------------------------------*/

    // function stickyHeader(){
    //   var headerFixed = $(".header-area");
    //   if ($(window).scrollTop() > 60) {
    //       headerFixed.addClass("animated fadeInDown stricky-menu");
    //   }
    //   else {
    //       headerFixed.removeClass("animated fadeInDown stricky-menu");
    //   }
    // }

    
    /** ------------------------------------
    * Pagination list
    * -------------------------------------*/

    // $(".pagination-list li a").on('click' ,function(e){
    //     e.preventDefault();
    //     // remove classname 'active' from all li who already has classname 'active'
    //     $(".pagination-list li a.active").removeClass("active"); 
    //     // adding classname 'active' to current click li 
    //     $(this).addClass("active"); 
    // });



    
  /** ------------------------------------
    * Window on scroll function
  * -------------------------------------*/
 
    // $(window).on("scroll", function () {
    //   stickyHeader();
    // });
   
})(jQuery);

