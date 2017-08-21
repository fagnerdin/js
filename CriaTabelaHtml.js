var _table_ = document.createElement('table'), 
    _thead_ = document.createElement('thead'),
    _tbody_ = document.createElement('tbody'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');


// função cria tabela
 function buildHtmlTable(arr) {
    // id da tabela
    _table_.id = "tabelaTeste";
    
    // Cria tabela
    var tbody = _tbody_.cloneNode(false);
    var thead = _thead_.cloneNode(false);
    var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, thead);
 
    table.className = "table table-striped table-hover small";

    for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         tbody.appendChild(tr);
     }
     
     table.appendChild(thead);
     table.appendChild(tbody);
     
     return table;
 }
 
 // add cabeçalho
 function addAllColumnHeaders(arr, thead)
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
     thead.appendChild(tr);
     return columnSet;
 }
