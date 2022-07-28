# TwilioQuest Booth Extension
This is a short mission of TwilioQuest Designed for Twilio's Devangel's to run at booths.
A mission takes about 5-7 minutes to complete.
  
## Installing the Extension
You can install this extension by following the steps in [Enabling Extensions](#enabling-extensions) on their own machines, and then placing your extension in the folder they specified for extensions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
  - [Enabling extensions](#enabling-extensions)
  - [Personalisation for Your Twilio Account](#personalisation-for-your-twilio-account)
- [At the Booth](#at-the-booth)
  - [Prep](#prep)
  - [PlayThrough](#playthrough)
- [Future To Do List](#future-to-do-list)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started
The first step is to enable extensions in the TQ game client.

### Enabling extensions

In the `Settings` UI (press the `3` key in-game), navigate to the `Extensions` submenu. Click the button there labeled `Enable Extensions`.

![Enable Extensions in the Settings UI](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fenable-extensions.png?alt=media&token=8cc8e5ea-ee56-4a39-ae92-91add950b040)

**IMPORTANT NOTE:** As indicated in the UI, make sure to only use extensions from trusted sources. Like "mods" from other games you may have played before (Minecraft, Skyrim, etc.), a TwilioQuest extension will be able to execute code on your computer. Exercise caution when installing an extension, just as you would using any third-party code on your computer.
Once you have enabled extensions, specify a folder on your computer where you will download and manage extensions. This is the folder that contains the parent folder of `images`, `levels`, `objects` and so on, i.e. two levels above these folders. Specify the [full path](https://en.wikipedia.org/wiki/Fully_qualified_name#Filenames_and_paths) to this folder on your computer.

![Specify a folder path for extensions](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fext-folder.png?alt=media&token=4936dd5c-d84c-459e-9179-4c545a64b297)

Once you have enabled extensions, you should see a listing of automatically-installed "base extensions", and a list of any extensions you have installed yourself.

> Hint: If you don't see that the extension is loaded, hit the "Disable Extensions" button and enable them again.

### Personalisation for Your Twilio Account
There are a few bits of code that you need to modify so that the instructions are consistent with your account.

1. Ensure that the TwilioQuest game has your demo account sid and auth token. You can do this playing the "Twilio API Setup" training mission from the Fog Owl.
2. Change the Whatsapp Join Code in `./levels/vr_mission_template/join_sandbox/description.md` to the code from [your console](https://www.twilio.com/console/sms/whatsapp/sandbox).

## At the Booth
Here are instructions that should help guide you through the prep to run TQ at the booth.

### Prep
To run this custom extension at the booth you will need to have 2 or 3 windows open:
- Window running TwilioQuest, with the Booth Mission already loaded
- Use the demo user to log into the Twilio Console and open the [Active Numbers](https://www.twilio.com/console/phone-numbers/) (and buy a number) or the [Buy Numbers](https://www.twilio.com/console/phone-numbers/search) page. 
  > It's useful to prepare address/identity requirements ahead of time or have a number that is already owned in countries that have difficult process for acquiring numbers.
- Open the [Twiml Bins](https://www.twilio.com/console/runtime/twiml-bins) page with a prepared TwiML bin ready.
- Optional: Install a  browser extension like [SessionBuddy](https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko?hl=en) to save the open tabs in case you need to restore them between players.

### Playthrough
1. When someone starts the game they can play through the first barrier with little guidance.

2. At the second barrier they will need to buy a phone number or find the number you already own. Direct them to switch to the other window where they can do this. When they input the number it will be saved as an environment variable.

3. After this they will have 3 choices;
    * SMS Message: Turn Right; They will have to add a `to` and `body` parameter and send a message to themselves. 
    * Phone Call: Turn Left; They will have to add a `to` and `url`. For the URL direct them to the TwiML bin page where they can edit the TwiML Bin to Say what they would like.
    * WhatsApp: Head straight up; They will have to join the sandbox associated with whatever account you are using. They can then send a whatsapp message to themselves on the second mission.

4. Once they have completed the mission they can open the chest. *In the future this will increment a counter to keep a count of the missions completed* To reset the game simply walk through the exit at the top of the screen. This will reload the mission with all the code and the barriers reset.

## Future To Do List
- [ ] Create Automated counter for how many times each mission has been completed
- [ ] Create Embedded form for people to submit job title, company and email to win prizes

## License
[This template](https://github.com/TwilioQuest/twilioquest-extension-template) is open source under the MIT license.
