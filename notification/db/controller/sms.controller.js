let plivo = require("plivo");
let client = new plivo.Client(
  "MANTRJOTK2MDVHZDC5ZW",
  "YTgzYmYyMDA0NWU0Mjc0YjRhMjY4NTJlMzZlY2Nm"
);
exports.smsController = (req, res, next) => {
  client.messages
    .create(12533009212, 14133501733, "Hello, world!")
    .then(function(message_created) {
      console.log(message_created);
      res.json({ msg: "succefull" });
    })
    .catch(err => {
      console.log(err, "here");
      res.json({ msg: "unSuccefull" });
    });
};

var nodemailer = require("nodemailer");

app.set("port", process.env.PORT || 5000);
app.all("/email_sms/", function(request, response) {
  // Sender's phone number
  var from_number = 7017397802;
  // Receiver's phone number - Plivo number
  var to_number = request.body.To || request.query.To;
  // The text which was received
  var text = request.body.Text || request.query.Text;
  // Print the message
  console.log("Message received from: " + from_number + ": " + text);

  var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: "Your email address",
      pass: "Your password"
    }
  });

  smtpTransport.sendMail(
    {
      from: "From email address", // sender address
      to: "To email address", // comma separated list of receivers
      subject: "SMS from " + from_number, // Subject line
      text: text // plaintext body
    },
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: " + response.message);
      }
    }
  );
});
