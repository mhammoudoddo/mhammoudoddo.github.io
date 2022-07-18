// Empty JS for your own code to be here

function sendData(){
  const front = document.getElementById('front');
  const back = document.getElementById('back');

  var clientId = "mazen.hammoud@ext.oddo-bhf.com";
  var clientSecret = "KYWIRl5J4QGNY36v4PBT";

// var authorizationBasic = $.base64.btoa(clientId + ':' + clientSecret);
var authorizationBasic = window.btoa(clientId + ':' + clientSecret);
  var logoImg = $('input[name="logoImg"]').get(0).files[0];
var formData = new FormData();
formData.append('file_1',  window.URL.createObjectURL(front.files[0]));
formData.append('file_2',window.URL.createObjectURL(back.files[0]));
formData.append('options', '{"processImage": true}');

$.ajax({
    type: 'POST',
    url: 'https://integration-api.preventgo.io/v2/any',
    data: formData,
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
