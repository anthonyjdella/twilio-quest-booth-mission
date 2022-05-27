module.exports = function(event, world) {
  let dir = `/Users/${process.env.USER}/Library/Application Support/TwilioQuest/QuestIDE/vr_mission_template`;
  console.log(`VR Template: ${event.name}`);
  console.log(event);
  console.log(world);

  if (event.name === 'triggerAreaWasEntered' && event.target.name.includes('Complete')){
    console.log(event)
    console.log('Wiping Memory');
  
    world.removeObjective('vr_mission_template','tutorial')
    world.removeObjective('vr_mission_template', 'buy_number')
    world.removeObjective('vr_mission_template', 'send_message')
    world.removeObjective('vr_mission_template', 'make_phone_call')
    world.removeObjective('vr_mission_template', 'send_whatsapp')
    world.removeObjective('vr_mission_template', 'join_sandbox')
    world.removeObjective('vr_mission_template', 'swag_chest')


    switch(event.target.key){
      case "messaging":
        
        break;
      case "whatsApp":
        break;
      case "calls":
        break;
      default:

    }

    world.warp('vr_mission_template','player_entry1','default')
    
    console.log(world);

  }
}
