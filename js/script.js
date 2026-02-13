const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

$(document).ready(async () => {
  const check_nav_mobile = () => {
    const nav = $("#main-nav");
    if ($(window).width() > 425) {
      $("#mobile-nav").hide();
      nav.addClass("nav-pc");
      nav.removeClass("nav-mobile");
    } else {
      $("#mobile-nav").show();
      nav.addClass("nav-mobile");
      nav.removeClass("nav-pc");
    }
    const headerHeight = $("#header").outerHeight(true);
    nav.css("top", headerHeight + "px");
  };

  $("#mobile-nav").on("click", function (e) {
    e.stopPropagation();
    $("#main-nav").toggleClass("nav-open");
  });

  $('a[href^="#"]').on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        { scrollTop: $(hash).offset().top - 25 - $("#header").innerHeight() },
        800,
        () => (window.location.hash = hash),
      );

      if ($(this).hasClass("nav-item")) $("#main-nav").removeClass("nav-open");
    }
  });

  check_nav_mobile();
  $(window).on("resize", () => check_nav_mobile());

  const phrases = [
    "Yo no sé dibujar",
    "Ni soy bueno con los regalos",
    "Pero te quiero demostrar",
    "Lo mucho que yo te amo",
  ];
  const welcome = $("#welcome");

  for (const phrase of phrases) {
    welcome.text(phrase).fadeIn(500);
    await wait(3000);
    welcome.fadeOut(500);
    await wait(1500);
  }
  $("#two-owls").fadeIn(800)
});

$(document).on("click", function (e) {
  if (!$(e.target).closest("#header").length)
    $("#main-nav").removeClass("nav-open");
});
