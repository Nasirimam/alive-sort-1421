
document.querySelector("#loginbutton").addEventListener("click",userlogin);

let SEmail;
let Spassword;

let flag=false
localStorage.setItem("flag",flag)

function userlogin(){
    let personArr=JSON.parse(localStorage.getItem("custumer"));

    let LEmail=document.querySelector("#EmailID").value 
    let Lpassword=document.querySelector("#pass").value 

    console.log(LEmail)
    if (SEmail==LEmail && Spassword==Lpassword){
        alert("Login Successful")
        flag=true
        localStorage.setItem("flag",flag)
    }else{
        alert("Incorrect Login or Password")
        flag=false
        localStorage.setItem("flag",flag)
    }

    personArr.forEach(function(elem){
        SEmail=elem.email
        Spassword=elem.pass
    });
    
}