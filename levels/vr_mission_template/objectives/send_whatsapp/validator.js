module.exports = async helper => {
  const { messageSid } = helper.validationFields;

  try {
    const client = helper.getTwilioClient();
    const messages = await client.messages.list({ limit: 100 });
    const message = messages.find(
      msg => msg.direction === 'outbound-api' && msg.from.includes('whatsapp:') && msg.sid === messageSid
    );


    helper.success(`Woohoo! You sent this message: "${message.body}"`);
  } catch (e) {
    helper.fail(e, {
      20404: `Sorry! We couldn't find a message with that SID when we looked in your Twilio account. 
            Ensure that your message SID is correct and try again.`,
    });
  }
};