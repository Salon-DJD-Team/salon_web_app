"use strict";


//Hide Loading Box (Preloader)
function preloader() {
	jQuery('.preloader').delay(200).fadeOut(500);
}


//Update Header Style and Scroll to Top
function headerStyle() {
	if(jQuery('.main-header').length){
		var windowpos = jQuery(window).scrollTop();
		var siteHeader = jQuery('.main-header');
		var scrollLink = jQuery('.scroll-to-top');
		
		var HeaderHight = jQuery('.main-header').height();
		if (windowpos >= HeaderHight) {
			siteHeader.addClass('fixed-header');
			scrollLink.fadeIn(300);
		} else {
			siteHeader.removeClass('fixed-header');
			scrollLink.fadeOut(300);
		}
		
	}
}


//Submenu Dropdown Toggle
function submenu_dropdown()
{
	jQuery('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
	
	//Dropdown Button
	jQuery('.main-header li.dropdown .dropdown-btn').on('click', function() {
		jQuery(this).prev('ul').slideToggle(500);
	});
	
	//Disable dropdown parent link
	jQuery('.navigation li.dropdown > a').on('click', function(e) {
		e.preventDefault();
	});
	
	//Disable dropdown parent link
	jQuery('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
		e.preventDefault();
	});
	
	jQuery('.hamburger').on('click', function(e) {
		jQuery('.about-sidebar').addClass('active');
	});
	
	jQuery('.about-sidebar .close-button').on('click', function(e) {
		jQuery('.about-sidebar').removeClass('active');
	});
	
	jQuery('.about-sidebar .gradient-layer').on('click', function(e) {
		jQuery('.about-sidebar').removeClass('active');
	});
	
	jQuery('.xs-sidebar-group .close-button').on('click', function(e) {
		jQuery('.xs-sidebar-group.info-group').removeClass('isActive');
	});
	
	jQuery('.newsletter-close-btn').on('click', function(e) {
		jQuery('.quickview-popup-area-section').removeClass('active');
	});
	
}


