(function($){
    //Get Number
    $.fn.getNum = function(){
        return parseFloat($(this).text());
    }

    //Add them up
    $.fn.addEmUp = function(){
        var num = 0;
        $(this).each(function(){
            num += $(this).getNum();
        });
        return num;
    }
    //"Let's get some AJAX going, babe" ~ Bender
    $.fn.addEmUpToAjax = function(urltopost){
        var num = 0;
        $(this).each(function(){
            num += $(this).getNum();

        });

        $.ajax({
            type: "POST",
            url: urltopost,
            data: {"result": num},
        });
        console.log(num)
        return num;
    }
}(jQuery));
