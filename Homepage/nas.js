 $(document).ready(function() {
  var $item = 0,
    $itemNo = $(".accordion figure").length;
  function transitionSlide() {
    $item++;
    if ($item > $itemNo - 1) {
      $item = 0;
    }
    $(".accordion figure").removeClass("on");
    $(".accordionaccordion figure")
      .eq($item)
      .addClass("on");
  }
  var $autoTransition = setInterval(transitionSlide, 12000);

  $(".accordion figure").click(function() {
    clearInterval($autoTransition);
    $item = $(this).index();
    $(".accordion figure").removeClass("on");
    $(".accordion figure")
      .eq($item)
      .addClass("on");
    $autoTransition = setInterval(transitionSlide, 12000);
  });
});
