function setTextVolume(){
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    setVol();
}

function setSliderVolume(){
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    setVol();
}

function setVol(){
    let vol = document.getElementById("volume-number").value;
    let volIcon = document.getElementById("volume-image");
    if(vol == 0){
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(vol <= 33){
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(vol <= 66){
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else{
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function setHorn(){
    let horn = document.querySelector("input[type=radio]:checked");
    let hornIcon = document.getElementById("sound-image");
    let hornSound = document.getElementById("horn-sound");
    if(horn.id == "radio-air-horn"){
        hornIcon.src = "./assets/media/images/air-horn.svg";
        hornSound.src = "./assets/media/audio/air-horn.mp3";
    }
    else if(horn.id == "radio-car-horn"){
        hornIcon.src = "./assets/media/images/car.svg";
        hornSound.src = "./assets/media/audio/car-horn.mp3";
    }
    else {
        hornIcon.src = "./assets/media/images/party-horn.svg";
        hornSound.src = "./assets/media/audio/party-horn.mp3";
    }
}

let audio = document.createElement("audio");
audio.id = "horn";
let source = document.createElement("source");
source.src = "./assets/media/audio/air-horn.mp3";
source.type = "audio/mpeg";
audio.appendChild(source);
document.getElementsByTagName("main")[0].appendChild(audio);

function playHorn(){
    var x = document.getElementById("horn-sound");
    var y = document.getElementById("volume-number").value;
    audio.volume = y/100;
    //document.getElementById("horn-sound").play();
    audio.play();
}

let volumeNum = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider");
volumeNum.addEventListener("input", setSliderVolume);
volumeSlider.addEventListener("input", setTextVolume);

let horn = document.getElementById("audio-selection");
horn.addEventListener("input", setHorn);

let button = document.getElementById("party-horn-form");
button.addEventListener("submit", playHorn);

