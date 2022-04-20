let fs = require("fs");
let path = `/Users/${process.env.USER}/Library/Application Support/TwilioQuest/config.json`;

var file = JSON.parse(fs.readFileSync(path).toString());
let completedObjectives = file.completedObjectives;

for (const objective in completedObjectives) {
  if (
    objective.includes("vr_mission_template")
  ) {
    delete completedObjectives[objective];
  }
}

file.questStatus.vr_mission_template.complete = false;

fs.writeFileSync(path, JSON.stringify(file));

let dir = `/Users/${process.env.USER}/Library/Application Support/TwilioQuest/QuestIDE/vr_mission_template`;
fs.rm(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});
