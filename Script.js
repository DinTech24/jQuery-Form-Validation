$("button").click(function(){
	 var fullname=$("#name").val();
	 var email=$("#email").val();
	 var phonenumber=$("#phone").val();
	 var male  = $("#male:checked").length;
	 var female  = $("#female:checked").length;
	 var dob=$("#dob").val();
	 var email=$("#email").val();
	 var age=$("#age").val();
	 var password1=$("#password1").val();
	 var password2=$("#password2").val();
	 $(".error").remove();
	if(fullname==""){
		$("#namewarning").after("<span class='error text-danger fw-bold text-danger fw-bold'>Should enter name</span>");
	}
       for(i=0;i<fullname.length;i++){
		var type=fullname.charAt(i);
		if((/[a-zA-Z]/).test(type)==false){
			$("#namewarning").after("<span class='error text-danger fw-bold text-danger fw-bold'>Should only contain characters</span>");
			break;
		}
	}
       
	
	var phonestring = phonenumber.toString();
	if(phonestring==""){
		$("#phonewarning").after("<span class='error text-danger fw-bold text-danger fw-bold'>Should enter Phone Number</span>")
	}
	else{
		if(isNaN(phonenumber)==true){
			$("#phonewarning").after("<span class='error text-danger fw-bold text-danger fw-bold'>Should only contain digits</span>")
		}
		else if(phonestring.length!=10){
			$("#phonewarning").after("<span class='error text-danger fw-bold'>Should have 10 digits</span>")
		}  
	}


	if(email==""){
		$("#emailwarning").after("<span class='error text-danger fw-bold'>Should enter Email-id</span>")
	}
	else{
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const isValid = emailPattern.test(email);
		if(isValid == false){
			$("#emailwarning").after("<span class='error text-danger fw-bold'>Should follow email pattern</span>")		
		}
	}

        

        let pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	if(dob==""){
		$("#dobwarning").after("<span class='error text-danger fw-bold'>Should enter Date of birth</span>")
	}
        
	else{
		 if(pattern.test(dob)==false){
			$("#dobwarning").after("<span class='error text-danger fw-bold'>Should follow DOB pattern</span>")
		  }
	}
 
	if ( male == 0 && female == 0 ){
		$("#genderwarning").after("<span class='error text-danger fw-bold'>Should Select Gender</span>")
	}


	var agestring = age.toString();
	if(agestring==""){
		$("#agewarning").after("<span class='error text-danger fw-bold'>Should enter Age</span>")
	}
	else{
		if(isNaN(age)){
			$("#ageewarning").after("<span class='error text-danger fw-bold text-danger'>Should only contain digits</span>")
		}
		else if(age<=0){
			$("#agewarning").after("<span class='error text-danger fw-bold'>Should be greater than 0</span>")
		}
	}




	if(password1==""){
		$("#pass1warning").after("<span class='error text-danger fw-bold'>Should enter password</span>")
	}


	if(password2==""){
		$("#pass2warning").after("<span class='error text-danger fw-bold'>Should Re-enter password</span>")
	}

	if(password1 != password2){
		$("#pass2warning").after("<span class='error text-danger fw-bold'>Password Miss Match</span>")
	}

});  