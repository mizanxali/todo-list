//check off todo by clicking
$("li").on("click", function() {
  $(this).toggleClass("checked");
});

//delete todo
$(".delete-btn").on("click", function(event) {
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
})
