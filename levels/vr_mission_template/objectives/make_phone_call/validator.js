
   
const { NiceError, handleError } = require('../../validation');

module.exports = async function(helper) {
  const phoneNumber = helper.env['TQ_TWILIO_NUMBER'];
  const phoneNumberLink = `<a href="https://www.twilio.com/console/phone-numbers/${
    helper.env['TQ_TWILIO_NUMBER_SID']
  }">${phoneNumber}</a>`;

  try 
    const number = await helper.findPhoneNumber(phoneNumber);
    if (!number.voiceUrl) {
      throw `
        Looks like you still need to set the incoming field values on 
        your phone number: ${phoneNumberLink}.
      `;
    }

    // Request traversable TwiML from configured webhook URL - can throw for
    // a variety of error conditions (handled below in catch)
    const $ = await helper.fakeCall(
      number.voiceUrl,
      number.phoneNumber,
      helper.fakeNumber
    );

    // Ensure the <Say> tag is present
    if ($('Response > Say').length < 1) {
      throw `Whoops! you need to use the &lt;Say&gt; tag in your TwiML wired up to ${phoneNumberLink}.`;
    }

    helper.success('You are amazing!');
  } catch (e) {
    handleError(e, helper, `
      Sorry - we couldn't validate your TwiML URL - double check your
      configuration for ${phoneNumberLink}.
    `);
  }
};