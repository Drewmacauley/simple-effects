$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-showing").hide();
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});