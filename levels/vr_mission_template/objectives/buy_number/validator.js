
module.exports = async function (helper) {
  const phoneNumber = helper.getNormalizedInput("twilioNumber");
  console.log(phoneNumber)

  if (!phoneNumber) {
    return helper.fail(`Please provide a phone number in your account.`);
  }

  let c;

  try {
    c = helper.getTwilioClient();
  } catch (e) {
    return helper.fail(e.message);
  }

  function respondWithError() {
    helper.fail(`
      We couldn't find your phone number - please try again, and make sure 
      your phone number and Twilio credentials are correct.
    `);
  }

  let found = false;

  // Validate that the configured phone number exists
  try {
    c.incomingPhoneNumbers.list({ phoneNumber }, (err, response) => {
      if (err || !response[0] || !response[0].phoneNumber === phoneNumber) {
        return respondWithError();
      } else {
        found = true;
        return helper.success(
          `
            Awesome! We found this Twilio phone number in your account. 
            We'll remember this number and use it in future challenges.
          `,
          [
            { name: 'TWILIO_NUMBER', value: response[0].phoneNumber },
            { name: 'TWILIO_NUMBER_SID', value: response[0].sid },
          ]
        );
      }
    });
  } catch (e) {
    console.log(e);
  }

  // Return after a few seconds if the number isn't found
  setTimeout(() => {
    if (!found) {
      respondWithError();
    }
  }, 5000);
};