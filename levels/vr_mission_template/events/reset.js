async function reset(event, world, worldState) {
    let electron = require("electron");
    const levelFolder = `${electron.remote.app.getPath(
        "userData"
    )}/QuestIDE/${world.getCurrentLevelName()}`;
    const sampleCodeFolder = `${
        world.getContext().extensions.directory
    }/twilioQuestBoothExecution/levels/vr_mission_template/objectives`;
    const fs = require("fs");

    //levelFolder=/Users/anthonyjdella/Library/Application Support/TwilioQuest/QuestIDE/fog_owl
    //sampleCodeFolder=/Users/anthonyjdella/Desktop/Twilio-Quest/twilioQuestBoothExecution/levels/vr_mission_template/objectives

    //levelFolder=/Users/anthonyjdella/Library/Application Support/TwilioQuest/QuestIDE/vr_mission_template

    // console.log(event);
    console.log("HEHE");
    console.log(levelFolder, sampleCodeFolder);
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
}

module.exports = reset;
