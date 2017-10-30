// $("#open-content").click(function() {
//   var iframe = $("#project-1");
//   iframe.attr("src", iframe.data("src"));
//   var elem = document.getElementById('project1');
//   elem.classList.remove("is-hidden");
// });
//
// $("#close-content").click(function() {
//   var elem = document.getElementById('project1');
//   elem.classList.add("is-hidden");
// });
//
// var links = ['https://www.facebook.com/', 'https://twitter.com', 'https://soundcloud.com'];
//
//
//
//
// window.addEventListener('load', function() {
//   var listElement = document.getElementsByClassName('nav-link');
//   for (i = 0; i < listElement.length; i++) {
//     listElement[i].addEventListener('click', openURL.bind(null, event, links[i]))
//   }
// })
//
//
//
$("#open-contact").click(function() {
  var elem = document.getElementById('contact');
  elem.classList.remove("invisible");
});

$("#open-contact").siblings().click(function() {
  var elem = document.getElementById('contact');
  elem.classList.add("invisible");
});


var hideButton = document.getElementsByClassName("js-hideButton");
for (var i = 0; i < hideButton.length; i++) {
	hideButton[i].addEventListener("click", function(){
		[].forEach.call(document.querySelectorAll("li.show"), function(hideContent){
			hideContent.classList.remove("show");
		});
	});
}
