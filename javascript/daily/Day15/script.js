// query selector......

let dropdown=document.querySelector("#fruits");
let button=document.querySelector("#showbtn");
let output=document.querySelector("#output");

button.addEventListener('click',()=>{
    const selectedvalue=dropdown.value;
    output.textContent=`${selectedvalue}`
});