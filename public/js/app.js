$(document).ready(function(){
  "use strict";

  $("a[href^='#']").click(function(e) {
    e.preventDefault();
	  var position = $($(this).attr("href")).offset().top;

	   $("body, html").animate({
       scrollTop: position
	   } /* speed */ );
  });

/** Close the main Navigation Section you've selected **/
  $("a.nav-link").click(function(){
    $(".subnav").removeClass("show");
  });

  var elementsFirst = $(".dashed-roadline"), quantityFirst = elementsFirst.length;
  $(window).on("scroll", function () {
    window.requestAnimationFrame(function () {
      /** Road Line - Scroll window to translateY **/
      for (var i = 0; i < quantityFirst; i++) {
        var currentElement = elementsFirst.eq(i);
        var scrolled = $(window).scrollTop();
        currentElement.css({
          'transform': 'translate3d(0,' + scrolled * -0.15 + 'px, 0)'
        });
      }
    });
  });

  var backgroundFly = $(".animation-sky-container").attr( "id" );
  $("div.animation-sky-container div").css({'background-image' : 'url(../roadmap/public/images/' + backgroundFly + '.svg)'});
  $(window).on('scroll', function() {
    $(".animation-sky-marker").each(function() {
      if (isScrolledIntoView($(".animation-sky-marker"))) {
        $(".animation-sky-container").addClass("animation-sky");
      } else {
        $(".animation-sky-container").removeClass("animation-sky");
      }
    });
  });

  var backgroundWalkLeft = $(".animation-ground-left-container").attr( "id" );
  $("div.animation-ground-left-container div").css({'background-image' : 'url(../roadmap/public/images/' + backgroundWalkLeft + '.svg)'});
  $(window).on('scroll', function() {
    $(".animation-ground-left-marker").each(function() {
      if (isScrolledIntoView($(".animation-ground-left-marker"))) {
        $(".animation-ground-left-container").addClass("animation-left");
      } else {
        $(".animation-ground-left-container").removeClass("animation-left");
      }
    });
  });

  var backgroundStaticRight = $(".animation-static-right-container").attr( "id" );
  $("div.animation-static-right-container div").css({'background-image' : 'url(../roadmap/public/images/' + backgroundStaticRight + '.svg)'});
  $(window).on('scroll', function() {
    $(".animation-static-right-marker").each(function() {
      if (isScrolledIntoView($(".animation-static-right-marker"))) {
        $(".animation-static-right-container").addClass("animation-right");
      } else {
        $(".animation-static-right-container").removeClass("animation-right");
      }
    });
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop();
    var docpostwo = windowpos - $(window).height();
    var docposthree = windowpos -  2 * $(window).height();
    var docposfour = windowpos - 3 * $(window).height();

    if (isScrolledIntoView($("#first-quarter-marker"))) {
      $(".quarter-one img").addClass("fixed");
      $(".quarter-one img").css({'transform': 'translateY(' + windowpos * +.25 + 'px) scale(' +  windowpos / 2500 + ')'});
    } else {
      $(".quarter-one img").removeClass("fixed");
    }
    if (isScrolledIntoView($("#second-quarter-marker"))) {
      $(".quarter-two img").addClass("fixed");
      $(".quarter-two img").css({'transform': 'translateY(' + windowpos * +.2 + 'px) scale(' + docpostwo / 3000 + ')'});
    } else {
      $(".quarter-two img").removeClass("fixed");
    }
    if (isScrolledIntoView($("#third-quarter-marker"))) {
      $(".quarter-three img").addClass("fixed");
      $(".quarter-three img").css({'transform': 'translateY(' + windowpos * +.25 + 'px) scale(' + docposthree / 5500 + ')'});
    } else {
      $(".quarter-three img").removeClass("fixed");
    }
    if (isScrolledIntoView($("#fourth-quarter-marker"))) {
      $(".quarter-four img").addClass("fixed");
      $(".quarter-four img").css({'transform': 'translateY(' + windowpos * +.25 + 'px) scale(' + docposfour / 5500 + ')'});
    } else {
      $(".quarter-four img").removeClass("fixed");
    }


  });

});
