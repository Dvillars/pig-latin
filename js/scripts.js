// var vowels = ['a', 'e', 'i', 'o', 'u']
// var consonants = ['y','q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
//


function translator(input){
  var result;
  if (/^[aeiou]$/ig.test(input.charAt(0))) {
    result = input + "ay";

  } else if (/^[qwrtypsdfghjklzxcvbnm]$/ig.test(input.charAt(0))) {
    var wordArray = input.split("");

    for (var index = 0; index < wordArray.length; index += 1) {
      if (/^[qwrtypsdfghjklzxcvbnm]$/ig.test(input.charAt(index))) {
        wordArray.push(input[index]);
        wordArray.shift();
      } else {
        return;
      }
    }

    result = wordArray + "ay";

    // var newWord = input.slice(2) + input.slice(0, 1);
    // result = newWord + "ay"
  } else {




    // var newWord = input.slice(1) + input.charAt(0);
    // result = newWord + "ay"
  }
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
