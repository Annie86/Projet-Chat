var authKey = "";

function createUser(){
  $.ajax({
    url: 'http://messenger.api.niamor.com/createUser'
  }).done(CUse);
}
  
var myUser;

function CUse(user){
  myUser = user;
}
createUser();




function sendMessage(){
	
	changePseudo();
	console.log(myUser.username);
  $message = document.getElementById('chatText').value;
  $.ajax({
    url: 'http://messenger.api.niamor.com/sendMessage',
        method: 'post',
        data: {
          authKey: myUser.authKey,
          text: $message,
          to: 0
        }
        
  })
}

var othUse;

function chatBox(){
	//monButton();
  $.ajax({
    url: 'http://messenger.api.niamor.com/getMessages',
    method: 'post',
    data: {
      authKey: myUser.authKey,
      lastId: 0
    }

  }).done(affichMess)


}

function affichMess(oUse){
  document.getElementById('chatBox').innerHTML = "";
  
for (i = 0; i < oUse.length; i++) {
  othUse = oUse[i];
  document.getElementById('chatBox').innerHTML += othUse.from.username+" : "+othUse.text+"<br>";
  }
}

$(document).ready(setInterval(chatBox, 3000));
//$(document).ready(chatBox);


function changePseudo(){
	var recupPseudo = document.getElementById('pseudo').value;
	
	$.ajax({
		url:'http://messenger.api.niamor.com/changeUsername',
		method : 'post',
		data: {
		authKey : myUser.authKey,
		username : recupPseudo}
	}).done(changementLocal);
	console.log(myUser.authKey);
}

function changementLocal(change){

	console.log(change);
}
