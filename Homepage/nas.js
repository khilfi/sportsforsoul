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


  $(".accordion figure").click(function() {
    $item = $(this).index();
    $(".accordion figure").removeClass("on");
    $(".accordion figure")
      .eq($item)
      .addClass("on");
  });
});
