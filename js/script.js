
// Slow Scroll on link click
const $scrollLink = $(".scroll");

$scrollLink.click(function(event) {
  event.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top
  }, 1000 );
});

// searchBox

function searchBox () {
	// Declare variables
	var input, filter, users, user, picture, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	users = $(".projects");
	user = $(".projects div");

	// Loop through all user(s) and hide those who dont match the search query
	for (i = 0; i < user.length; i++) {
    const boxText0 = user[i].getElementsByTagName("p")[0];
		const boxText1 = user[i].getElementsByTagName("p")[1];
		if (boxText1) {
			if (boxText1.innerHTML.toUpperCase().indexOf(filter) > -1) {
				user[i].style.display = "";
			} else if (boxText0.innerHTML.toUpperCase().indexOf(filter) > -1) {
        user[i].style.display = "";
      } else {
				user[i].style.display = "none";
			}
		}
  }
}
