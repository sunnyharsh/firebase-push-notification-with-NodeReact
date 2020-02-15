const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

//firebase notification
const notificationCntrl = require("./controller/notification.controller");
app.get("/api", notificationCntrl.notificationController);

//pilvo sms
// const smsCntrl = require("./controller/sms.controller");
// app.get("/sendMsg", smsCntrl.smsController);

//twilio sms
const twilioCtrl = require("./controller/twilio.controller");
app.get("/twilioSms", twilioCtrl.smsController);

app.listen(1234, () => {
  console.log("server connect");
});
