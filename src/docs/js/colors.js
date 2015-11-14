var colors = function() {
  var colorElements = document.getElementsByClassName("docs__color");

  for (var i = 0; i < colorElements.length; i++) {
    var element = colorElements[i];

    var rgbaElement = document.createElement("small");
    rgbaElement.className = "show-block text-center";
    var color = window.getComputedStyle(element).getPropertyValue("background-color");
    rgbaElement.appendChild(document.createTextNode(color));
    element.appendChild(rgbaElement);
  }
};

