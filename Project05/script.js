// let randomColor = Math.floor(Math.random() * 16);

const colorChanger = function bgColorChanger() {
    const hexa = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6 ; i++){
        color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(colorChanger());

let intervalID;

document.querySelector("#start").addEventListener('click', () => {

   if(!intervalID){
    intervalID =  setInterval(changeBgColor, 1000);
   }

   function changeBgColor() {
    document.body.style.backgroundColor = colorChanger();
   }
})

document.querySelector("#stop").addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null;
})