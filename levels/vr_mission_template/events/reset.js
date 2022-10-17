async function reset(event, world, worldState) {
    let electron = require("electron");
    const levelFolder = `${electron.remote.app.getPath(
        "userData"
    )}/QuestIDE/${world.getCurrentLevelName()}`;
    const sampleCodeFolder = `${
        world.getContext().extensions.directory
    }/twilioQuestBoothExecution/levels/vr_mission_template/objectives`;
    const fs = require("fs");

    console.log("Wiping Memory");

    world.removeObjective("vr_mission_template", "tutorial");
    world.removeObjective("vr_mission_template", "buy_number");
    world.removeObjective("vr_mission_template", "send_message");
    world.removeObjective("vr_mission_template", "make_phone_call");
    world.removeObjective("vr_mission_template", "join_room");
    world.removeObjective("vr_mission_template", "swag_chest");

    //RESET USER CODE
    fs.readdir(sampleCodeFolder, (err, files) => {
        const boothMissionFolder =
            "/Users/anthonyjdella/Library/Application Support/TwilioQuest/QuestIDE/vr_mission_template";

        files.forEach((missionFolder) => {
            fs.readdir(
                `${boothMissionFolder}/${missionFolder}`,
                (err, files) => {
                    const dest = `${boothMissionFolder}/${missionFolder}/user_code.js`;
                    const src = `${sampleCodeFolder}/${missionFolder}/example.js`;
                    fs.copyFile(
                        src,
                        dest,
                        fs.constants.COPYFILE_FICLONE,
                        (error) => console.error
                    );
                }
            );
        });
    });
}

module.exports = reset;
