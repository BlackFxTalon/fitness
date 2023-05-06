(function() {

    'use strict';
  
    // breakpoint of instances
    const breakpoint = window.matchMedia( '(min-width:1024px)' );
  
    // keep track of instances to destroy later
    let documentsSlider, customScrollBar;
  
    const breakpointChecker = function() {
  
      // if larger viewport 
      if ( breakpoint.matches === true ) {
        initScrollbar();
  
        if ( documentsSlider !== undefined ) documentsSlider.destroy( true, true );


        // or/and do nothing
        return;
  
        // else if a small viewport
        } else if ( breakpoint.matches === false ) {
  
          // enable the swiper instance
          return enableSwiper();
  
        }
  
    };
  
    const enableSwiper = function() {
  
      // documents slider
     documentsSlider = new Swiper('.documents__slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
       el: '.documents__slider-pagination',
    },
 });
    };

    // custom scrollbar (SimpleBar.js)

    const simpleBarOptions = {
      autoHide: false 
    };
    
    const initScrollbar = function () {
        customScrollBar = new SimpleBar(document.querySelector('.fitness-courses__list-scrollbar'), simpleBarOptions);

        customScrollBar.recalculate();
    }

    const initScrollbar2 = () => {
      const customScrollBar2 = new SimpleBar(document.querySelector('.education-form__select-list-wrapper'), simpleBarOptions);
  }

  initScrollbar2();

  
    // keep an eye on viewport size changes
    breakpoint.addEventListener('change',breakpointChecker);
  
    breakpointChecker();

    // sliders

    const teamSlider = new Swiper('.team__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.team__slider-button-next',
            prevEl: '.team__slider-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
    });

    const clientsFeedbackSlider = new Swiper('.clients-feedback__slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: 1,
      pagination: {
         el: '.clients-feedback__slider-pagination',
      },
      navigation: {
        nextEl: '.clients-feedback__slider-button-next',
        prevEl: '.clients-feedback__slider-button-prev',
      },
   });

    // init mask (maska.js)

    const { MaskInput } = Maska;

    const initMask = () => {
      document.addEventListener('DOMContentLoaded', () => {
        new MaskInput("[data-maska]");
      });
    }

    initMask();
    
  
  })();