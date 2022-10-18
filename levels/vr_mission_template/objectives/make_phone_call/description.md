# Call: Call me when you want!

<div class="aside">
  <h3>To-Do List</h3>
  <ul>
    <li>Show Code Editor</li>
    <li>Enter the 2 missing parameters</li>
    <li>Enter the SID in the field on the right, then click <em>HACK</em>.</li>
  </ul>
</div>

To complete this challenge, you will need to <strong>make a phone call using the Twilio Voice API</strong>.

Using the **Code Editor**, you will need to **fill in the 2 required missing parameters**. Find the required parameters in the [docs](https://www.twilio.com/docs/voice/api/call-resource).

TwiML is TwiML is Twilio's markup language (like XML). Here's an example of how you can use TwiML to say something: `<Response><Say>Ahoy, hello world!</Say></Response>`

When a new Call is created via the API, it is assigned a unique identifier - a **SID**. This SID will be [included in the data sent back from a successful API request](https://www.twilio.com/docs/voice/api/call-resource#call-properties).

Retrieve a call SID after a successful API request and enter it into the text field on the right. When you hit *HACK*, we'll validate that this call SID exists in your Twilio account, and you will be victorious!