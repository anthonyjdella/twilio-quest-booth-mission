const twilio = require("twilio")
const client = twilio(process.env.TQ_TWILIO_ACCOUNT_SID,process.env.TQ_TWILIO_AUTH_TOKEN);


client.messages.create({
  from: process.env.TQ_TWILIO_NUMBER,

  // TODO: This code will need two more parameters to work...
  // I wonder what those parameters are? Better check the docs:
  // https://www.twilio.com/docs/sms/api/message-resource

  // PRIVACY NOTICE: WE WILL NEVER USE YOUR NUMBER FOR ANYTHING ELSE.
  // WE WILL DELETE IT FROM OUR LOGS IN 30 MINUTES

}).then(message => {
  console.log("Woohoo! Copy this message SID into the hacking UI:");
  console.log(`${message.sid}`);
}).catch(error => {
  console.error("Looks like the Twilio API returned an error:");
  console.error(error);
});