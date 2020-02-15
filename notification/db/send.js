var admin = require("firebase-admin");

var serviceAccount = require("./reactnotification-6c386-firebase-adminsdk-63b2g-8298696c40.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactnotification-6c386.firebaseio.com"
});

var registrationToken =
  "cYRaDLNRzzGhIlDcnBP88I:APA91bGv2MzXMK3g1RQHpbYQCXGjqxKOstyE5FTuJEcU2k_ngftUDetJkTLsIuQHh1F6UgBCKQjj8LaR1o2hBGZftTJlAa7WVAtcB06DAboVvK01MkPD307WijXNOsyT-Qn_8UQOEMSM";

var payload = {
  data: {
    myKey1: "hello"
  }
};
var option = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};

admin
  .messaging()
  .sendToDevice(registrationToken, payload, option)
  .then(response => {
    console.log("successfuly msg sent", response);
  })
  .catch(err => {
    console.log(err);
  });
