
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
	var input, filter, projects, project, picture, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	projects = $(".projects");
	project = $(".projects div");

	// Loop through all project(s) and hide those who dont match the search query
	for (i = 0; i < project.length; i++) {
    const boxText0 = project[i].getElementsByTagName("p")[0];
		const boxText1 = project[i].getElementsByTagName("p")[1];
		if (boxText1) {
			if (boxText1.innerHTML.toUpperCase().indexOf(filter) > -1) {
				project[i].style.display = "";
			} else if (boxText0.innerHTML.toUpperCase().indexOf(filter) > -1) {
        project[i].style.display = "";
      } else {
				project[i].style.display = "none";
			}
		}
  }
}
