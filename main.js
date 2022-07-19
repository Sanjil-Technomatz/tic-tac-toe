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
    
    let email,pass;
    email=document.getElementById("email").value;
 
    pass=document.getElementById("pass").value;
 
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    if(user_records.some((v)=>{return v.email==email && v.pass==pass}))
    {
        let current_user=user_records.filter((v)=>{return v.email==email && v.pass==pass})[0]

        localStorage.setItem('user_1',current_user.name);
        alert('Login success as ' + current_user.email +" Email Id");  
        event.preventDefault();
        window.location.href="login2.html";
    }
    else
    {
        alert('Login Fail - Wrong email or password');
    }
 }
 function login2()
 {
    
    let email,pass;
    email=document.getElementById("email").value;
 
    pass=document.getElementById("pass").value;
 
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    if(user_records.some((v)=>{return v.email==email && v.pass==pass}))
    {
        let current_user=user_records.filter((v)=>{return v.email==email && v.pass==pass})[0]

        localStorage.setItem('user_2',current_user.name);
        alert('Login success as ' + current_user.email +" Email Id");  
        event.preventDefault();
        window.location.href="dashboard.html";
    }
    else
    {
        alert('Login Fail - Wrong email or password');
    }
 }