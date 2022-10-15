# SMS: Send Me Something!

<div class="aside">
  <h3>To-Do List</h3>
  <ul>
    <li>Show Code Editor</li>
    <li>Enter the 2 missing parameters</li>
    <li>Enter the SID in the field on the right, then click <em>HACK</em>.</li>
  </ul>
</div>

To complete this challenge, you will need to <strong>send a text message using the Twilio SMS API</strong>.

Using the **Code Editor**, you will need to **fill in the 2 required missing parameters**. Think about what kind of information you need to send a text message. Or find the required parameters in the [docs](https://www.twilio.com/docs/sms/api/message-resource).

TwiML is Twilio's markup language you can use to tell Twilio what to do when you receive an incoming call. If you want your TwiML to say something on a call it will be wrapped in tags like <Response><Say></Say></Response>.

When a new Message is created via the API, it is assigned a unique identifier - a SID. This SID will be [included in the data sent back from a successful API request](https://www.twilio.com/docs/sms/api/message-resource#message-properties).

Retrieve a message SID after a successful API request and enter it into the text field on the right. When you hit *HACK*, we'll validate that this message SID exists in your Twilio account, and you will be victorious!