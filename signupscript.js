// form=document.getElementById("form")
let form = document.forms[0];
console.log(form)
form.addEventListener('submit',function(e){
  e.preventDefault()
  let email=form["email"].value; 
  let pass=form["password"].value; 
  console.log(email)
  console.log(pass)
  data = { username: email,password:"pass" };
  postform(data);
});


 

async function postform(data) {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (!response.ok) {
        alert("USER NOT FOUND")
      }
      else{
        alert("USER FOUND")
      }
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  //for checking rugex on password
  passreg=/^.{8,}$/
  form.addEventListener('submit',function(e){
  e.preventDefault()
  let password=form["password"].value;
  if(passreg.test(password))
  {}
  else{
    alert("invalid password format")
  }
  
})


  
 