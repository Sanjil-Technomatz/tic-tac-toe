function saveData()
{
    let name,email,pass;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",pass);
     
}
    
    
