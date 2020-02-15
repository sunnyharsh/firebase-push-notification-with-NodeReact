var admin = require("firebase-admin");
var serviceAccount = require("../reactnotification-6c386-firebase-adminsdk-63b2g-8298696c40.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactnotification-6c386.firebaseio.com"
});
var registrationToken =
  "d_kQ5mXNuoeBY_cNBy6ySr:APA91bHI5VLl2__EGDPq8staVwEIeYqD9AEoSO3qjJNlCtyZw15-BbbZ52QWXobqoF4qUDaZYpvXmWHNMs9RmS4EvGMqpFEU7N7G1o_shKWAbWCIxwb8S5VD2WHY-z_6vfY6elQdq5Ln";
exports.notificationController = (req, res, next) => {
  var payload = {
    data: {
      myKey1: "notification come from backend"
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
      res.json({ msg: "succefull" });
    })
    .catch(err => {
      console.log(err);
    });
};
