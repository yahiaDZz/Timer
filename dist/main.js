let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let seconds = Math.floor(dateDiff / 1000);
  document.querySelector(".e").innerHTML = seconds % 10;
  document.querySelector(".d").innerHTML = Math.floor((seconds / 10) % 10);
  document.querySelector(".c").innerHTML = Math.floor((seconds / 100) % 10);
  document.querySelector(".b").innerHTML = Math.floor((seconds / 1000) % 10);
  document.querySelector(".a").innerHTML = Math.floor((seconds / 10000) % 10);
}, 1000);