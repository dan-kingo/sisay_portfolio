document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default action if the href is "#"
      if (this.getAttribute("href") === "") {
        event.preventDefault();
      }

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
