module.exports = async helper => {
  const { callSid } = helper.validationFields;

  try {
    const client = helper.getTwilioClient();
    if (!callSid) {
      throw `A call SID is required for validation - 
        you get one of these back from an API request that creates a new Phone Call.`;
    }

    const call = await client.calls(callSid).fetch();

    helper.success(`Woohoo! You made a Call!!`);
  } catch (e) {
    helper.fail(e, {
      20404: `Sorry! We couldn't find a call with that SID when we looked in your Twilio account. 
            Ensure that your call SID is correct and try again.`,
    });
  }
};