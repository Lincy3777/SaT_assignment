function formValidation(){
    var uname = document.getElementById("uname");
    var num = document.getElementById('number');
    var uage = document.getElementById('age');
    var uadd = document.getElementById('address');

    if(allAlpha(uname)){
        if(user_num(num,10,13)){
            if(user_age(uage,1,3)){
                if(alphanumeric(uadd)){
                    alert("Validated");
                }
            }
        }
    }
    return false;
}
//Validating the name field
function allAlpha(uname){
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters)){
        return true;
    }
    else{
        alert('Username must have alphabet characters only');
        document.getElementById("erroruname").innerHTML = "This is an invalid user name";
        uname.focus();//focusing on input field name
        return false;
    }
}
//Validating the number field
function user_num(num,m_min,m_max){
    var num_length = num.value.length;
    if(num_length == 0 || num_length >= m_max || num_length < m_min){
        alert("Mobile Number should not be empty and length should be between "+m_min +" to "+ m_max);
        document.getElementById("errornumber").innerHTML = "This is an invalid number";
        num.focus();//focusing on input field number
        return false;
    }
    return true;
}
//Validating the age field
function user_age(uage,m_min,m_max){
    var uage_length = uage.value.length;
    if(uage_length == 0 || uage_length >= m_max || uage_length < m_min){
        alert("Please enter your age");
        document.getElementById("errorage").innerHTML = "Enter a correct value";
        uage.focus();//focusing on input field age
        return false;
    }
    return true;
}
//Validating the address field
function alphanumeric(uadd){
    var letters = /^[a-zA-Z0-9\s\.,-]+$/;
    if(uadd.value.match(letters)){
        return true;
    }
    else{
        alert("User address must have alph-numeric characters only");
        document.getElementById("erroraddress").innerHTML = "This is an invalid address ";
        uadd.focus();//focusing on input field address
        return false;
    }
}

