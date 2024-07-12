let canvas = document.querySelector("#canvas");
let video = document.querySelector("#video");
let snap = document.getElementById("snap");
let deleter = document.getElementById("delete");
let action = document.querySelector(".action");

let context = canvas.getContext("2d");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
}

snap.addEventListener("click", () => {
  canvas.classList.remove("none");
  video.classList.add("none");
  snap.classList.add("none");
  action.classList.add("initial");
  context.drawImage(video, 0, 0, 640, 480);
});

deleter.addEventListener("click", () => {
  canvas.classList.add("none");
  video.classList.remove("none");
  snap.classList.remove("none");
  action.classList.remove("initial");
  //   context.drawImage(video, 0, 0, 640, 480);
});

navigator.mediaDevices.enumerateDevices().then((devices) => {
  console.log(devices);
});
