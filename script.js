var circle = d3.selectAll("circle");

circle.style("fill", "tomato");
circle.attr("r", 30);
circle.attr("cx", function() { return Math.random() * 720; });
