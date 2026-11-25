
console.log("javascript connected succesfullyc");
const password=document.getElementById("password");


password.addEventListener("input",analyzePassword);

function analyzePassword(){
    let pass=password.value;
    let score=0;
    let suggestions=[];


    if(pass.length>=12){
        score++;
    }else{
        suggestions.push("Use at least 12 characters");
    }

    if(/[A-Z]/.test(pass)){
        score++;
    }else{
        suggestions.push("Add uppercase letters");
    }
    if(/[a-z]/.test(pass)){
        score++;
    }else{
        suggestions.push("Add lowercase letters.");
    }
    if(/[0-9]/.test(pass)){
        score++;
    }else{
        suggestions.push("Add numbers.");
    }
    if(/[^A-Za-z0-9]/.test(pass)){
        score++;
    }else{
        suggestions.push("Add special characters.");
    }
    let strength="Weak";
    let width="20%";
    let color="red";
    if(score==5){
        strength="Strong";
        width="100%";
        color="green";
    }else if(score>=3){
        strength="Medium";
        width="60%";
        color="orange";
    }
    else {
        strength="Weak";
        width="20%";
        color="red";
    }

    document.getElementById("strength").innerText="Password Strength:"+strength;
    let bar=document.getElementById("bar");
    bar.style.width=pass.length===0?"0%": width;
    bar.style.background=color;

    document.getElementById("recommendations").innerHTML=suggestions.map(item=> `<li>${item}</li>`).join("");
}
function togglePassword(){
    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}