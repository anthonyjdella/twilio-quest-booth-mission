
module.exports = async function (helper) {
  const input = helper.getNormalizedInput("passcode");
  console.log(`You entered: ${input}`)

  if (!input) {
    return helper.fail(
        `Please find the passcode in the code editor. There, try clicking on the Play button.`
    );
  } else if (input.toLowerCase() === 'super secret passcode'){
    return helper.success(
      `You enter the passcode needed to bypass the lasers. Soon after, the lasers
      retract and clear your path forward.dw`
    )
  } else return helper.fail(
      "Passcode not recognized. Please find the passcode in the code editor. There, try clicking on the Play button."
  );
};