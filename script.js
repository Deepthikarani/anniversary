let title= document.getElementById("title");

title.onclick = function(){
    title.textContent = "Happy Anniversary ";
}
let card = document.getElementById("card");

card.onmouseover = function(){
    card.style.backgroundColor  = "pink";
}

let page = document.getElementById("page");
card.onclick = function()
{
    card.style.display = "none";
   page.style.display = " block";
   page.style.transform  = "rotateZ(15deg)";
}
