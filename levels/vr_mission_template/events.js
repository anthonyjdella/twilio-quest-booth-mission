const reset = require("./events/reset");

module.exports = function (event, world) {
    console.log(`VR Template: ${event.name}`);

    if (
        event.name === "triggerAreaWasEntered" &&
        event.target.name.includes("Complete")
    ) {
        reset(event, world);

        world.warp("vr_mission_template", "player_entry1", "default");

        console.log(world);
    } else if (event.name === "levelWillUnload") {
        reset(event, world);

        console.log(world);
    }
};
