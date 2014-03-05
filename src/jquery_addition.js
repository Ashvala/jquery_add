vanish_everything = function(delaynum){
    $(".number").each(function(){
        $(this).fadeOut(100).delay(delaynum);
    });
}
fade_in_answer = function(added){
    resultstr = "The result is: " + added;
    $(".resultnum").text(resultstr)
    $(".resultnum").fadeIn("slow").delay(300);
}
add_num = function(num1, num2, delayval){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var added = num1 + num2;
    vanish_everything(delayval);
    fade_in_answer(added);
}

$(document).ready(function(){
$(".addkey").click(function(){
    add_num($(".number1").text(), $(".number2").text(),400);
});
});
