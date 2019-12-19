import "../style/index.scss";
var helpers = require('prettify');

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: "alesanchezr",
    github: "alesanchezr",
    linkedin: "alesanchezr",
    instagram: "alesanchezr",
    name: "Lucy",
    lastname: "Boilett",
    role: "Web Developer",
    country: "USA",
    city: "Miami"
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? " "
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};

$(window).load(function() {
  $(".col-3 input").val("");

  $(".input-effect input").focusout(function() {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
});
