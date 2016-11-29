// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  var newDiv = d3.select("#sandbox").append("div");
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = newDiv.append("svg");
  // Set both the width and height attributes of your `svg` to 300 
  mySvg.attr("width", "300");
  mySvg.attr("height", "300");
  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  var circle = mySvg.append("circle");
  circle.attr("r", "30");
  circle.attr("cx", "75");
  circle.attr("cy", "30");
  circle.style("opacity", ".5");
  circle.style("fill", "blue");
  // Append a `rect` element to your `svg`, setting the properties noted in index.html
  var circle = mySvg.append("rect");
  circle.attr("x", "70");
  circle.attr("y", "60");
  circle.attr("width", "10");
  circle.attr("height", "250");
  circle.style("opacity", ".5");
  circle.style("fill", "orange");
});
