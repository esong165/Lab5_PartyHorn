function setTextVolume(){
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    setVol();
}

function setSliderVolume(){
    if(document.getElementById("volume-number").value > 100){
        document.getElementById("volume-number").value = 100;
    }
    else if(document.getElementById("volume-number").value < 0){
        document.getElementById("volume-number").value = 0;
    }
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    setVol();
}

function handleBounds(){

}

function setVol(){
    let vol = document.getElementById("volume-number").value;
    let volIcon = document.getElementById("volume-image");
    if(vol == 0){
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if(vol <= 33){
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(vol <= 66){
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else{
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
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

function playHorn(event){
    event.preventDefault();
    let audio = document.createElement("audio");
    audio.id = "horn";
    let source = document.createElement("source");
    source.src = document.getElementById("horn-sound").src;
    source.type = "audio/mpeg";
    audio.volume = document.getElementById("volume-number").value / 100;
    audio.appendChild(source);
    document.getElementsByTagName("main")[0].appendChild(audio);
    audio.play();
}

let volumeNum = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider");
volumeNum.addEventListener("input", setSliderVolume);
//volumeNum.addEventListener("change", setSliderVolume);
volumeSlider.addEventListener("input", setTextVolume);

let horn = document.getElementById("audio-selection");
horn.addEventListener("input", setHorn);

let form = document.getElementById("party-horn-form");
form.addEventListener("submit", playHorn);