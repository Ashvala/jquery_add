vanish_everything = function(delaynum){
    $(".button").each(function(){
        $(this).fadeOut(100).delay(delaynum);
    });
}
fade_in_answer = function(answer){
    resultstr = "The result is: " + answer;
    $(".resultnum").text(resultstr)
    $(".resultnum").fadeIn("slow").delay(300);
}

$(document).ready(function(){
    $(".addkey").click(function(){
//        add_num($(".number1").getNum(), $(".number2").getNum(),400);
        vanish_everything(300);
        fade_in_answer($(".number").addEmUp());

    });
});
