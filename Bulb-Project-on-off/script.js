// const signal = document.getElementById("signal");
// const bulb = document.getElementById("bulb");
// const button = document.getElementById("btn");

function changeIMG(){
   
    const signal = document.getElementById("signal");
     const bulbimgs = document.getElementById("bulbimg");
    const button = document.getElementById("btn");


    if(signal.innerText.match("OFF")){
      bulbimgs.src = "./on bulb.jpg";
      signal.classList.add("green"); 
      signal.classList.remove("red");
      signal.innerText = "ON";
      button.innerText = "Turn OFF Bulb";
      button.style.backgroundColor = "red";
    }else{
      bulbimgs.src = "./off bulb.jpg";
      signal.classList.add("red"); 
      signal.classList.remove("green");
      signal.innerText = "OFF";
      button.innerText = "Turn ON Bulb";
      button.style.backgroundColor = "green";
    }
}


// function dybtn(){
//    if( signal.innerText = "OFF"){

//     //  const signal = document.getElementById("signal");
//     //  const bulb = document.getElementById("bulb");
//     //  const button = document.getElementById("btn");
//     //   button.addEventListener( "click" , ()=> {
//     //   signal.classList.add("green");
//     //   signal.classList.remove("red");
//     //   signal.innerText = "ON";
//     //   bulb.src = "./on bulb.jpg";
//     //   button.innerText = "Turn OFF Bulb";
//     //   button.style.backgroundColor = "green";
       
//       // button.setAttribute("onclick", "offBulb()");
//     })
    
//    }else if(signal.innerText = "ON") {
//       // signal.classList.add("red");
//       // signal.classList.remove("green");
//       // signal.innerText = "OFF";
//       // bulb.src = "./off bulb.jpg";
//       // button.innerText = "Turn ON Bulb";
//       // button.style.backgroundColor = "red";
//    } 
// }



// button.addEventListener( "click" , ()=> {
//   signal.classList.add("green");
//   signal.classList.remove("red");
//   signal.innerText = "ON";
//   bulb.src = "./on bulb.jpg";
//   button.innerText = "Turn OFF Bulb";
//   button.style.backgroundColor = "green";
   
//   // button.setAttribute("onclick", "offBulb()");
// });


// function onBulb(){

// }

// function offBulb() {
//   signal.classList.add("red");
//   signal.classList.remove("green");
//   signal.innerText = "OFF";
//   bulb.src = "./off bulb.jpg";
//   button.innerText = "Turn ON Bulb";
//   button.style.backgroundColor = "red";
//   button.setAttribute("onclick", "onBulb()");
// }
