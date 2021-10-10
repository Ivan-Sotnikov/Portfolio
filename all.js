function password_visibility(){
    var input= document.getElementById("pass");
    if (input.getAttribute("type") == "password"){
        input.setAttribute("type", "text");
    }
    else {
        input.setAttribute( "type", "password");
    }
    
} 
function show_hide_password(target){
	var input = document.getElementById('pass');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}