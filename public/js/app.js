$(document).ready(function(){
  "use strict";

/** Close the main Banner at the top after you scroll down the page **/
  function checkOffset() {
    if ($("#mainNav").offset().top < 50) {
      $("img.mainLogo").addClass('top', 300);
    }
    else if(!$(window).scrollTop()) {
      $("img.mainLogo").addClass('top', 300);
    }
    else {
      $("img.mainLogo").removeClass('top', 300);
    }
  }
    checkOffset();

  $(window).scroll(function() {
    checkOffset();
  });

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

  var qOne = $(".quarter-one");
  var qOnepos = qOne.position();
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= qOnepos.top & windowpos <= $(document).height() * 0.20) {
        qOne.addClass("fixed");
        qOne.css({'transform': 'translateY(' + windowpos * +.35 + 'px) scale(' +  windowpos / 1500 + ')'});
      } else {
        qOne.removeClass("fixed");
      }
    });

  var qTwo = $(".quarter-two");
  var qTwopos = qTwo.position();
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= qTwopos.top & windowpos <= $(document).height() * 0.50 & windowpos >= $(document).height() * 0.20) {
        qTwo.addClass("fixed");
        qTwo.css({'transform': 'translateY(' + windowpos * +.25 + 'px) scale(' +  windowpos / 3000 + ')'});
      } else {
        qTwo.removeClass("fixed");
      }
    });

  var qThree = $(".quarter-three");
  var qThreepos = qThree.position();
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= qThreepos.top & windowpos <= $(document).height() * 0.65 & windowpos >= $(document).height() * 0.45) {
        qThree.addClass("fixed");
        qThree.css({'transform': 'translateY(' + windowpos * +.15 + 'px) scale(' +  windowpos / 6000 + ')'});
      } else {
        qThree.removeClass("fixed");
      }
    });

  var qFour = $(".quarter-four");
  var qFourpos = qFour.position();
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= qFourpos.top & windowpos > $(document).height() * 0.60) {
        qFour.addClass("fixed");
        qFour.css({'transform': 'translateY(' + windowpos * +.075 + 'px) scale(' +  windowpos / 12000 + ')'});
      } else {
        qFour.removeClass("fixed");
      }
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

  $(window).on('scroll', function() {
    $(".animation-sky-marker").each(function() {
      if (isScrolledIntoView($(".animation-sky-marker"))) {
        $(".animation-sky-container").addClass("animation-sky");
      } else {
        $(".animation-sky-container").removeClass("animation-sky");
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


});
