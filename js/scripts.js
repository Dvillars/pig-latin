function translator(){
  
};


$(function(){
  $("#blank").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var result = translator(input);

    $(".output").text(result);

  });
});
