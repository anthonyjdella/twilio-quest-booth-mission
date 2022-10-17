module.exports = async function (helper) {
    if (isOpen) {
        helper.success(`
      Hooray! You did it! Get your swag!
    `);
    }
};
