/***************************************************************
    This mission uses the Javascript programming language.

    Run this program by clicking the Play button.
***************************************************************/
require("/Users/anthonyjdella/Desktop/Twilio-Quest/Extensions/twilioQuestBoothExecution/node_modules/module-alias/register");

const twilio = require("@twilio");
const client = twilio(
    process.env.TQ_TWILIO_ACCOUNT_SID,
    process.env.TQ_TWILIO_AUTH_TOKEN
);

client.calls
    .create({
        from: process.env.TQ_TWILIO_NUMBER,
        to: "",   // TODO: Enter the number you want to call
        twiml: "" // TODO: Enter some TwiML to say something
    })
    .then((call) => {
        console.log(`SID: ${call.sid}`);
    })
    .catch((error) => {
        console.error(error);
    });

/***************************************************************
    PRIVACY NOTICE: WE WILL NEVER USE YOUR NUMBER FOR ANYTHING ELSE.
    WE WILL DELETE IT FROM OUR LOGS IN 30 MINUTES
***************************************************************/
