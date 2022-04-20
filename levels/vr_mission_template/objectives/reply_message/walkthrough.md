# How Twilio uses Webhooks

Twilio uses a callback mechanism called [webhooks](https://www.twilio.com/docs/glossary/what-is-a-webhook) to tell your application that one of your numbers has received an incoming SMS message. Twilio will send an HTTP POST or GET request to a URL you specify with either a POST body or query parameters that contain [information about the incoming text](https://www.twilio.com/docs/sms/twiml#twilios-request-to-your-application), like what number it came from, and the contents of the message.

Does this sound familiar? That's because you've been working with webhooks all along to handle incoming SMS messages! When you selected a TwiML Bin or Twilio Function under **A MESSAGE COMES IN**, you were configuring Twilio to send a request to a specific URL under the hood.

### Configure a webhook URL

The first step to receiving an incoming SMS is to configure a URL that Twilio will request when one of your phone numbers receives an incoming text. Find [your programmable phone numbers in the console](https://www.twilio.com/console/phone-numbers/incoming), and click on one of them to configure it.

<center>
  <img src="images/programmable_sms/active-numbers.png" />
</center>

On the phone number configuration page, scroll down to the configuration **Messaging** section. Look for the label **A MESSAGE COMES IN** next to two dropdown menus.

<center>
  <img src="images/console/sms_webhooks.png" />
</center>

Let's break down what you can do here by the numbers.

1. Select an option for handling incoming messages - for this exercise we want webhooks, but there are many other ways of handling incoming SMS that we will explore another time.

2. Again, select "Webhook" - but as we've seen, there are other ways of handling the HTTP request Twilio sends your app, such as TwiML Bins and Functions.

3. Here, configure the URL for your server-side application. This must be a public URL Twilio can send an HTTP request to. Not sure how to do this when your code is running on your laptop? Read on, we will help you out with this.

4. Configure an HTTP method Twilio will use when sending the request. It can be either GET or POST. GET requests will receive data about the incoming message as [query parameters](https://en.wikipedia.org/wiki/Query_string). POST requests will contain a [URL-encoded POST body](https://stackoverflow.com/questions/14551194/how-are-parameters-sent-in-an-http-post-request).

### Write server-side code to handle the Twilio webhook request

Next, let's look at how to write code that handles the incoming webhook request from Twilio. When someone texts your Twilio Phone Number, you have told Twilio to look for TwiML instructions at your webhook URL. (Previously, we've been telling Twilio to look for those instructions at a URL where we've configured a TwiML Bin or a Function.) This is where you can write your own web application to handle the requests and generate the TwiML of your dreams.

You can handle these requests from Twilio using any programming language or framework that can accept HTTP requests and render XML in response (so, like, all of them). Your web application should do a few things:

1. Handle the incoming request and route it appropriately to a function
2. Return TwiML (either "raw" TwiML or using a [server-side helper library](https://www.twilio.com/docs/libraries) to generate it with function calls)

If you choose to use the QuestIDE, you will be given example code that responds with TwiML in Node.js (using the [Express](https://expressjs.com/) web framework) that looks something like this:

```js
const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

// Set up our express web application
const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
// This is where the magic happens!
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );
  // Here, we're writing and returning raw TwiML
  response.type('text/xml');
  response.send(`
    <Response>
      <Message>I'm busy questing right now!</Message>
    </Response>
  `);
});

// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Express server listening on localhost:${PORT}`);
});
```

## Using a different language and framework

If you'd rather not use QuestIDE, we have tutorials that demonstrate how to handle incoming SMS in many popular programming languages. You can still complete this challenge, you'll just be using your own edtor/IDE outside of TwilioQuest!

- [C# / .NET](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-csharp)
- [Java](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-java)
- [Python](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-python)
- [PHP](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-php)
- [Ruby](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-ruby)
- [Node.js (Using your own Node, not QuestIDE)](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-node-js)

For example, here's what a small Python [Flask](http://flask.pocoo.org/) web application would look like to respond to an incoming message:

```
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

# Create a route to handle incoming SMS messages
# This is where the magic happens!
@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    print(f'Incoming message from {request.values.get("From")}: ${request.values.get("Body")}')

    # Here, we're generating TwiML using the Python helper library
    resp = MessagingResponse()
    resp.message("I'm busy questing right now!")

    return str(resp)

if __name__ == "__main__":
    app.run(port=8767)
```

### The app on my laptop doesn't have a URL! Do I have to deploy my code to the Internet just to test this?

Well, you could - you could deploy a web application to [Heroku](https://www.heroku.com/), [Digital Ocean](https://www.digitalocean.com/), or [Azure](https://azure.microsoft.com/en-us/) easily enough. But that workflow is not ideal - that's why we recommend a tool called [ngrok](https://ngrok.com/) for local development with webhooks.

In a nutshell, ngrok allows you to give the web app running on your laptop a public URL. This way, you can use your ngrok URL in your Twilio webhook configuration. The ngrok client on your development computer will then forward on those requests to any local application/port you specify.

Consult the [ngrok documentation](https://ngrok.com/docs) for guidance on how to get it set up on your computer. There is also a helpful [Twilio blog post on how to use ngrok](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html). Their simple command line interface should work to forward webhook requests to any kind of application. Whether you are writing your own code or using the built-in IDE, ngrok can help you give your webhook a public URL.