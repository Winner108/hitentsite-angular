$('body').on('click', '[materialize="dropdown"]', function () {
    $(".dropdown-content").fadeOut();
    var target = $(this).attr("data-activates");
    $("#" + target).css({'opacity': 1, top: ($(this).offset().top + $(this).height() + 10) + "px"});
    $("#" + target).fadeIn();
    if($("#" + target).offset().left + $("#" + target).width() > window.innerWidth) {
        $("#" + target).css("right", "10px");
    }
})

$('body').on('click', '.modal-close', function () {
    $(this).parent().fadeOut();
    $(".modal-overlay").remove();
});

$('body').on('click', '.modal-overlay', function () {
    $(".modal.open").fadeOut();
    $(".modal.open").removeClass('open');
    $(this).remove();
});


$(document).scroll(function () {
    if(window.pageYOffset >=  260)
    {
        if(!$("header").hasClass('header-fix'))
        {
            $("body").css("padding-top", "259px")
            $("header").addClass("header-fix");
            $("header").addClass("animated");
            $("header").addClass("fadeInDown");
            $(".lg-cntr.left").addClass("animated");
            $(".lg-cntr.left").addClass("bounceInDown");
        }
    }
    else
    {
        $("body").css("padding-top", "0px")
        $("header").removeClass("header-fix");
        $("header").removeClass("animated");
        $("header").removeClass("fadeInDown");
        $(".lg-cntr.left").removeClass("animated");
        $(".lg-cntr.left").removeClass("bounceInDown");
    }
})

$('body').click(function () {
    if($(".dropdown-button").length == 0) return;
    if (!event.target.matches('.dropdown-button') && !event.target.parentNode.matches('.dropdown-button')) {
      $(".dropdown-content").fadeOut();
    }
    // if (!event.target.matches('.modal') && !event.target.parentNode.matches('.modal')) {
    //   $(".modal").fadeOut();
    // }
  })