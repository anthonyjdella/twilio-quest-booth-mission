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
        // TODO: first missing parameter,
        // TODO: second missing parameter
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
