function createUser() {
	$.ajax({
		url: 'http://messenger.api.niamor.com/createUser',
		method: 'post',
	}).done(utilisateurCree);
}

function utilisateurCree(user) {
	myUser = user;
	console.log(user);
}

// 	for ( i = 0 ; i < user.length ; i++ ) {
// 		createUser(user[i]);
// 		lastId = user[i].id;
// }