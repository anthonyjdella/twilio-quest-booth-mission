# The Twilio Sandbox for WhatsApp: What is this all about?

So you want to send WhatsApp messages with Twilio? That's awesome! To send WhatsApp message from your Twilio number (<%= env.TQ_TWILIO_NUMBER.value %>), you will need WhatsApp approval, which can take time.

**The best way to get started is with the Twilio Sandbox for WhatsApp.** The Sandbox has a pre-approved number that you can use to send and receive messages to numbers that **you** configure. Let's get started!

In the onboarding flow, you will send a message from your device using WhatsApp to the shared, pre-approved Sandbox number. The "sandbox" metaphor refers to the limited functionality of sending messages only between the shared number and WhatsApp numbers that you specifically register, like a safe area to play and explore. It's great for testing but should not be your production option.

## Find the Sandbox in your Console

Start by navigating to the [Sandbox onboarding section of your Console](https://www.twilio.com/console/sms/whatsapp/learn).

The first step of the Sandbox onboard prompts you to send a message to the shared WhatsApp number. This activates the Sandbox for you, allowing you to prototype with the shared WhatsApp number and the number that you use to opt in. Your number is now registered with the Sandbox, so you can use it to send and receive messages with the shared Sandbox number.

**Note: This is NOT your Twilio number. Use the number that you use with WhatsApp for this mission.**

## Send your first WhatsApp message from the Sandbox

On the next panel of the Sandbox onboarding, you can send an outbound message to your own phone number (the one you connected to the Sandbox in the last step). You can pick from one of three templates to send your first message. We'll be talking about templates a little later, but for now, pick one that speaks to you.

1. Template choices (Appointment Reminders, Order Notifications, Verification Codes)
2. The to-number should be your registered number. The from-number will be the shared WhatsApp number.
3. Hit the "Make Request" button to send your message!


After you hit the "Make Request" button, confirm that you get the outbound message through WhatsApp.

## Two-way messaging: Give and take

Next, you'll get a taste of two-way messaging in the Sandbox. You will send a WhatsApp message to the shared Sandbox number from your device and reply with a non-templated message.

## You made it!

Once you've completed the Sandbox onboarding, answer the question in the hack interface to demonstrate your completion of the Sandbox onboarding process and readiness to continue. We'll check your most recent messages to confirm that you have sent and received the messages in the onboarding flow. Then you'll be ready to learn more about WhatsApp and Twilio!