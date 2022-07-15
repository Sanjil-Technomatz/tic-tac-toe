function saveData(){
    let name,mob,email,pass;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    let user= new Array();
    user =JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[] 
    if(user.some((v)=>{return v.email==email}))
    {
        
        alert("duplicate data");
    
    }
    else{
    user.push({
        "name":name,
        "email":email,
        "pass":pass
    })
    localStorage.setItem("user",JSON.stringify(user));
    }

 }

function login()
    {
    let email,psw;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;
    let user=new Array();
    user =JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[] 
    if(user.some((v)=>{return v.email==email && v.psw==psw}))
    {
        alert("Login Pass");
        let current_user=user.filter((v)=>{return v.email==email && v.psw==psw})[0]
        localStorage.setItem('name',current_user.name);
        localStorage.setItem('email',current_user.email);
        window.location.href="dashboard.html"
    }
    else
    {
        alert('Login Fail');
    }
}