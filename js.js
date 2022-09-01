const navig=document.querySelector('nav');

window.addEventListener('scroll',(e)=>{
    console.log(e);

if(window.scrollY>5)
{
    navig.classList.add('animNAv');
}else{
    navig.classList.remove('animNAv');
}

})
window.onload=function(){
    var imgs=["url('images/camp1.jpg')" , "url('images/camp2.jpg')","url('images/camp3.jpg')","url('images/camp4.jpg')","url('images/camp5.jpg')"];
    const header=document.getElementById('header-wrapper');
    i=0;
    function hop(){
        header.style.backgroundImage=imgs[(i++)%imgs.length] ;
} cool=setInterval(hop,2000);
}
/***********************************************************************************************************************************/
function myFunction() {
    var doc1 = document.getElementById("doc1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("btn1");
    
    var doc2 = document.getElementById("doc2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("btn2");
    
    var doc3 = document.getElementById("doc3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("btn3");

    if (doc1.style.display === "none") {
      doc1.style.display = "inline";
      btnText1.innerHTML = "Lire plus"; 
      moreText1.style.display = "none";
    } else {
      doc1.style.display = "none";
      btnText1.innerHTML = "Lire moins"; 
      moreText1.style.display = "inline";
    }}

function myyFunction() {
    var doc2 = document.getElementById("doc2");
     var moreText2 = document.getElementById("more2");
     var btnText2 = document.getElementById("btn2");
         
     if (doc2.style.display === "none") {
       doc2.style.display = "inline";
       btnText2.innerHTML = "Lire plus"; 
       moreText2.style.display = "none";
     } else {
       doc2.style.display = "none";
       btnText2.innerHTML = "Lire moins"; 
       moreText2.style.display = "inline";
    }}
      
function myyyFunction() {
     var doc3 = document.getElementById("doc3");
     var moreText3 = document.getElementById("more3");
     var btnText3 = document.getElementById("btn3");
         
     if (doc3.style.display === "none") {
       doc3.style.display = "inline";
       btnText3.innerHTML = "Lire plus"; 
       moreText3.style.display = "none";
     } else {
       doc3.style.display = "none";
       btnText3.innerHTML = "Lire moins"; 
       moreText3.style.display = "inline";
     }}  

function myyyyFunction() {
   var doc4 = document.getElementById("doc4");
   var moreText4 = document.getElementById("more4");
   var btnText4 = document.getElementById("btn4");
       
   if (doc4.style.display === "none") {
     doc4.style.display = "inline";
     btnText4.innerHTML = "Lire plus"; 
     moreText4.style.display = "none";
   } else {
     doc4.style.display = "none";
     btnText4.innerHTML = "Lire moins"; 
     moreText4.style.display = "inline";
   }}  