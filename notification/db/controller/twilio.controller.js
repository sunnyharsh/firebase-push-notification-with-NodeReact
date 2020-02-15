const accountSid = "AC6b6eef403fa6c28a99aabbdcc6224984";
const authToken = "9cd13ff18441769b74f5eac38b1fd439";
const client = require("twilio")(accountSid, authToken);

exports.smsController = (req, res, next) => {
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: "7017397802",
      to: "7017397802"
    })
    // .then(message => console.log(message.sid));
    .then(res => {
      res.json({ success: true });
    })
    .catch(error => {
      res.json({ success: false });
    });
};
