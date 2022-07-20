// Empty JS for your own code to be here

$(document).ready(function() {
  $('#verify').on('click', function() {
    var $this = $(this);
	$this.prop("disabled", true);
	$('#infomsg').addClass('d-none');
	$('#errormsg').addClass('d-none');
    var loadingText = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
	  const front = document.getElementById('front');
  const back = document.getElementById('back');

const url = 'https://corsproxy.io/?' + encodeURIComponent('https://integration-api.preventgo.io/v2/any');
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic bWF6ZW4uaGFtbW91ZEBleHQub2Rkby1iaGYuY29tOktZV0lSbDVKNFFHTlkzNnY0UEJU");
myHeaders.append("Cookie", "ROUTEID=.1");

var formdata = new FormData();
formdata.append("file_1", front.files[0], URL.createObjectURL(front.files[0]));
formdata.append("file_2", back.files[0], URL.createObjectURL(back.files[0]));
formdata.append("options", "{\"processImage\": true}");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => {console.log(response.status); // Will show you the status
    if (!response.ok) {
		$('#errormsg').toggleClass('d-none');
		$this.html($this.data('original-text'));
		$this.removeAttr('disabled');
        throw new Error("HTTP status " + response.status);
		}
	return response.json();}
	)
  .then(result =>  {
	  var jsonres= result;
	  var holder = jsonres.identityDocumentInfo.documentDetails.holder;
	  var mrz = jsonres.identityDocumentInfo.documentDetails.mrz;
	  //check if error
	  if(!jsonres.hasOwnProperty("error"))
	  {
		  $('#infomsg').removeClass('d-none');
		  $('#fullname').html(holder.birthName +' '+ holder.firstName);
		  $('#details').html('Gender : '+ holder.gender +'<br/>'+'Brith Date: '+ holder.birthDate +'<br/>' +'Brith Place: '+ holder.birthPlace +'<br/>' +'Address : '+ holder.rawAddress +'<br/>' );
		  $('#footer').html(mrz.line1+mrz.line2);
	  }
	  else{
		  $('#errormsg').removeClass('d-none');
	  }
	  
   })
  .then(() =>{$this.html($this.data('original-text'));$this.removeAttr('disabled');})
  .catch(error => console.log('error', error));
  });
})
