const reset = require("./events/reset");

let counter1 = localStorage.getItem("counter1");
let counter2 = localStorage.getItem("counter2");
let counter3 = localStorage.getItem("counter3");
let counter4 = localStorage.getItem("counter4");
let counter5 = localStorage.getItem("counter5");

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

    if (event.name === "playerDidInteract" && event.target.name == "book") {
        world.showOverlayComponent({
            key: "iframe",
            props: {
                url:
                    "http://localhost:3000/" +
                    "?embedded=true",
            },
        });
        console.log(
            "http://localhost:3000/" + "?embedded=true"
        );
    }

    if (event.name === "playerDidInteract" && event.target.name == "ghost") {
        world.showOverlayComponent({
            key: "iframe",
            props: {
                url: "http://localhost:3000/scary" + "?embedded=true",
            },
        });
        console.log("http://localhost:3000/scary" + "?embedded=true");
    }

    if (event.name === "playerDidInteract" && event.target.name == "book2") {
        world.showNotification(
            "Curiosity and Exploration are important traits to have. Look around the map for a hidden station to earn Swag."
        );
    }

    if (
        event.name === "triggerAreaWasEntered" &&
        event.target.name == "secret"
    ) {
        world.showNotification(
            "Congrats! You found the secret station and earned some Swag!"
        );
    }

    if (event.name === "objectiveCompleted" && event.objective === "tutorial") {
        if (counter1 == null) {
            localStorage.setItem("counter1", 1);
        } else {
            localStorage.setItem("counter1", counter1++);
        }
    }

    if (event.name === "playerDidInteract" && event.target.name == "stats1") {
        world.showNotification(
            "This first challenge has been completed " +
                localStorage.getItem("counter1") +
                " times."
        );
    }

    if (event.name === "objectiveCompleted" && event.objective === "buy_number") {
        if (counter2 == null) {
            localStorage.setItem("counter2", 1);
        } else {
            localStorage.setItem("counter2", counter2++);
        }
    }

    if (event.name === "playerDidInteract" && event.target.name == "stats2") {
        world.showNotification(
            "This second challenge has been completed " +
                localStorage.getItem("counter2") +
                " times."
        );
    }

    if (event.name === "objectiveCompleted" && event.objective === "send_message") {
        if (counter3 == null) {
            localStorage.setItem("counter3", 1);
        } else {
            localStorage.setItem("counter3", counter3++);
        }
    }

    if (event.name === "playerDidInteract" && event.target.name == "stats3") {
        world.showNotification(
            "This Twilio SMS mission has been completed " +
                localStorage.getItem("counter3") +
                " times."
        );
    }

    if (event.name === "objectiveCompleted" && event.objective === "join_room") {
        if (counter4 == null) {
            localStorage.setItem("counter4", 1);
        } else {
            localStorage.setItem("counter4", counter4++);
        }
    }

    if (event.name === "playerDidInteract" && event.target.name == "stats4") {
        world.showNotification(
            "This Twilio Video mission has been completed " +
                localStorage.getItem("counter4") +
                " times."
        );
    }

        if (event.name === "objectiveCompleted" && event.objective === "make_phone_call") {
        if (counter5 == null) {
            localStorage.setItem("counter5", 1);
        } else {
            localStorage.setItem("counter5", counter5++);
        }
    }

    if (event.name === "playerDidInteract" && event.target.name == "stats5") {
        world.showNotification(
            "This Twilio Voice mission has been completed " +
                localStorage.getItem("counter5") +
                " times."
        );
    }

    if (
        event.name === "triggerAreaWasEntered" &&
        event.target.name == "devMode"
    ) {
        world.warp("vr_mission_template", "player_entry_dev", "default");
    }

    world.setState(counter1);
    world.setState(counter2);
    world.setState(counter3);
    world.setState(counter4);
    world.setState(counter5);
};
