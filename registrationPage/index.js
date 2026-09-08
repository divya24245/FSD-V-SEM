const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const div = document.getElementById("students");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // const val = email.innerText;//value
    // console.log(val);
    console.log(email.value);
    console.log(name.value);
    console.log(password.value);
    console.log(btn.value);

    const div = document.createElement("div");
    innerdiv.innerText = `${email.value} ${name.value} ${password.value}`;
    div.appendChild(innerdiv);
})