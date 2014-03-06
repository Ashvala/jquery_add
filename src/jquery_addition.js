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
    //Let's just erm... get some AJAX working...
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
        
        return num;
    }
}(jQuery));
