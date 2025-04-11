async function fetchData(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        const data=await response.json();
        displayAPi(data);
    }
    catch(error){
        console.log(error);
        document.getElementById("newdata").innerText="error in fethching";
    }
}
function displayAPi(users){
    const ele= document.getElementById("newdata");
    ele.innerHTML="";
     
    users.forEach((user) => {
        const usercontainer=document.createElement("div");

        usercontainer.innerHTML=`${user.name} and ${user.email} and ${user.username}`;
        ele.appendChild(usercontainer);
        
    });
}
fetchData();