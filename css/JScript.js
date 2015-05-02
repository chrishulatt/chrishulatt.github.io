<html>
<body>
<p id="circle"></p>

<canvas id="myCanvas" width="100" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50,50,40,0,2*Math.PI);
ctx.font = "10px Arial";
ctx.fillText("Hello",25,50);
ctx.stroke();
</script>

</html>
</body>
