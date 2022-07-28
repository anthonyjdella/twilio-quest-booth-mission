const twilio = require("twilio")
const client = twilio(process.env.TQ_TWILIO_ACCOUNT_SID,process.env.TQ_TWILIO_AUTH_TOKEN);


client.messages.create({
  from: process.env.TQ_WHATSAPP_NUMBER,
  to: "whatsapp: " // TODO: which value do you need to add here?

  // TODO: This code needs one more parameter to work...
  // I wonder what those parameters are? Better check the docs:
  // https://www.twilio.com/docs/sms/api/message-resource

}).then(message => {
  console.log("Woohoo! Copy this message SID into the hacking UI:");
  console.log(`${message.sid}`);
}).catch(error => {
  console.error("Looks like the Twilio API returned an error:");
  console.error(error);
});