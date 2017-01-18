// var vowels = ['a', 'e', 'i', 'o', 'u']
// var consonants = ['y','q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
//
var result;

function translator(input){

  if (/^[aeiou]$/ig.test(input.charAt(0))) {
    result = input + "ay";

  } else if (/^[y]$/ig.test(input.charAt(0))) {
    var wordArray = input.split("");

    for (var index = 0; /^[yqwrtpsdfghjklzxcvbnm]$/ig.test(input.charAt(index)); index += 1) {
      wordArray.push(input[index]);
      wordArray.shift();
      };
      result = wordArray.join("") + "ay";

  } else if (/^[qwrtpsdfghjklzxcvbnm]$/ig.test(input.charAt(0))) {
    var wordArray = input.split("");

    for (var index = 0; /^[qwrtpsdfghjklzxcvbnm]$/ig.test(input.charAt(index)); index += 1) {
      wordArray.push(input[index]);
      wordArray.shift();
      };
      result = wordArray.join("") + "ay";
    } else {

  };
    return result;
};


$(function(){
  $("#blank").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var result = translator(input);

    $(".result").text(result);

  });
});



//
// input.charAt(0) === 'a' || input.charAt(0) === 'e' || input.charAt(0) === 'i' || input.charAt(0) === 'o' ||   input.charAt(0) === 'u'
