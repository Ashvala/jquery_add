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

}(jQuery));
