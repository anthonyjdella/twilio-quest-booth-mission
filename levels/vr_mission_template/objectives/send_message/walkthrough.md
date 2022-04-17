# Sending an SMS Message

At this point, we assume you've completed your Basic Training and have configured both your Twilio account and Twilio phone number through that process. Now, the time has come to put all of those things to use by sending a text message. Twilio provides a [RESTful API](https://www.twilio.com/docs/sms/api) which enables you to programmatically send SMS messages (and do many other useful things).

To pass this barrier, you will need to use Twilio's API to send a text message and retrieve the unique ID for the message you sent.

## Remind me: what's an API again?

Twilio provides an API that allows you send send text messages programmatically, but what is an API? [API](https://www.twilio.com/docs/glossary/what-is-an-api) stands for "Application Programming Interface."

A simple analogy for an API is a waiter in a restaurant. The API is the waiter, the kitchen is the service (Twilio), and the customer is the client/consumer of the API (your code). In a restaurant, the customer orders a dish from the waiter, and the waiter takes that request to the kitchen to be fulfilled. The customer has no idea how the dish was prepared; all they want back is the food as they requested it. Similarly, your code will make a request through Twilio's API for some resource: in this case, creating an outbound text message on your behalf. Twilio has abstracted away all of the complexities of actually sending the message; all you have to do is tell the API that you want to send an SMS message.

You write code to interact with Twilio's API by making HTTP requests to certain endpoints to create, read, update, or delete message resources.

## What information do I need to send an SMS message?

When making an API request to Twilio, in addition to passing along our authentication credentials, we need to provide at least three parameters:

- **Body:** The actual text of the message we want to send.
- **To:** The phone number you want to send the message to. If you are using a trial account, this must be one of your [verified phone numbers](https://www.twilio.com/console/phone-numbers/verified).
- **From:** The Twilio programmable phone number the message will be sent from. You can use a phone number you configured previously (check the **Settings** UI), or [any SMS-capable Twilio phone number you own](https://www.twilio.com/console/phone-numbers/incoming).

## Making the API request

You can make a request to [Twilio's REST API](https://www.twilio.com/docs/sms/api) from any programming environment or tool that supports making HTTP requests. Twilio provides a variety of server-side [helper libraries](https://www.twilio.com/docs/libraries) for many common programming languages that make this process easier.

To send an SMS message, you will interact with the [Message resource](https://www.twilio.com/docs/sms/api/message-resource). Sending an HTTP POST request to this API endpoint will result in creating (and sending) a new message.

The following [cURL](https://curl.haxx.se/docs/manual.html) command would (when configured with the necessary parameters instead of placeholders) send a message from your account.

```
curl -X POST https://api.twilio.com/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages.json \
--data-urlencode "From=+15017122661" \
--data-urlencode "Body=Body" \
--data-urlencode "To=+15017122661" \
-u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token
```

The Twilio documentation contains [code samples for many programming languages](https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource), showing how you would send SMS messages using the Twilio helper library for that environment. Here is [an example using our Python helper library](https://www.twilio.com/docs/sms/api/message-resource?code-sample=code-create-a-message&code-language=Python&code-sdk-version=6.x):

```python
from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages.create(
    from_='+15017122661',
    body='body',
    to='+15558675310'
)

print(message.sid)
```

Compare the cURL and Python examples above. These samples look different because the syntax varies from language to language, but the core API concept is the same. In each, we are creating and sending a message by making a POST request to the Twilio API messaging endpoint with three parameters: a `from` number, a `to` number, and some `body` text.

If you use the QuestIDE, an editable [Node.js](https://nodejs.org/) code sample will be loaded up for you, pre-populated with most of the necessary parameters from your TwilioQuest configuration.

## Completing the challenge

When you make the API request, the message's SID will be one of the pieces of data returned by the request. Copy that value and paste it into the hacking interface on the right. When you click the *HACK* button, TwilioQuest will query your Twilio account and ensure that this message does indeed exist. If it does, you've won!