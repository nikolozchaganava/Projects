const detailsElement = document.querySelector("header nav details");

detailsElement.addEventListener("toggle", function() {
  const ulElement = detailsElement.querySelector("ul");

  if (detailsElement.open) {
    ulElement.style.height = "110%";
  } else {
    ulElement.style.height = "10%";
  }

  ulElement.style.transition = '.5s';
});