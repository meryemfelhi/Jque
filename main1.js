$("#b1").css("fontSize", "20px");
$("#b2").css("fontSize", "20px");
$("#b3").css("fontSize", "20px");
$("#b4").css("fontSize", "20px");
$("#b5").css("fontSize", "20px");
$("#b6").css("fontSize", "20px");
$("#b7").css("fontSize", "20px");
  $("#b7").click(function(){
      $("#para").html("Get out of my page now !!")})
  $("#b1").click(function(){
    $("#para").css("fontStyle", "Italic")})
    $("#b2").click(function(){
      $("#para").css("fontWeight", "Bold")})
  $("#b3").click(function(){
    $("#para").css("textDecoration", "underline")})
$("#b4").click(function(){
  $("#para").css("fontSize", "100px")})
$("#b5").click(function(){
  $("#para").css("fontSize", "5px")})
  $("#b6").click(function(){
    $("#para").css("fontSize", "30px")})
   
   
    $( "#d1" ).click(function() {
     var x=$('#d1').val();
     $("#para").css("fontSize", $("#d1").val()+"px")  });
   
     $( "#d2" ).click(function() {
      var y=$('#d2').val();
      $("#para").css("fontFamily", $("#d2").val() ) })