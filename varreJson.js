  var r = JSON.parse(result);  //result é o json que pode ser aquivo ou dados em...
  $.each(r, function(index,result){
  chartData.push( {
    "name": result.colName1,
    "data": result.colName2
   });
  });
