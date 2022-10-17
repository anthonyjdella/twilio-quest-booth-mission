/***************************************************************
    This mission uses the Javascript programming language.

    Run this program by clicking the Play button.
***************************************************************/

const twilio = require("twilio");
const client = twilio(
    process.env.TQ_TWILIO_ACCOUNT_SID,
    process.env.TQ_TWILIO_AUTH_TOKEN
);

client.messages
    .create({
        from: process.env.TQ_TWILIO_NUMBER,
        to: "", // TODO: Enter your phone number
        body: "https://video-app-3949-6018-dev.twil.io/?passcode=40773439496018&user=TryingToWinSwag",
    })
    .then((message) => {
        console.log(`SID: ${message.sid}`);
    })
    .catch((error) => {
        console.error(error);
    });

/***************************************************************
    PRIVACY NOTICE: WE WILL NEVER USE YOUR NUMBER FOR ANYTHING ELSE.
    WE WILL DELETE IT FROM OUR LOGS IN 30 MINUTES
***************************************************************/
