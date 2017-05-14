
function validateForm()
{
    var status = true;
    var x=document.forms["myform"]["name"].value;
    var value = /^[a-zA-Z ]*$/;
        if(x==null || x=="" )
    {
        alert("name can't be left blank");
        return status = false;
    }
    if(!value.test(x))
    {
        alert("Name is invalid");
        return status = false;
    } 
   
    
    var email = document.forms["myform"]["email"].value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email==null || email=="")
    {
        alert("email is mandatory");
        return status = false;
    }

     if(!filter.test(email))
    {
    	alert('Please enter a valid email address');
       	return status = false;
    }
    	
    

    var z = document.forms["myform"]["experience"].value;
    if(z==null || z=="")
    {
        alert("experience is mandatory");
        return status = false;
    }
    else
    {
        window.alert("Successfully Applied");
        return status = true;
    }    
     
}