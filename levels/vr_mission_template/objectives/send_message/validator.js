module.exports = async helper => {
  const { messageSid } = helper.validationFields;

  try {
    const client = helper.getTwilioClient();
    if (!messageSid) {
      throw `A message SID is required for validation - 
        you get one of these back from an API request that creates a new SMS message.`;
    }

    const message = await client.messages(messageSid).fetch();
    if (message.body === 'I wanna dance with somebody!') {
      throw `Don't take our word for it! Change your message body value to your own words!`;
    }

    helper.success(`Woohoo! You sent this message: "${message.body}"`);
  } catch (e) {
    helper.fail(e, {
      20404: `Sorry! We couldn't find a message with that SID when we looked in your Twilio account. 
            Ensure that your message SID is correct and try again.`,
    });
  }
};