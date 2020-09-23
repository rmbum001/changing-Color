const colors =["#40E0D0", "crimson", "RGB(103,58,183)", "#FFDA00","RGB(172,3,174)","#a57a49","#ac03ae","#e49b0f","#dc78aa","#484030","yellow","gray","white","#4285f4"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    // get random color from 0 -3 colors
   const randomNumber = getRandomNum();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}