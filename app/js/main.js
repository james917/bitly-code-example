// header scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
      $( ".navbar" ).removeClass('navbar-inverse').addClass('navbar-white');
        $( ".navbar-brand" ).removeClass('logo-header').addClass(' logo-header-orange');
  } else {
      // console.log('there mmrrr');
      $( ".navbar" ).removeClass('navbar-white').addClass('navbar-inverse');
      $( ".navbar-brand" ).removeClass('logo-header-orange').addClass('logo-header');
  }
});

// tooltip
$('a').tooltip();

//
$(window).load(function(){
  $('#results').css('display', 'none');
});
// console.log('testing');
$(document).ready(function(){

  function bitly_url(url) {
    var url = url;
    var username=USER_NAME; //USER_NAME
    var key=API_KEY; //API_KEY


    // ajax
    $.ajax({
      url:"http://api.bit.ly/v3/shorten",
      data:{longUrl:url,apiKey:key,login:username},
      dataType:"jsonp",
      success:function(v) {
        var bitly_url=v.data.url;
        // link results
        $('#results').html('<a href="'+bitly_url+'" target="_blank">'+bitly_url+'</a>');
        $('#results').css('display', 'block');
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
      // console.log('it worked');

    }
    else {
      console.log('Bad URL');
    }
    return false;
  }); //short

});
