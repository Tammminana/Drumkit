// alert("You're Unauthorized")

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    // document.querySelectorAll("button")[i].addEventListener("click",gotClicked);

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

      // this.style.color = "powderblue";

      var exp = this.innerHTML;

      makeSound(exp);
      glow(exp);
      glowName(exp);
    });

    document.addEventListener("keydown", function (eventRecorded) {

        var key = eventRecorded.key;
        // console.log(eventRecorded);
        // console.log(key);

        makeSound(key);
        glow(key);
        glowName(key);
    });

}


//Using Anonymous function
/*
document.querySelector("button").addEventListener("click", function () {
        alert("You clicked.")
});
*/

function makeSound(sound){
  switch (sound) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play()
    break;
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;
    case "j":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;
    case "k":
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
    break;
    case "l":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    break;

    default:console.log(sound);
  }
}

function glow(buton){
    var pressedButton = document.querySelector("."+buton);
    pressedButton.classList.add("pressed");

    setTimeout(function (){
        pressedButton.classList.remove("pressed");
    },700);
}

function glowName(val){
  $("."+val).addClass("black");

  setTimeout(function () {
        $("."+val).removeClass("black");
  },1000);
}

// function gotClicked(){
//   alert("You're clicking");
// }
