const twilio = require("twilio")
const client = twilio(process.env.TQ_TWILIO_ACCOUNT_SID,process.env.TQ_TWILIO_AUTH_TOKEN);


client.calls.create({
  from: process.env.TQ_TWILIO_NUMBER,
  to: "", // TODO: Enter the number you want to call
  url: ""// TODO: We need a URL that points to some TwiML
  // What is TWIML??? It"s XML that tells Twilio what to do when the call is answerd
  // You will need a <Response> and a <Say> Tag as explained here: https://www.twilio.com/docs/voice/twiml/say

}).then(call => {
  console.log("Woohoo! Copy this call SID into the hacking UI:");
  console.log(`${call.sid}`);
}).catch(error => {
  console.error("Looks like the Twilio API returned an error:");
  console.error(error);
});