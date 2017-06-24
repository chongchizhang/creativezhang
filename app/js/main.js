$("#open-content").click(function() {
  var iframe = $("#project-1");
  iframe.attr("src", iframe.data("src"));
  var elem = document.getElementById('project1');
  elem.classList.remove("is-hidden");
});

$("#close-content").click(function() {
  var elem = document.getElementById('project1');
  elem.classList.add("is-hidden");
});

$("#open-contact").click(function() {
  var elem = document.getElementById('contact');
  elem.classList.remove("is-hidden");
});

$("#open-contact").siblings().click(function() {
  var elem = document.getElementById('contact');
  elem.classList.add("is-hidden");
});
