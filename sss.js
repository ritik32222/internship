function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval=true;
    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","Required and alphabets only.");
        returnval = false;
    }

    var userid = document.forms['myForm']["formuserid"].value;
    if(userid.length<5){
        seterror("userid","Required and must be of length 5 to 12.");
        returnval = false;
    }
    if(userid.length>12){
        seterror("userid","Required and must be of length 5 to 12.");
        returnval = false;
    }

    var password = document.forms['myForm']["formpassword"].value;
    if(password.length<7){
        seterror("password","Required and must be of length 7 to 12.");
        returnval = false;
    }
    if(password.length>12){
        seterror("password","Required and must be of length 7 to 12.");
        returnval = false;
    }

    var address = document.forms['myForm']["formaddress"].value;
    if(address.length==0){
        seterror("address","Optional");
        returnval = true;
    }

    var about = document.forms['myForm']["formabout"].value;
    if(about.length==0){
        seterror("about","Optional");
        returnval = true;
    }

    var country = document.forms['myForm']["country"].value;
    if(country=="(Please choose a country)"){
        seterror("country","Required. Must select a country");
        returnval = false;
    }

    var zipcode = document.forms['myForm']["formzipcode"].value;
    if(!zipcode.match(/^\d+/)){
        seterror("zipcode","Required. Must be numeric only");
        returnval = false;
    }

    var email = document.forms['myForm']["formemail"].value;
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        seterror("email","Required. Must be a valid email.");
        returnval = false;
    }


    var sex = document.forms['myForm']["formsex"].value;
    if(sex==0){
        seterror("sex"," Required");
        returnval = false;
    }

    var language = document.forms['myForm']["formlanguage"].value;
    if(language==0){
        seterror("language"," Required");
        returnval = false;
    }
    return returnval;
}