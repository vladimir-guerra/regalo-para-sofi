const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

$(async () => {
  const check_nav_mobile = () => {
    if ($(window).width() > 768) $("#mobile-nav").hide();
    else $("#mobile-nav").show();
  };

  $('a[href^="#"]').on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        { scrollTop: $(hash).offset().top - 50 },
        800,
        () => (window.location.hash = hash),
      );
    }
  });

  check_nav_mobile();
  $(window).resize(() => check_nav_mobile());

  let phrases = [
    "Yo no sé dibujar",
    "Ni soy bueno con los regalos",
    "Pero te quiero demostrar",
    "Lo mucho que yo te amo",
  ];
  let welcome = $("#welcome");
  for (let i = 0; i < phrases.length; i++) {
    welcome.text(phrases[i]).fadeIn(500);
    await wait(3000);
    welcome.fadeOut(500);
    await wait(1500);
  }
});
