module.exports = function (event, world) {
    console.log(`VR Template: ${event.name}`);
    let electron = require("electron");
    const levelFolder = `${electron.remote.app.getPath(
        "userData"
    )}/QuestIDE/${world.getCurrentLevelName()}`;
    const sampleCodeFolder = `${
        world.getContext().extensions.directory
    }/twilioQuestBoothExecution/levels/vr_mission_template/objectives`;
    const fs = require("fs");

    require("dotenv").config();

    if (
        event.name === "triggerAreaWasEntered" &&
        event.target.name.includes("Complete")
    ) {
        console.log(event);
        console.log("Wiping Memory");

        world.removeObjective("vr_mission_template", "tutorial");
        world.removeObjective("vr_mission_template", "buy_number");
        world.removeObjective("vr_mission_template", "send_message");
        world.removeObjective("vr_mission_template", "make_phone_call");
        world.removeObjective("vr_mission_template", "send_whatsapp");
        world.removeObjective("vr_mission_template", "join_sandbox");
        world.removeObjective("vr_mission_template", "swag_chest");

        //RESET USER CODE
        fs.readdir(levelFolder, (err, files) => {
            files.forEach((missionFolder) => {
                fs.readdir(`${levelFolder}/${missionFolder}`, (err, files) => {
                    console.log(`Rewriting ${missionFolder}`);
                    const dest = `${levelFolder}/${missionFolder}/user_code.js`;
                    const src = `${sampleCodeFolder}/${missionFolder}/example.js`;
                    fs.copyFile(
                        src,
                        dest,
                        fs.constants.COPYFILE_FICLONE,
                        (error) => console.error
                    );
                });
            });
        });

        world.warp("vr_mission_template", "player_entry1", "default");

        console.log(world);
    }
};
