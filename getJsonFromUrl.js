jQuery(function($) {                   
    $.ajax( {   
        url : "http://localhost/jsonData1.json",
        type : "GET",
        success : function(data) {
            // objeto
            var jsonData = JSON.parse(data);
            var date = new Array();                                
            var i = -1;            
            // objeto . header1
            $.each(jsonData.data, function(Idx, Value) {
                $.each(Value, function(x, y) {
                    if(x == 'header'){
                        i = i + 1;
                        date[i] = y;
                    }
                });
            });
            //linha 1, no exemplo
            $("#conteudo").html(date[0]);
        }
    });
});
