function validation(){
         var nametext=document.conform.name.value;
		 var e=document.conform.mail.value;
		 var n=document.conform.num.value;
         var psw=document.conform.pass1.value;
         var npsw=document.conform.pass2.value;
        
              if(nametext=="" || nametext==null){
                              window. alert("Name can't be blank");
	                          nametext.focus();
		                      return false;
                     }
			 if(n==""){
                            window.alert("Please enter the mobile number");
		                    n.focus();
		                    return false;
                     }
            
            if(psw==""){
                            window.alert("Password can't be blank");
		                    psw.focus();
		                    return false;
                        }
			if(psw>6){
                            window.alert("Password length should be 6");
		                    psw.focus();
		                    return false;
                        }
			if(npsw!=psw){
                            window.alert("Enter the correct password");
		                    npsw.focus();
		                    return false;
                        }	
};
