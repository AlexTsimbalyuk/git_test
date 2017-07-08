var field = document.querySelector(".field");
	
document.querySelector(".enter").onclick = function(){
	
	if (( field.value == "Serg" ) || 
	   ( field.value == "Alex" )) {
		alert("Welcome " + field.value);
		field.value = "";
	} else {
		alert("This user does not exist");
		field.value = "";
	}
	
}