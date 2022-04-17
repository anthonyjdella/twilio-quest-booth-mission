
module.exports = async function (helper) {
  const input = helper.getNormalizedInput("passcode");
  console.log(`You entered: ${input}`)

  if (!input) {
    return helper.fail(`Please find the passcode in the code editor.`);
  } else if (input.toLowerCase() === 'i love javascript'){
    return helper.success(
      `You enter the passcode needed to bypass the lasers. Soon after, the lasers
      retract and clear your path forward.`
    )
  } else return helper.fail(
    'Passcode not recognized. Please find the passcode in the code editor.'
  )
};