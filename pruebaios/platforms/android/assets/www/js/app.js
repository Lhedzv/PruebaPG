
$(document).ready(function(){

  console.log('ready works!')
  var output = $('#output');

  $.ajax({
  url: '127.0.0.1:3000/api/v1/Asesorias',
  dataType: 'jsonp',
  jsonp: 'jsoncallback',
  timeout: 5000,
  success: function(data, status){
    $.each(data, function(i,item){
      var thing = '<h1>'+item.id+'</h1>'
      + '<p>'+item.text+'<br>'
      + item.complete+'</p>';

      output.append(thing);
    });
  },
  error: function(){
    output.text('There was an error loading the data.');
  }
});


})
