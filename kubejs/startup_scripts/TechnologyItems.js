//TODO: For the love of god make a asset file for a list of items to iterate over to save this file from becoming an absolute monolith
const $TechnologyRarity = Java.loadClass("net.minecraft.world.item.Rarity");
const technologyRarity = $TechnologyRarity.create("TECHNOLOGY", Color.RED);

const technologyItemLists = [
    {
        "modName": "create",
        "modList":
        [
            // Equipment
            "wrench",
            "copper_backtank",
            "netherite_backtank",
            "linked_controller",
            "potato_cannon",
            "extendo_grip",
            "wand_of_symmetry",

            // Blocks
            "shaft",
            "cogwheel",
            "large_cogwheel",
            "gearbox",
            "vertical_gearbox",
            "clutch",
            "gearshift",
            "encased_chain_drive",
            "adjustable_chain_gearshift",
            "belt_connector",
            "water_wheel",
            "large_water_wheel",
            "encased_fan",
            "nozzle",
            "turntable",
            "hand_crank",
            "cuckoo_clock",
            "millstone",
            "crushing_wheel",
            "mechanical_press",
            "mechanical_mixer",
            "basin",
            "empty_blaze_burner",
            "blaze_burner",
            "depot",
            "weighted_ejector",
            "chute",
            "smart_chute",
            "speedometer",
            "stressometer",
            "wooden_bracket"
        ]
    }
]

ItemEvents.modification(event => {
    for (var i = 0; i < technologyItemLists.length; i++)
    {
        global.itemListSetRarity(event, 'TECHNOLOGY', technologyItemLists[i])
    }
});
