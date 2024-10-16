console.log(`
  Why hello there!

  Here, have something to cheer you up!

  (@_@)   (>_<)   q(^_^)p   (o_O)   *(^.^)*

  What are you looking for in dev tools? Just curious.

  Don't be a stranger, shoot me an email :)

  ===

  Have a great day! <3

  < Yordan N. Nenov - the-IncideN7 />
  `);

window.handleColorSwap = function() {
  const root = document.querySelector(":root");
  var initialColor = getComputedStyle(root).getPropertyValue("--accent_primary");
  var colorToBeSet = initialColor;
  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  }

  function updateInputs(color) {
    $("#color_input").val(color);
    $("#color_picker").val(color);
  }

  var message = "";

  function setColor(trigger) {
    if(trigger.attr("id") == "reset_color_change_button") {
      root.style.setProperty("--accent_primary", initialColor);
      updateInputs(initialColor);
      message = "Colors reset to the default: <span>" + initialColor + "</span>.";
    } else {
      var color = isColor(colorToBeSet) ? colorToBeSet : initialColor;
      var messageColorCheckForDefault = colorToBeSet == initialColor ? "<span>" + color + "</span>. Oh. That's the default..." : "<span>" + color + "</span>. You are officially a developer now!";
      message = isColor(colorToBeSet) ?
        "Congratulations! You've changed the accent color of the entire website to " + messageColorCheckForDefault
        :
        "How is <span>" + colorToBeSet +  "</span>  a color? Back to default you go.";
      root.style.setProperty("--accent_primary", color);
      updateInputs(color);
    }
    $("#color_message").empty().append(message);
  }

  $("#color_picker").on("change", function() {
    colorToBeSet = $(this).val();
    setColor($(this));
  });

  $("#confirm_color_change_button").on("click", function() {
    colorToBeSet = !$("#color_input").val() ? initialColor : $("#color_input").val();
    setColor($(this));
  });

  $("#reset_color_change_button").on("click", function() {
    setColor($(this));
  });
}();

$("#color_input").on("focus", function() {
  this.select();
});

$("#portrait_holder").on("click", function() {
  $(this).toggleClass("active");
});

$("#color_message").on("click", function() {
  $(this).find("span").toggleClass("active");
});

window.handleFAQSliders = function() {
  var animationDuration = 375;
  $(".faq-body").slideUp(animationDuration);
  $(".faq-body.opened").slideDown(animationDuration);

  setTimeout(function() {
    $(".faq-item").removeClass("blurred-while-loading");
  }, animationDuration * 2);

  $(".faq-item").on("click", function(e) {
    if($(e.target).hasClass("link")) {
      return;
    }

    var faqBody = $(this).find(".faq-body");
    var faqItem = $(this);

    if(faqBody.hasClass("opened")) {
      faqBody.slideUp(animationDuration);
      faqBody.addClass("closed").removeClass("opened");
      faqItem.addClass("closed").removeClass("opened");
    } else {
      faqBody.slideDown(animationDuration);
      faqBody.addClass("opened").removeClass("closed");
      faqItem.addClass("opened").removeClass("closed");
    }
  });
}();

