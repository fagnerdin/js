var _table_ = document.createElement('table'), 
    _tbody_ = document.createElement('tbody'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');


// criador de tabela
 function buildHtmlTable(arr) {
    // ADD ID
    _table_.id = "tabelaTeste";

    // cria tabela
    var tbody = _tbody_.cloneNode(false); // TBODY PRA BOOTSTRAP
    var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, tbody); // Envia array e tbody pra receber os dados
         
    // ADD CLASS
    table.className = "table table-hover table-striped";
        
        
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         tbody.appendChild(tr); // add no tbody
     }     
     table.appendChild(tbody); // add na tabela
     
     return table;
 }
 
 // ADD CABEÇALHO
 function addAllColumnHeaders(arr, tbody)
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
     tbody.appendChild(tr);
     return columnSet;
 }