//Mobile Nav Hide Show
function mobile_menu()
{
	var mobileMenuContent = jQuery('.main-header .nav-outer .main-menu').html();
	jQuery('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
	jQuery('.sticky-header .main-menu').append(mobileMenuContent);
	
	//Hide / Show Submenu
	jQuery('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
		e.preventDefault();
		var target = jQuery(this).parent('li').children('ul');
		
		if (jQuery(target).is(':visible')){
			jQuery(this).parent('li').removeClass('open');
			jQuery(target).slideUp(500);
			jQuery(this).parents('.navigation').children('li.dropdown').removeClass('open');
			jQuery(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
			return false;
		}else{
			jQuery(this).parents('.navigation').children('li.dropdown').removeClass('open');
			jQuery(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
			jQuery(this).parent('li').toggleClass('open');
			jQuery(this).parent('li').children('ul').slideToggle(500);
		}
	});

	//3rd Level Nav
	jQuery('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
		e.preventDefault();
		var targetInner = jQuery(this).parent('li').children('ul');
		
		if (jQuery(targetInner).is(':visible')){
			jQuery(this).parent('li').removeClass('open');
			jQuery(targetInner).slideUp(500);
			jQuery(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
			jQuery(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
			return false;
		}else{
			jQuery(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
			jQuery(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
			jQuery(this).parent('li').toggleClass('open');
			jQuery(this).parent('li').children('ul').slideToggle(500);
		}
	});

	//Menu Toggle Btn
	jQuery('.mobile-nav-toggler').on('click', function() {
		jQuery('body').addClass('mobile-menu-visible');

	});

	//Menu Toggle Btn
	jQuery('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
		jQuery('body').removeClass('mobile-menu-visible');
		jQuery('.mobile-menu .navigation > li').removeClass('open');
		jQuery('.mobile-menu .navigation li ul').slideUp(0);
	});

	jQuery(document).keydown(function(e){
		if(e.keyCode == 27) {
			jQuery('body').removeClass('mobile-menu-visible');
		jQuery('.mobile-menu .navigation > li').removeClass('open');
		jQuery('.mobile-menu .navigation li ul').slideUp(0);
		}
	});
	
}


//Header Search
function search_box()
{
	jQuery('.search-box-outer').on('click', function() {
		jQuery('body').addClass('search-active');
	});
	jQuery('.close-search').on('click', function() {
		jQuery('body').removeClass('search-active');
	});
}


//Quantity Spinner
function quantity_spinner()
{
	jQuery(".qty-spinner").TouchSpin({
		verticalbuttons: true
	});
}


//Add One Page nav
function scroll_nav()
{
	jQuery('.scroll-nav ul').onePageNav();
}


//Custom Scroll Linsk / Sidebar
function custom_scroll()
{
	jQuery(".scroll-nav li a").on('click', function(e) {
		e.preventDefault();
		jQuery('body').removeClass('mobile-menu-visible');
	});
}


function proller()
{
	jQuery('.paroller').paroller({
			factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			type: 'foreground',     // background, foreground  
			direction: 'horizontal' // vertical, horizontal  
	});
}


//Parallax Scene for Icons
function parallax_1()
{
	var scene = jQuery('.parallax-scene-1').get(0);
	var parallaxInstance = new Parallax(scene);
}


//Parallax Scene for Icons
function parallax_2()
{
	var scene = jQuery('.parallax-scene-2').get(0);
	var parallaxInstance = new Parallax(scene);
}


//Custom Seclect Box
function custom_select_box()
{
	jQuery('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
}


//Countdown Timer
function time_countdown()
{
	jQuery('.time-countdown').each(function() {
		var count = jQuery(this), finalDate = jQuery(this).data('countdown');
		count.countdown(finalDate, function(event) {
			var jQuerythis = jQuery(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	});
}


// Odometer
function facts_counter() {
    jQuery('.odometer').each(function() {
        var el = jQuery(this);
        var countNumber = el.attr("data-count");
        // If using Odometer.js directly:
        var od = new Odometer({
            el: this,
            value: 0
        });
        od.update(countNumber);
    });
}


//Accordion Box
function accordion_box() {
    jQuery(".accordion-box").on('click', '.acc-btn', function() {

        var outerBox = jQuery(this).closest('.accordion-box');
        var target = jQuery(this).closest('.accordion');
        var accContent = jQuery(this).next('.acc-content');

        if (jQuery(this).hasClass('active')) {
            // If it's already active, collapse it
            jQuery(this).removeClass('active');
            target.removeClass('active-block');
            accContent.slideUp(300);
        } else {
            // Otherwise, expand it and collapse others
            jQuery(outerBox).find('.accordion .acc-btn').removeClass('active');
            jQuery(outerBox).find('.accordion').removeClass('active-block');
            jQuery(outerBox).find('.accordion .acc-content').slideUp(300);

            jQuery(this).addClass('active');
            target.addClass('active-block');
            accContent.slideDown(300);
        }
    });
}


//Main Slider Carousel
function main_slider()
{
	jQuery('.main-slider-carousel').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop:true,
		margin:0,
		nav:true,
		smartSpeed: 500,
		autoplay: 6000,
		navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			800:{
				items:1
			},
			1024:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});
}


// Two Item Carousel
function two_item_carousel() {
	jQuery('.two-item-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		rtl:false,
		smartSpeed: 700,
		autoplay: 5000,
		navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			800:{
				items:2
			},
			1024:{
				items:2
			},
			1200:{
				items:2
			}
		}
	});    		
}


// Gallery Carousel
function gallery_carousel() {
	jQuery('.gallery-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		rtl:false,
		smartSpeed: 700,
		autoplay: 5000,
		navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			800:{
				items:3
			},
			1024:{
				items:4
			},
			1200:{
				items:4
			}
		}
	});    		
}


//Tabs Box
function tab_box()
{
	jQuery('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
		e.preventDefault();
		var target = jQuery(jQuery(this).attr('data-tab'));
		
		if (jQuery(target).is(':visible')){
			return false;
		}else{
			target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
			jQuery(this).addClass('active-btn');
			target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
			target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
			jQuery(target).fadeIn(300);
			jQuery(target).addClass('active-tab');
		}
	});
}


// LightBox Image
function magnific_image()
{
	jQuery('.lightbox-image').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
}


// LightBox Video
function magnific_video()
{
	jQuery('.lightbox-video').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		iframe:{
		patterns:{
			youtube:{
			index: 'youtube.com',
			id: 'v=',
			src: 'https://www.youtube.com/embed/%id%'
		},
		},
		srcAction:'iframe_src',
	},
		fixedContentPos: false
	});
}


// Elements Animation
function wow()
{
	var wow = new WOW(
		{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true       // act on asynchronously loaded content (default is true)
		}
	);
	wow.init();
}


function newsletterPopup()
{
	var newsletter = jQuery(".newsletter-popup-area-section");
	var newsletterClose = jQuery(".newsletter-close-btn");

	var test = localStorage.input === 'true'? true: false;
	jQuery(".show-message").prop('checked', test || false);

	var localValue = localStorage.getItem("input");

	if(localValue === "true") {
		newsletter.css({
			"display": "none"
		});                
	}

	newsletter.addClass("active-newsletter-popup");

	newsletterClose.on("click", function(e) {
		newsletter.removeClass("active-newsletter-popup");
		return false;
	})

	jQuery(".show-message").on('change', function() {
		localStorage.input = jQuery(this).is(':checked');
	});
}

/* ==========================================================================
When document is Scrollig, do
========================================================================== */

jQuery(window).on('scroll', function() {
	headerStyle();
});

/* ==========================================================================
When document is loading, do
========================================================================== */

jQuery(window).on('load', function() {
	preloader();
	
	// Newsletter PoPup
	if(jQuery(".newsletter-popup-area-section").length) {
		setTimeout(function() {
			newsletterPopup();
		},"2000");
	}
	if(jQuery(".cookies-area").length) {
		cookiesClose();
	}
});	
