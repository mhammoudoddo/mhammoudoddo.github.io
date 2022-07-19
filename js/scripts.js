// Empty JS for your own code to be here

function sendData(){
  const front = document.getElementById('front');
  const back = document.getElementById('back');

// var form = new FormData();
// form.append("file_1", front.files[0], "/C:/Users/mhammoud/Downloads/marine1.png");
// form.append("file_2", back.files[0], "/C:/Users/mhammoud/Downloads/marine2.png");
// form.append("options", "{\"processImage\": true}");


// const settings = {
	// "async": true,
	// "crossDomain": true,
	// "url": "https://cors-proxy1.p.rapidapi.com/v1",
	// "method": "POST",
	// "headers": {
		// "content-type": "application/json",
		// "X-RapidAPI-Key": "841f836912msh1a36cce6db2ec3cp17b526jsn645a0be51d83",
		// "X-RapidAPI-Host": "cors-proxy1.p.rapidapi.com"
	// },
	// "processData": false,
	// "contentType": false,
	// "mimeType": "multipart/form-data",
	// "data": {
		// "url": "https://integration-api.preventgo.io/v2/any",
		// "method": "POST",
		// "params": {
			// "processData": "false",
            // "contentType": "false",
			// "mimeType": "multipart/form-data"
			// },
		// "data": form,
		// "headers": {
			// "content-type": "Content-Type: multipart/form-data",
			// "Authorization": "Basic bWF6ZW4uaGFtbW91ZEBleHQub2Rkby1iaGYuY29tOktZV0lSbDVKNFFHTlkzNnY0UEJU"
		// },
		// "cookies": {}
	// }
// };

// $.ajax(settings).done(function (response) {
	// console.log(response);
// });

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic bWF6ZW4uaGFtbW91ZEBleHQub2Rkby1iaGYuY29tOktZV0lSbDVKNFFHTlkzNnY0UEJU");
myHeaders.append("Cookie", "ROUTEID=.1");

var formdata = new FormData();
formdata.append("file_1", front.files[0], "/C:/Users/mhammoud/Downloads/marine1.png");
formdata.append("file_2", back.files[0], "/C:/Users/mhammoud/Downloads/marine2.png");
formdata.append("options", "{\"processImage\": true}");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("https://integration-api.preventgo.io/v2/any", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



// var form = new FormData();
// form.append("file_1", front.files[0], "/C:/Users/mhammoud/Downloads/marine1.png");
// form.append("file_2", back.files[0], "/C:/Users/mhammoud/Downloads/marine2.png");
// form.append("options", "{\"processImage\": true}");

// var settings = {
  // "url": "http://www.whateverorigin.org/get?url=" + encodeURIComponent('https://integration-api.preventgo.io/v2/any') + "&callback=?",
  // "method": "POST",
  // "timeout": 0,
  // "processData": false,
  // "mimeType": "multipart/form-data",
  // "contentType": false,
  // "data": form
// };

// $.ajax(settings).done(function (response) {
  // console.log(response);
// });

}
