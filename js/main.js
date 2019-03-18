(function ($) {
  "use strict";
  var _this;
  var Construction = {
// Declarer DOM variables here
      dom: {
          _window: $(window),
          pageParent: $('html, body'),
          gridPortfolio: $('#grid-portfolio'),
          portfolioPop: $('.gallery-popup'),
          companyImageSlider: $('.company-image-slider'),
          counterSection: $('.counter-section', '#wrapper'),
          countNumber: $('.count-num', '#wrapper'),
          imageSlider: $('.image-slider'),
          clientSlider: $('.client-slider')
      },
      // Global Variable
      vars: {
          isDevice: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          isMobileView: ($(window).width() <= 530) ? true : false,
          isTabletView: ($(window).width() <= 768) ? true : false
      },
      // Initialize all JS function and Plug Ins
      init: function () {
          // Global Object  _this return the parent object
          _this = this;

          _this.wowInit();

          // Wait until all images are loaded 
          _this.dom.pageParent.imagesLoaded(function () {

              _this.magnifyPopup().portfolioGallery().wayPoint().slickSlider();

          });
      },
      countTo: function () { // counter config
          _this.dom.countNumber.countTo({
              speed: 2000,
              refreshInterval: 50
          });
          return _this;
      },
      wowInit: function () {
          var wow = new WOW({
              boxClass: 'animate',
              animateClass: 'animated',
              offset: 100,
              mobile: false,
              live: false
          });
          wow.init();
          return _this;
      },
      wayPoint: function () { // animation of counter
          _this.dom.counterSection.waypoint({
              handler: function (direction) {
                  _this.countTo();
                  this.destroy();
              },
              offset: 'bottom-in-view'
          });
          return _this;
      },
      magnifyPopup: function () {
          console.log(_this);
          _this.dom.portfolioPop.magnificPopup({
              delegate: 'a.zoom-img',
              type: 'image',
              gallery: {
                  enabled: true
              }
          });
          return _this;
      },
      portfolioGallery: function () {

          var filterBtns = $('.filter-list li');
          var filterGportfolio = _this.dom.gridPortfolio.isotope({
              itemSelector: '.col-md-4',
              percentPosition: true,
              masonry: {
                  columnWidth: '.col-md-4'
              }
          });
          filterBtns.on('click', function () {
              filterBtns.removeClass("active-filter");
              $(this).addClass('active-filter');
              var filterValue = $(this).attr('data-filter');
              filterGportfolio.isotope({filter: filterValue});
          });
          
          return _this;
      },
      slickSlider: function () {
          _this.dom.companyImageSlider.slick({
              dots: true,
              infinite: true,
              speed: 500,
              fade: true,
              autoplay: true,
              cssEase: 'linear'

          });
          _this.dom.imageSlider.slick({
              slidesToShow: 6,
              slidesToScroll: 3,
              autoplay: true,
              autoplaySpeed: 2000,
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]

          });
          _this.dom.clientSlider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
          });
          return _this;
      }
  };
  $(document).ready(function () {

      $(window).on("scroll", function () {
          if ($(window).scrollTop() > 50) {
              $(".navbar-default").addClass("active");
          } else {
              $(".navbar-default").removeClass("active");
          }
      });
      Construction.init();
  });
})(jQuery);