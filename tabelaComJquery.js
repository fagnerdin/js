var _table_ = document.createElement('table'),    
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');


// Cria a tabela com json
 function buildHtmlTable(arr) {
//     configuracao da tabela
    _table_.id = "tabelaTeste"; //dando id pra tabela
    _table_.className = "table"; //bootstrap
     
//     criacao tabela
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }     
     return table;
 }
 
 // Adiciona dados na tabela
 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }

// funcao joga resultado na tabela
function jogaResultado(){
    var divRecip = $('#divParaResultado');
    
    var dtJson = gtJsonData();
    var jsonData = "";
    divRecip.html(buildHtmlTable(JSON.parse(dtJson)));
    _table_.className = "table";
    
}

/** BUSCA DADOS JSON **/
function gtJsonData(){
    // exibicao da query em json
    var pagina = "http://172.0.0.57/pagina/mostraJson";
    var idata;

    $.ajax({
      type: 'POST',
      url: pagina,
      dataType: 'text',
      async: false,
      success: function(result){idata = result;}
    });
    return idata;
}
