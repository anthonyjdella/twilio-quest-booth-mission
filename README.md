# TwilioQuest Booth Extension

🕹️ This short mission of TwilioQuest was designed for Twilio's Devangels to run at booths. A mission takes about 5-7 minutes to complete. It is forked from the first iteration repo made by [@nokenwa](https://github.com/nokenwa/twilioQuestBoothExecution).

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents

-   [What's Different with this Version?](#what-is-different-with-this-version)
-   [Installing the Extension](#installing-the-extension)
-   [Getting Started](#getting-started)
    -   [Enabling extensions](#enabling-extensions)
    -   [Personalisation for Your Twilio Account](#personalisation-for-your-twilio-account)
-   [At the Booth](#at-the-booth)
    -   [Prep](#prep)
    -   [PlayThrough](#playthrough)
-   [Future To Do List](#future-to-do-list)
-   [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## What is Different with this Version?

1. First & second challenges are much trickier, as they're riddles the user needs to figure out.
2. If the player exits the mission after barriers have been lowered, they will reset.
3. Updated titles, menus, and instructions.
4. Voice Call challenge no longer uses a TwiML bin URL. Instead, players just enter the TwiML directly.
5. Fixed a bug where the code editor was not resetting.
6. Revamp the map with a new terrain.
7. Add NPCs with dialog to make the experience more interactive.

---

## Installing the Extension

You can install this extension by following the steps in [Enabling Extensions](#enabling-extensions).

---

## Getting Started

The first step is to enable extensions in the TQ game client.

### Enabling extensions

In the `Settings` UI (press the `3` key in-game), navigate to the `Extensions` submenu. Click the button there labeled `Enable Extensions`.

![Enable Extensions in the Settings UI](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fenable-extensions.png?alt=media&token=8cc8e5ea-ee56-4a39-ae92-91add950b040)

**IMPORTANT NOTE:** As the UI indicates, only use extensions from trusted sources. Like "mods" from other games you may have played before (Minecraft, Skyrim, etc.), a TwilioQuest extension will be able to execute code on your computer. Exercise caution when installing an extension, just as you would using any third-party code on your computer. Once you have enabled extensions, specify a folder on your computer where you will download and manage extensions. This folder contains the parent folder of `images`, `levels`, `objects`, and so on, i.e., two levels above these folders. Specify the [full path](https://en.wikipedia.org/wiki/Fully_qualified_name#Filenames_and_paths) to this folder on your computer.

![Specify a folder path for extensions](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fext-folder.png?alt=media&token=4936dd5c-d84c-459e-9179-4c545a64b297)

Once you have enabled extensions, you should see a listing of automatically-installed "base extensions" and a list of any extensions you have installed yourself.

> Hint: If you don't see the extension loaded, hit the "Disable Extensions" button and enable them again.

### Personalisation for Your Twilio Account

There are a few bits of code that you need to modify so that the instructions are consistent with your account.

Ensure that the TwilioQuest game has your demo account sid and auth token. You can do this by playing the "Twilio API Setup" training mission from the Fog Owl.

---

## At the Booth

Here are instructions that should help guide you through the prep to run TQ at the booth.

### Prep

> Before starting, open the file, `~/Library/Application Support/TwilioQuest/config.json` and add an env file to line 64. The variable name is `TQ_BOOTH_MISSION_PASSCODE` and the value is `Super Secret Passcode`.

I think it's best not to have multiple windows running, just TQ with this Booth Mission already loaded.

### Playthrough

1. The first barrier is a riddle that isn't obvious at first glace. Watch the behavior of the player and assist them as needed.

2. At the second barrier, they will need to buy a phone number or find the number you already own. Please direct them to the code editor where they will see another riddle. This one also isn't obvious, so please help as needed.

3. After this, they will have two choices:

    - SMS Message: Turn Right; They will have to add a `to` and `body` parameter and send a message to themselves.
    - Phone Call: Turn Left; They will have to add a `to` and `url`. For the URL direct them to the TwiML bin page, where they can edit the TwiML Bin to Say what they would like.

4. Once they have completed the mission, they can open the chest. In the future, this will increment a counter to keep a count of the missions completed. To reset the game, simply walk through the exit at the top of the screen. This will reload the mission with all the code, and the barriers reset.

## Future To-Do List

-   [ ] Create an automated counter for how many times each mission has been completed
-   [ ] Create an embedded form for people to submit job title, company, and email to win prizes
-   [x] Reset user code after each playthrough
-   [ ] Add name of conference
-   [ ] Display large sign that says "Win swag play completing a mission"
-   [x] Add NPC with dialog
-   [x] Reskin the map

## License

[This template](https://github.com/TwilioQuest/twilioquest-extension-template) is open source under the MIT license.
