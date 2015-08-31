var Endereco = {};
/*
 * classe busca informação no Json
 * @returns {informação solocitada no json}
 */
Endereco.finder = function(){
  var SlfAdd = this;
  
  /*
   * metodo mostra informação json
   * @param {string} addStr
   * @returns {informação solicitada}
   */
  SlfAdd.FindJson = function(addStr){
        $.getJSON('enderecos.json',function(data){
            $('#addStr').empty(); // LIMPA DIV
            $.each(data['enderecos'],function(i,emp){
                var regex = new RegExp( addStr.toUpperCase() , 'i'); //CONSTROI EXPRESSAO REGULAR DE BUSCA
                if(emp.nmStr.match((regex))&&addStr !== '') // SE ENCONTROU, MOSTRA MA DIV
                $('#addStr').append('<li style="cursor: pointer;" onmouseout=\'$(this).css("background-color","inherit");\' onmouseover=\'$(this).css("background-color","yellow");\'>'+emp.nmStr+'</li>');
            });
        });
  };
};
