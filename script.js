//Service Worker:
//Offline first / cache first

// var content = "";
// document.getElementById("content").innerHTML = content;

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/testPWA/sw.js");
// }

navigator.serviceWorker.register(
  '/service-worker.js', {
    scope: '/'
  }
);