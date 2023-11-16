const button = document.querySelector("button");
const body = document.body;
const valueOfColor = document.querySelector(".valueOfColor")
function changeColor(){
      const red = Math.floor(Math.random()*256);
      const green = Math.floor(Math.random()*256);
      const blue = Math.floor(Math.random()*256);

      const colorMixer = `rgb(${red},${green},${blue})`;

      return colorMixer
}

button.addEventListener("click",()=>{
  
    body.style.backgroundColor = changeColor();
    valueOfColor.textContent = changeColor()
})