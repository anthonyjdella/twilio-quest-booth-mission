module.exports = async helper => {
    try {
      const client = helper.getTwilioClient();
      const messages = await client.messages.list({ limit: 100 });
      const found = messages.find(
        msg =>
          msg.direction === 'outbound-reply' &&
          msg.body.toLowerCase().includes('twilioquest rules')
      );
      if (!found) {
        throw `We couldn't find a reply message in your last 100 messages that contained the text "TwilioQuest rules" 
                - did you send this message as a REPLY from TwiML?`;
      }
  
      helper.success(
        `Boom! You did it! You sent a reply message containing the text "${
          found.body
        }"`
      );
    } catch (e) {
      helper.fail(e);
    }
  };