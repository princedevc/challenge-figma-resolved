
import $ from 'jquery';
let user = {
    name: 'Mark Zamoyta',
    avatar: 'mark.jpg'
};

let promise = $.post(
	"http://z5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", user
);

promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);

// let xhttp = new HTMLHttpRequest();
// xhttp.onreadystatechallenge - function(){
// 	if (this.readyState == 4 && this.status == 200){
// 		console.log(this.responsiveText);
// 	}
// };

// xhttp.open("GET", "https://5f33ebaacfaf5a001646b77c.mockapi.io/api/v1/:endpoint", true);
// xhttp.send();

