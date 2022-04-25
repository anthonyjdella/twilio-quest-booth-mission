const twilio = require('twilio')
const client = twilio(process.env.TQ_TWILIO_ACCOUNT_SID,process.env.TQ_TWILIO_AUTH_TOKEN);


client.calls.create({
  from: process.env.TQ_TWILIO_NUMBER,
  to:  //I wonder what would go here hmmmmm......
  
  url: 'https://handler.twilio.com/twiml/EH4e0d53cb8817cd80014c4156b07783c3' 
  //The URL above points to a TWIML BIN

  // What is TWIML??? It's XML that tells Twilio what to do when the call is answerd
  // You will need a <Response> and a <Say> Tag

}).then(message => {
  console.log('Woohoo! Copy this message SID into the hacking UI:');
  console.log(`${message.sid}`);
}).catch(error => {
  console.error('Looks like the Twilio API returned an error:');
  console.error(error);
});