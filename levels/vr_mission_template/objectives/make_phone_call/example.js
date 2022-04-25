const twilio = require('twilio')
const client = twilio(process.env.TQ_TWILIO_ACCOUNT_SID,process.env.TQ_TWILIO_AUTH_TOKEN);


client.calls.create({
  from: process.env.TQ_TWILIO_NUMBER,
  to:  //I wonder what would go here hmmmmm......
  twiml: 


  // What is TWIML??? It's XML that tells Twilio what to do when the call is answerd
  // You will need a <Response> and a <Say> Tag

}).then(message => {
  console.log('Woohoo! Copy this message SID into the hacking UI:');
  console.log(`${message.sid}`);
}).catch(error => {
  console.error('Looks like the Twilio API returned an error:');
  console.error(error);
});