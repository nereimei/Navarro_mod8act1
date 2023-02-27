var fname = prompt("Please enter your full name:", fname);
document.getElementById("fname").innerHTML = fname;

var uname = prompt("Please enter your username:", uname);
document.getElementById("username").innerHTML = uname;

var gend = confirm("What is your gender? \nPress OK if you are Male \nCancel if Female");
	if (gend == true){
		var gendr = "MALE";
		document.getElementById("gender").innerHTML = "M";
	}
	else{
		var gendr = "FEMALE";
		document.getElementById("gender").innerHTML = "F";
	}
alert("Your profile gender is set to " + gendr);

var desc = prompt("Please type a brief description of yourself", desc);
document.getElementById("desc").innerHTML = desc;

var byear = prompt("Please enter your Birth Year:", byear);
document.getElementById("year").innerHTML = byear;

var age = 2023 - byear;
document.getElementById("age").innerHTML = age;

var pf = confirm("Do you want to use a custom profile picture?")
	if (pf == true){
		var pfp = prompt("Please enter the file name of the picture (ex: wow.jpg):", pfp);
		document.getElementById("ppic").src=pfp;
	}
	else{
		document.getElementById("ppic").src=prog.png;
	}


/*lastname_mod8act*/