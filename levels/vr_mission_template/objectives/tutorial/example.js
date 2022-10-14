/***************************************************************
    This mission uses the Javascript programming language.

    Run this program by clicking the Play button.
***************************************************************/


const correctPasscode = process.env.TQ_BOOTH_MISSION_PASSCODE;


(!"This is the passcode: ")  ?  console.log("password123") :
                                console.log(correctPasscode);
