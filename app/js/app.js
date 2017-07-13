$(document).ready(function(){

  function bitly_url(url) {
    var url = url;
    var username="james917";
    var key="R_b48d44ed363b4039b4d8cc879c6af2c8";

    // ajax
    $.ajax({
      url:"http://api.bit.ly/v3/shorten",
      data:{longUrl:url,apiKey:key,login:username},
      dataType:"jsonp",
      success:function(v) {
        var bitly_url=v.data.url;
        // link results
        $('#results').html('<a href="'+bitly_url+'" target="_blank">'+bitly_url+'</a>');
      }
    });//ajax
  }

  //
  $("#url").focus();

  $("#short").click(function(){
    var url=$("#url").val();
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var urltest=urlRegex.test(url);
    if(urltest){
      bitly_url(url);
      $("#url").val('');
      $("#url").focus();
      console.log('it worked');
    }
    else {
      console.log('Bad URL');
    }
    return false;
  }); //short

});
