// Empty JS for your own code to be here

function sendData(){
  const front = document.getElementById('front');
  const back = document.getElementById('back');

var formData = new FormData();
formData.append('file_1',  window.URL.createObjectURL(front.files[0]));
formData.append('file_2',window.URL.createObjectURL(back.files[0]));
formData.append('options', '{"processImage": true}');


var myUrl = 'https://integration-api.preventgo.io/v2/any';
//  But if you make it from a browser, then it will work without problem ...

// However to make it work, we are going to use the cors-anywhere free service to bypass this
var proxy = 'https://cors-proxy.htmldriven.com/?url=';
const urlx = 'https://corsproxy.io/?' + encodeURIComponent('https://integration-api.preventgo.io/v2/any');

$.ajax({
    type: 'POST',
    url: myUrl,
    data: formData,
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    crossDomain: true,
    processData: false,
    xhrFields: { withCredentials: true }, 
    headers: {
       'Authorization': 'Basic bWF6ZW4uaGFtbW91ZEBleHQub2Rkby1iaGYuY29tOktZV0lSbDVKNFFHTlkzNnY0UEJU'
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
