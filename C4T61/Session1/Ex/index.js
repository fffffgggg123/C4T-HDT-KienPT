let btnCheck=document.getElementById("btn_check");
btnCheck.addEventListener("click",function(){
    let temperatureInput=document.getElementById("temperature");
    let temperature = Number(temperatureInput.value);
   if(temperature < 15) {
       console.log("So cold");
   }else if (temperature <25) {
       console.log("Cool");
   }else {
       console.log("So hot");
   }
});

