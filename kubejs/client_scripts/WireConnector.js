Ponder.registry((event) => {
    event.create("immersiveengineering:connector_lv").scene("connectors_lv", "Low Voltage Connectors", (scene, util) => {
        scene.showStructure();

        scene.world.setBlock([1, 1, 2], "immersiveengineering:connector_lv", true);
        scene.world.setBlock([3, 1, 2], "immersiveengineering:connector_lv", true);

        scene.world.modifyBlocks([1, 1, 2, 3, 1, 2], (curState) => curState.with("facing", "down"), false);
    });
});
