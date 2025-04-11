function change()
{
    let elem=document.getElementsByTagName("h1");
    elem[0].innerHTML="HELLO";
    elem[1].innerHTML="HOW";
    elem[2].innerHTML="ARE YOU? ";
    elem[2].style.backgroundColor="lightpink";


    let ele1=document.getElementById("para");
    ele1.innerHTML="<h1>heyyyy.....</h1>"

    let ele2=document.getElementsByClassName("main");
    ele2[0].style.flexDirection="column";

    let ele4=document.getElementById("third");
    ele4.style.backgroundColor="green";

    let ele3=document.getElementById("second");

    ele3.style.backgroundColor="purple";


   

    
}