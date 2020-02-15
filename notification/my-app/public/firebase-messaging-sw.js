importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "42922771102"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const urlToOpen = new URL(examplePage, self.location.origin).href;
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(urlToOpen);
      }
    })
    .then(res => {
      console.log(payload, "payload");
      const notificationTitle = payload && payload.data.myKey1;
      const notificationOptions = {
        body: "Background Message body.",
        icon: "/logo192.png"
      };

      return self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
      // return registration.showNotification(payload && payload.data.myKey1);
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
  // do what you want
  // ...
  console.log("Message receive  . ", event);
});
