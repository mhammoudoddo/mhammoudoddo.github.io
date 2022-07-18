// Empty JS for your own code to be here

function sendData(){
  const front = document.getElementById('front');
  const back = document.getElementById('back');

  var clientId = "mazen.hammoud@ext.oddo-bhf.com";
  var clientSecret = "KYWIRl5J4QGNY36v4PBT";

// var authorizationBasic = $.base64.btoa(clientId + ':' + clientSecret);
var authorizationBasic = window.btoa(clientId + ':' + clientSecret);

$.ajax({
    type: 'POST',
    url: 'https://integration-api.preventgo.io/v2/any',
    data: { file_1: front.files[0], file_2: back.files[0], options: '{"processImage": true}' },
    dataType: "jsonp",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    crossDomain: true,
    xhrFields: { withCredentials: true }, 
    headers: {
       'Authorization': 'Basic ' + authorizationBasic
    },
    success: function (result) {
       $( "#result" ).html( result );
    },
    //complete: function (jqXHR, textStatus) {
    //},
    error: function (req, status, error) {
    alert(error);
    }
});

}
