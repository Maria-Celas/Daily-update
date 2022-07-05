$(document).ready(function() { 
    $( "#submitform" ).on( "click", function() {
         
 var username = $('#username').val();
 $('.errorMsg').hide();

 if(checkUsername(username) == false){    
    $('#errorusername').show();
 }else{
        alert("successful")
       }

    });
});

//function used to validate username
function checkUsername(username){
    //regular expression for username
       var pattern = /^[a-z0-9_-]{5,15}$/;
       if(pattern.test(username)){
           return true;
       }else{
           return false;
       }
   }
   