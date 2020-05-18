//check off todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("checked");
});

//delete todo
$("ul").on("click", ".delete", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add todo
$("input[type='text']").keypress(function(event){
  //check if enter key pressed inside text input
  if(event.which===13) {
    var todoText = $(this).val();
    //clear input text
    $(this).val("");
    //add <li> to <ul>
    $("ul").append("<li><span class='delete'><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

//plus icon
$("#plus").on("click", function(){
  $("input[type='text']").fadeToggle(300);
});
